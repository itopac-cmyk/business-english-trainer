/* Exercise resolution and session curation. No DOM dependencies. */
const Engine = (() => {
  const decks = [...CONTENT.packs, ...EXTRA_DECKS];
  const vocab = decks.flatMap(d => d.words.map(w => ({ ...w, deck: d.id, deckName: d.titleDe, level: d.level || "B2" })));
  const grammar = [...CONTENT.grammar, ...GRAMMAR_EXTRA];
  const V = Object.fromEntries(vocab.map(w => [w.id, w]));
  const E = Object.fromEntries(ERROR_ITEMS.map(e => [e.id, e]));
  const U = Object.fromEntries(UPGRADE_ITEMS.map(u => [u.id, u]));
  const C = Object.fromEntries(CHAT_SCENARIOS.map(c => [c.id, c]));
  const G = {}; grammar.forEach(g => g.exercises.forEach(q => G[g.id + ":" + q.id] = { ...q, chapter: g.id, chapterName: g.title }));
  const CO = Object.fromEntries(COLLOCATIONS.map(c => [c.id, c]));
  const FOCUS = { phrases: "Business-Phrasen", email: "E-Mail-Struktur", spelling: "Rechtschreibung", if: "If-Clauses", inversion: "Inversion" };
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const focusFor = area => area === "conditionals" ? "if" : area === "inversion" ? "inversion" : ["email", "emailpack", "formality"].includes(area) ? "email" : "phrases";
  function choices(correct, wrong) { return shuffle([{ text: correct, correct: true }, ...wrong.filter(w => w !== correct).slice(0, 3).map(text => ({ text, correct: false }))]); }
  function resolve(ref) {
    const [kind, id, sub] = ref.split(":");
    let q = { ref, id: ref, type: kind, focus: "phrases", level: "B2+" };
    if (["v", "vr", "vl", "b", "p"].includes(kind)) {
      if (kind === "p") {
        const ws = id.split(",").map(i => V[i]); if (ws.some(w => !w)) return null;
        return { ...q, type: "pairs", words: ws, prompt: "Vier Paare. Ein sauberer Match.", explain: "Verbinde die englische Wendung mit ihrer deutschen Bedeutung." };
      }
      const w = V[id]; if (!w) return null;
      const distractors = shuffle(vocab.filter(x => x.deck === w.deck && x.id !== w.id));
      q = { ...q, vocabId: id, focus: focusFor(w.deck), term: w.term, de: w.de, example: w.example, note: w.hint, audio: w.example, level: w.level };
      if (kind === "b") return { ...q, type: "build", prompt: w.de, target: w.example, tokens: shuffle(w.example.split(/\s+/).map((text, i) => ({ text, i }))), explain: w.hint || "Achte auf die Satzstellung und feste Wendungen.", tip: w.example };
      if (kind === "vl") return { ...q, type: "listen", prompt: "Hör genau hin. Was bedeutet die Aussage?", options: choices(w.exampleDe || w.de, distractors.slice(0, 3).map(x => x.exampleDe || x.de)), explain: w.hint, tip: w.example };
      const reverse = kind === "vr";
      return { ...q, type: "mc", label: reverse ? "Aktiv abrufen" : "Warm-up", prompt: reverse ? w.de : w.term, options: choices(reverse ? w.term : w.de, distractors.slice(0, 3).map(x => reverse ? x.term : x.de)), explain: w.hint, tip: w.example };
    }
    if (kind === "e") { const e = E[id]; if (!e) return null; return { ...q, ...e, id: ref, type: "error", options: choices(e.fix, e.wrong), prompt: e.text, tip: e.text.replace(/\[\[.*?\]\]/, e.fix) }; }
    if (kind === "u") { const u = U[id]; if (!u) return null; return { ...q, ...u, id: ref, type: "upgrade", prompt: u.b1, options: choices(u.c1, u.weaker), explain: u.why, tip: u.c1 }; }
    if (kind === "g") {
      const g = G[id + ":" + sub]; if (!g) return null;
      const correct = g.type === "gap" ? g.accept[0] : g.options[g.answer];
      return { ...q, type: "mc", label: "Grammatik-Labor", focus: focusFor(g.area), chapter: g.chapter, prompt: g.prompt, options: choices(correct, g.options.filter(x => x !== correct)), explain: g.explain, tip: g.prompt.replace("___", correct) };
    }
    if (kind === "x") {
      const x = CONTENT.exam.find(x => x.id === id); if (!x) return null;
      const correct = x.type === "gap" ? x.accept[0] : x.options[x.answer];
      return { ...q, type: "mc", label: "Prüfung", focus: focusFor(x.area), prompt: x.prompt, options: choices(correct, x.options.filter(x => x !== correct)), explain: x.explain, tip: x.prompt.replace("___", correct) };
    }
    if (kind === "r") {
      const c = C[id], t = c && c.turns[Number(sub)]; if (!t) return null;
      return { ...q, type: "reply", persona: c.persona, ctx: c.title, prompt: t.client, audio: t.client, speaker: c.persona.voice, options: shuffle(t.options.map(o => ({ text: o[0], correct: o[1] === 3, score: o[1], reply: o[3], coach: o[4] }))), explain: "Erst das Anliegen anerkennen, dann einen konkreten nächsten Schritt anbieten.", tip: t.options.find(o => o[1] === 3)[0] };
    }
    if (kind === "c") { const c = CO[id]; if (!c) return null; return { ...q, type: "mc", label: "Business Collocation", prompt: c.gap, options: choices(c.answer, c.wrong), explain: "Feste Wendung: " + c.gap.replace("___", c.answer), tip: c.gap.replace("___", c.answer) }; }
    return null;
  }
  const DAY = () => Math.floor(new Date(Store.today() + "T12:00:00").getTime() / 86400000);
  function daily() {
    const n = DAY(), level = Store.get().settings.difficulty;
    const pick = (arr, off = 0) => arr[(n + off) % arr.length];
    const due = vocab.filter(w => Store.get().vocab[w.id] && Store.get().vocab[w.id].due <= Date.now());
    const pool = level === "C1" ? vocab.filter(w => w.level === "C1") : level === "B2" ? vocab.filter(w => w.level === "B2") : vocab;
    const a = due.length ? due[n % due.length] : pick(pool), b = pick(pool, 13);
    const lpool = vocab.filter(w => !!AUDIO_MAP["en-GB-SoniaNeural|" + w.example]);
    const bpool = vocab.filter(w => w.example.split(/\s+/).length <= 13);
    const chats = level === "C1" ? CHAT_SCENARIOS.filter(c => c.level === "C1") : level === "B2" ? CHAT_SCENARIOS.filter(c => c.level === "B2") : CHAT_SCENARIOS;
    const chat = pick(chats);
    const refs = ["vr:" + a.id, "v:" + b.id, "c:" + pick(COLLOCATIONS).id,
      "e:" + pick(ERROR_ITEMS).id, "u:" + pick(UPGRADE_ITEMS).id, "e:" + pick(ERROR_ITEMS, 11).id,
      "r:" + chat.id + ":0", "r:" + chat.id + ":1", "r:" + chat.id + ":2",
      "vl:" + pick(lpool).id, "b:" + pick(bpool, 3).id, "g:" + pick(Object.keys(G).filter(k => k.startsWith(level === "C1" ? "inversion" : "conditionals")))];
    return refs.map((ref, i) => ({ ...resolve(ref), phase: ["Warm-up", "Fehler & Upgrade", "Praxis-Fall", "Hören & Bauen"][Math.floor(i / 3)] }));
  }
  function boost() {
    return Store.get().mistakes.slice(0, 10).map(m => {
      const resolved = m.ref && resolve(m.ref);
      if (resolved) return resolved;
      // Legacy mistakes can still be reviewed after migrating from earlier versions.
      if (Array.isArray(m.options) && typeof m.answer === "number" && m.options[m.answer]) return { id: m.id, ref: m.ref || "legacy:" + m.id, type: "mc", focus: focusFor(m.area), prompt: m.prompt, options: choices(m.options[m.answer], m.options.filter((_, i) => i !== m.answer)), explain: m.explain || "Wiederhole die feste Wendung.", tip: m.options[m.answer] };
      return null;
    }).filter(Boolean);
  }
  function exam() {
    const take = (arr, n, pre) => shuffle(arr).slice(0, n).map((e) => pre + e.id);
    const refs = [
      ...take(ERROR_ITEMS.filter((e) => e.focus === "spelling"), 2, "e:"),
      ...take(ERROR_ITEMS.filter((e) => e.focus === "if"), 3, "e:"),
      ...take(ERROR_ITEMS.filter((e) => e.focus === "inversion"), 2, "e:"),
      ...take(UPGRADE_ITEMS.filter((e) => e.focus === "email"), 3, "u:"),
      ...take(UPGRADE_ITEMS.filter((e) => e.focus !== "email"), 2, "u:"),
      ...take(COLLOCATIONS, 2, "c:"),
      ...take(vocab.filter((w) => AUDIO_MAP["en-GB-SoniaNeural|" + w.example] && w.exampleDe), 2, "vl:"),
      ...take(CONTENT.exam, 4, "x:")
    ];
    return shuffle(refs).map(resolve);
  }
  return { decks, vocab, grammar, V, E, U, C, G, FOCUS, shuffle, resolve, daily, boost, exam };
})();
