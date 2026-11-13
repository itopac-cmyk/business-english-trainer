/* Business English – local progress store */
const Store = (() => {
  const KEY = "be-trainer-v1";

  const empty = () => ({
    version: 1,
    settings: { voice: "en-GB", goal: 15 },
    streak: { current: 0, best: 0, lastDate: null },
    daily: { date: null, count: 0 },
    vocab: {},
    grammar: {},
    cases: {},
    exams: [],
    mistakes: [],
    lastRoute: "#/",
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
        settings: { ...base.settings, ...(parsed.settings || {}) },
        streak: { ...base.streak, ...(parsed.streak || {}) },
        daily: { ...base.daily, ...(parsed.daily || {}) },
        vocab: parsed.vocab || {},
        grammar: parsed.grammar || {},
        cases: parsed.cases || {},
        exams: Array.isArray(parsed.exams) ? parsed.exams : [],
        mistakes: Array.isArray(parsed.mistakes) ? parsed.mistakes : [],
      };
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
  };
})();
