/* Business English – local progress store */
const Store = (() => {
  const KEY = "be-trainer-v1";

  const RANKS = [
    { min: 0, id: "junior", title: "Junior Consultant", emoji: "🌱" },
    { min: 200, id: "specialist", title: "Security Specialist", emoji: "🛡️" },
    { min: 500, id: "senior", title: "Senior Advisor", emoji: "📘" },
    { min: 1000, id: "principal", title: "Principal", emoji: "🏛️" },
    { min: 2000, id: "partner", title: "C1 Partner", emoji: "⭐" },
  ];

  const empty = () => ({
    version: 2,
    settings: { voice: "en-GB", goal: 15, sound: true, challenge: false, xpGoal: 50, freeText: false },
    streak: { current: 0, best: 0, lastDate: null },
    daily: { date: null, count: 0 },
    vocab: {},
    grammar: {},
    cases: {},
    exams: [],
    mistakes: [],
    lastRoute: "#/",
    xp: { total: 0, today: 0, date: null },
    lessons: {},
    quests: { date: null, items: [] },
    hearts: { left: 5, date: null },
  });

  let state = empty();

  function today() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function yesterdayOf(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    dt.setDate(dt.getDate() - 1);
    const yy = dt.getFullYear();
    const mm = String(dt.getMonth() + 1).padStart(2, "0");
    const dd = String(dt.getDate()).padStart(2, "0");
    return `${yy}-${mm}-${dd}`;
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) {
        state = empty();
        return state;
      }
      const parsed = JSON.parse(raw);
      const base = empty();
      state = {
        ...base,
        ...parsed,
        version: Math.max(2, Number(parsed.version) || 1),
        settings: { ...base.settings, ...(parsed.settings || {}) },
        streak: { ...base.streak, ...(parsed.streak || {}) },
        daily: { ...base.daily, ...(parsed.daily || {}) },
        vocab: parsed.vocab || {},
        grammar: parsed.grammar || {},
        cases: parsed.cases || {},
        exams: Array.isArray(parsed.exams) ? parsed.exams : [],
        mistakes: Array.isArray(parsed.mistakes) ? parsed.mistakes : [],
        xp: { ...base.xp, ...(parsed.xp || {}) },
        lessons: parsed.lessons && typeof parsed.lessons === "object" ? parsed.lessons : {},
        quests: { ...base.quests, ...(parsed.quests || {}) },
        hearts: { ...base.hearts, ...(parsed.hearts || {}) },
      };
      if (state.settings.sound === undefined) state.settings.sound = true;
      if (state.settings.challenge === undefined) state.settings.challenge = false;
      if (!state.settings.xpGoal) state.settings.xpGoal = 50;
    } catch (err) {
      state = empty();
    }
    rollDaily();
    return state;
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (err) {
      /* quota or private mode – fail quietly */
    }
  }

  function rollDaily() {
    const t = today();
    if (state.daily.date !== t) {
      state.daily = { date: t, count: 0 };
    }
    if (!state.xp || state.xp.date !== t) {
      state.xp = { total: (state.xp && state.xp.total) || 0, today: 0, date: t };
    }
    if (!state.hearts || state.hearts.date !== t) {
      state.hearts = { left: 5, date: t };
    }
    ensureQuests();
  }

  function questPool(t) {
    /* Stable daily rotation from the date string, not random on each load. */
    let h = 0;
    for (let i = 0; i < t.length; i++) h = (h * 33 + t.charCodeAt(i)) >>> 0;
    const second = [
      { id: "q-vocab", kind: "vocab", title: "10 Vokabeln wiederholen", target: 10, xp: 15 },
      { id: "q-boost", kind: "boost", title: "3 Fehler ausbügeln", target: 3, xp: 15 },
      { id: "q-listen", kind: "listen", title: "2 Hörverstehen-Aufgaben lösen", target: 2, xp: 15 },
    ][h % 3];
    return [
      { id: "q-lesson", kind: "lesson", title: "1 Lektion abschließen", target: 1, xp: 20 },
      second,
      { id: "q-score", kind: "score80", title: "80 % in einer Lektion erreichen", target: 1, xp: 20 },
    ].map((q) => ({ ...q, progress: 0, done: false }));
  }

  function ensureQuests() {
    const t = today();
    if (state.quests && state.quests.date === t && Array.isArray(state.quests.items) && state.quests.items.length) {
      return state.quests;
    }
    state.quests = { date: t, items: questPool(t) };
    save();
    return state.quests;
  }

  function rankFor(total) {
    const n = total || 0;
    let cur = RANKS[0];
    let next = RANKS[1] || null;
    for (let i = 0; i < RANKS.length; i++) {
      if (n >= RANKS[i].min) {
        cur = RANKS[i];
        next = RANKS[i + 1] || null;
      }
    }
    return { ...cur, next, total: n };
  }

  function addXp(n) {
    rollDaily();
    n = Math.max(0, Math.round(n || 0));
    if (!n) return 0;
    state.xp.total = (state.xp.total || 0) + n;
    state.xp.today = (state.xp.today || 0) + n;
    save();
    return n;
  }

  function bumpQuest(kind, amount) {
    rollDaily();
    const qs = ensureQuests();
    let gained = 0;
    qs.items.forEach((q) => {
      if (q.done || q.kind !== kind) return;
      q.progress = Math.min(q.target, (q.progress || 0) + (amount || 1));
      if (q.progress >= q.target) {
        q.done = true;
        gained += addXp(q.xp || 0);
      }
    });
    save();
    return gained;
  }

  function lessonGet(id) {
    return state.lessons[id] || null;
  }

  function lessonSave(id, data) {
    const prev = state.lessons[id] || { completed: false, crowns: 0, best: 0, attempts: 0 };
    const rec = { ...prev, ...data, lastAt: Date.now() };
    if (data && data.crowns != null) rec.crowns = Math.max(prev.crowns || 0, data.crowns);
    if (data && data.best != null) rec.best = Math.max(prev.best || 0, data.best);
    state.lessons[id] = rec;
    save();
    return rec;
  }

  function heartsEnabled() {
    return !!state.settings.challenge;
  }

  function heartsLeft() {
    rollDaily();
    return state.hearts.left;
  }

  function loseHeart() {
    rollDaily();
    if (!heartsEnabled()) return state.hearts.left;
    if (state.hearts.left > 0) state.hearts.left -= 1;
    save();
    return state.hearts.left;
  }

  function addHearts(n) {
    rollDaily();
    state.hearts.left = Math.max(0, Math.min(5, (state.hearts.left || 0) + (n || 1)));
    save();
    return state.hearts.left;
  }

  function refillHearts() {
    rollDaily();
    state.hearts.left = 5;
    save();
  }

  function get() {
    return state;
  }

  function setSetting(k, v) {
    state.settings[k] = v;
    save();
  }

  function setRoute(hash) {
    state.lastRoute = hash;
    save();
  }

  function bumpActivity(n) {
    rollDaily();
    const t = today();
    state.daily.count += n || 1;
    const last = state.streak.lastDate;
    if (last === t) {
      /* already counted today */
    } else if (last && last === yesterdayOf(t)) {
      state.streak.current += 1;
      state.streak.lastDate = t;
    } else {
      state.streak.current = 1;
      state.streak.lastDate = t;
    }
    if (state.streak.current > state.streak.best) {
      state.streak.best = state.streak.current;
    }
    save();
  }

  const INTERVALS = [0, 1, 3, 7, 14, 30];

  function vocabGet(id) {
    return state.vocab[id] || null;
  }

  function vocabRecord(id, correct) {
    const now = Date.now();
    const rec = state.vocab[id] || {
      box: 0,
      due: now,
      correct: 0,
      wrong: 0,
      seen: 0,
    };
    rec.seen += 1;
    if (correct) {
      rec.correct += 1;
      rec.box = Math.min((rec.box || 0) + 1, INTERVALS.length - 1);
      const days = INTERVALS[rec.box];
      rec.due = now + days * 24 * 60 * 60 * 1000;
    } else {
      rec.wrong += 1;
      rec.box = 0;
      rec.due = now + 10 * 60 * 1000;
    }
    state.vocab[id] = rec;
    bumpActivity(1);
    bumpQuest("vocab", 1);
    return rec;
  }

  function grammarProgress(chapterId) {
    return state.grammar[chapterId] || { done: 0, correct: 0, total: 0, completed: false };
  }

  function grammarSave(chapterId, data) {
    state.grammar[chapterId] = { ...grammarProgress(chapterId), ...data };
    save();
  }

  function caseProgress(caseId) {
    return state.cases[caseId] || {
      phrases: 0,
      phraseTotal: 0,
      exercisesCorrect: 0,
      exercisesTotal: 0,
      modelHeard: false,
      completed: false,
    };
  }

  function caseSave(caseId, data) {
    state.cases[caseId] = { ...caseProgress(caseId), ...data };
    save();
  }

  function addExam(result) {
    state.exams.unshift(result);
    if (state.exams.length > 20) state.exams = state.exams.slice(0, 20);
    bumpActivity(result.total || 0);
    save();
  }

  function addMistake(item) {
    const key = item.id || (item.prompt || "") + (item.answer || "");
    state.mistakes = state.mistakes.filter((m) => (m.id || (m.prompt || "") + (m.answer || "")) !== key);
    state.mistakes.unshift({
      ...item,
      addedAt: Date.now(),
      reviews: 0,
      resolved: false,
    });
    if (state.mistakes.length > 80) state.mistakes = state.mistakes.slice(0, 80);
    save();
  }

  function resolveMistake(id, correct) {
    const m = state.mistakes.find((x) => x.id === id);
    if (!m) return;
    if (correct) {
      m.reviews = (m.reviews || 0) + 1;
      if (m.reviews >= 2) m.resolved = true;
    } else {
      m.reviews = 0;
    }
    state.mistakes = state.mistakes.filter((x) => !x.resolved);
    bumpActivity(1);
    if (correct) bumpQuest("boost", 1);
    save();
  }

  function clearMistakes() {
    state.mistakes = [];
    save();
  }

  function resetAll() {
    state = empty();
    save();
  }

  load();
  return {
    load,
    save,
    get,
    today,
    setSetting,
    setRoute,
    bumpActivity,
    vocabGet,
    vocabRecord,
    grammarProgress,
    grammarSave,
    caseProgress,
    caseSave,
    addExam,
    addMistake,
    resolveMistake,
    clearMistakes,
    resetAll,
    INTERVALS,
    RANKS,
    addXp,
    rankFor,
    ensureQuests,
    bumpQuest,
    lessonGet,
    lessonSave,
    heartsEnabled,
    heartsLeft,
    loseHeart,
    addHearts,
    refillHearts,
  };
})();
