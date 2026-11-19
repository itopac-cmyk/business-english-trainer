/* Persistent progress. Existing v1–v4 fields are retained on upgrade. */
const Store = (() => {
  const KEY = "be-trainer-v1";
  const today = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  const offset = (iso, n) => { const d = new Date(iso + "T12:00:00"); d.setDate(d.getDate() + n); return today(d); };
  const base = () => ({
    version: 5, settings: { sound: true, challenge: false, difficulty: "B2+", xpGoal: 80 },
    streak: { current: 0, best: 0, lastDate: null }, xp: { total: 0, today: 0, date: today() },
    vocab: {}, grammar: {}, cases: {}, lessons: {}, mistakes: [], exams: [],
    history: {}, focus: {}, dailySession: {}, daily: { date: today(), count: 0 },
    hearts: { left: 5, date: today() }, freeze: { available: 1, used: [] }, blitzBest: 0
  });
  let state = base();
  let storageAvailable = true;
  try {
    const p = JSON.parse(localStorage.getItem(KEY) || "null");
    if (p && typeof p === "object") {
      const b = base(); const legacy = (Number(p.version) || 1) < 5; state = { ...b, ...p, version: 5 };
      ["settings", "streak", "xp", "hearts", "freeze", "daily"].forEach(k => state[k] = { ...b[k], ...(p[k] || {}) });
      ["vocab", "grammar", "cases", "lessons", "history", "focus", "dailySession"].forEach(k => { if (!state[k] || typeof state[k] !== "object" || Array.isArray(state[k])) state[k] = {}; });
      ["mistakes", "exams"].forEach(k => { if (!Array.isArray(state[k])) state[k] = []; });
      if (legacy && (!state.settings.xpGoal || state.settings.xpGoal === 50)) state.settings.xpGoal = 80;
      if (![50, 80, 120].includes(state.settings.xpGoal)) state.settings.xpGoal = 80;
    }
  } catch (_) { /* Corrupt storage must never block the app. */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); storageAvailable = true; } catch (_) { storageAvailable = false; } };
  function roll() {
    const t = today();
    if (state.xp.date !== t) state.xp = { total: state.xp.total || 0, today: 0, date: t };
    if (state.hearts.date !== t) state.hearts = { left: 5, date: t };
    if (state.daily.date !== t) state.daily = { date: t, count: 0 };
    const last = state.streak.lastDate;
    if (last && last < offset(t, -1)) {
      if (last === offset(t, -2) && state.freeze.available > 0 && state.streak.current > 0) {
        state.freeze.available--; state.freeze.used.push(offset(t, -1));
        state.streak.lastDate = offset(t, -1);
      } else { state.streak.current = 0; }
    }
    if (!state.history[t]) state.history[t] = { seconds: 0, answers: 0, correct: 0, xp: 0 };
    save();
  }
  roll();
  const get = () => { if (state.xp.date !== today()) roll(); return state; };
  const RANKS = [
    { min: 0, title: "Junior Consultant", emoji: "🌱" },
    { min: 300, title: "Security Specialist", emoji: "🛡️" },
    { min: 1000, title: "Senior Advisor", emoji: "💼" },
    { min: 2500, title: "Principal", emoji: "💎" },
    { min: 5000, title: "C1 Partner", emoji: "🏆" }
  ];
  function rankFor(total = get().xp.total) { let i = RANKS.length - 1; while (i > 0 && total < RANKS[i].min) i--; return { ...RANKS[i], next: RANKS[i + 1] || null }; }
  const addXp = n => { roll(); n = Math.max(0, Math.round(n)); state.xp.total += n; state.xp.today += n; state.history[today()].xp += n; save(); return n; };
  function activity(correct, focus, seconds = 0) {
    roll(); const t = today(), h = state.history[t]; h.answers++; if (correct) h.correct++; h.seconds += seconds;
    state.daily.count++;
    if (state.streak.lastDate !== t) {
      state.streak.current = state.streak.lastDate === offset(t, -1) ? state.streak.current + 1 : 1;
      state.streak.lastDate = t; state.streak.best = Math.max(state.streak.best, state.streak.current);
      if (state.streak.current % 7 === 0) state.freeze.available = Math.min(2, state.freeze.available + 1);
    }
    if (focus) { const f = state.focus[focus] || { correct: 0, total: 0 }; f.total++; if (correct) f.correct++; state.focus[focus] = f; }
    save();
  }
  function vocabRecord(id, correct) {
    const r = state.vocab[id] || { box: 0, due: 0, seen: 0, correct: 0, wrong: 0 };
    r.seen++; if (correct) { r.correct++; r.box = Math.min(5, (r.box || 0) + 1); } else { r.wrong++; r.box = 0; }
    r.due = Date.now() + (correct ? [0, 1, 3, 7, 14, 30][r.box] * 86400000 : 600000);
    state.vocab[id] = r; save();
  }
  function mistake(q) {
    state.mistakes = state.mistakes.filter(m => m.id !== q.id);
    state.mistakes.unshift({ id: q.id, ref: q.ref, prompt: q.prompt || q.text, focus: q.focus, addedAt: Date.now(), reviews: 0 });
    state.mistakes = state.mistakes.slice(0, 150); save();
  }
  function resolve(id) { const m = state.mistakes.find(m => m.id === id); if (m) { m.reviews = (m.reviews || 0) + 1; if (m.reviews >= 2) state.mistakes = state.mistakes.filter(m => m.id !== id); } save(); }
  function lessonSave(id, pct) {
    const old = state.lessons[id] || {}; state.lessons[id] = { ...old, completed: true, best: Math.max(old.best || 0, pct), crowns: Math.max(old.crowns || 0, pct === 100 ? 3 : pct >= 80 ? 2 : 1), attempts: (old.attempts || 0) + 1, lastAt: Date.now() }; save();
  }
  return { get, save, today, offset, roll, rankFor, RANKS, addXp, activity, vocabRecord, mistake, resolve, lessonSave,
    available: () => storageAvailable,
    setSetting: (k, v) => { state.settings[k] = v; save(); },
    loseHeart: () => { state.hearts.left = Math.max(0, state.hearts.left - 1); save(); },
    refillHearts: () => { state.hearts.left = 5; save(); }
  };
})();
