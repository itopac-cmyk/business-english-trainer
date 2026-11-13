/* Business English trainer – UI and routing */
(function () {
  const $app = () => document.getElementById("app");

  const I = {
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5L12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/></svg>',
    cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="14" height="14" rx="2"/><path d="M17 7h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20v13H6.5A2.5 2.5 0 0 0 4 22.5z"/></svg>',
    case: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    more: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="6" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="18" cy="12" r="1.4"/></svg>',
    exam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M8 12h8M8 16h5"/></svg>',
  };

  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  function blankify(prompt) {
    return esc(prompt).replace(/___/g, '<span class="blank">&nbsp;</span>');
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/[‘’´]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\s+/g, " ");
  }

  function isCorrect(ex, user) {
    if (ex.type === "mc") return Number(user) === Number(ex.answer);
    if (ex.type === "gap") return (ex.accept || []).map(norm).includes(norm(user));
    if (ex.type === "order") return JSON.stringify(user) === JSON.stringify(ex.answer);
    return false;
  }

  function correctLabel(ex) {
    if (ex.type === "mc") return ex.options[ex.answer];
    if (ex.type === "gap") return ex.accept[0];
    if (ex.type === "order") return (ex.answer || []).map((i) => ex.items[i]).join(" → ");
    return "";
  }

  function formatDate(d) {
    return d.toLocaleDateString("de-DE", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    });
  }

  function greeting() {
    const h = new Date().getHours();
    if (h < 11) return "Guten Morgen";
    if (h < 18) return "Guten Tag";
    return "Guten Abend";
  }

  function isStandalone() {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  }

  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }

  function pctBar(pct, extra) {
    const p = Math.max(0, Math.min(100, Math.round(pct || 0)));
    return `<div class="bar ${extra || ""}"><i style="width:${p}%"></i></div>`;
  }

  function packStats(pack) {
    const now = Date.now();
    let seen = 0, mastered = 0, due = 0;
    for (const w of pack.words) {
      const r = Store.vocabGet(w.id);
      if (r && r.seen) seen += 1;
      if (r && r.box >= 3) mastered += 1;
      if (!r || r.due <= now) due += 1;
    }
    return { total: pack.words.length, seen, mastered, due, pct: Math.round((seen / pack.words.length) * 100) };
  }

  function grammarPct(ch) {
    const p = Store.grammarProgress(ch.id);
    if (!p.total) return 0;
    return Math.round(((p.bestCorrect != null ? p.bestCorrect : p.correct) / p.total) * 100);
  }

  function casePct(c) {
    const p = Store.caseProgress(c.id);
    const total = (c.exercises || []).length || 1;
    const ex = p.exercisesTotal ? p.exercisesCorrect / total : 0;
    const ph = (c.phrases || []).length ? (p.phrases || 0) / c.phrases.length : 0;
    const model = p.modelHeard ? 1 : 0;
    return Math.round(((ex * 0.5 + ph * 0.3 + model * 0.2) * 100));
  }

  function overallProgress() {
    const parts = [];
    CONTENT.packs.forEach((p) => parts.push(packStats(p).pct));
    CONTENT.grammar.forEach((g) => parts.push(grammarPct(g)));
    CONTENT.cases.forEach((c) => parts.push(casePct(c)));
    if (!parts.length) return 0;
    return Math.round(parts.reduce((a, b) => a + b, 0) / parts.length);
  }

  function areaName(id) {
    return CONTENT.areas[id] || id;
  }

  function topbar(title, opts) {
    opts = opts || {};
    const back = opts.back != null ? opts.back : "#/";
    const sub = opts.sub ? `<span class="sub">${esc(opts.sub)}</span>` : "";
    const right = opts.right || "";
    const backBtn = opts.noback
      ? `<span style="width:40px"></span>`
      : `<button class="icon-btn" data-go="${esc(back)}" aria-label="Zurück">${I.back}</button>`;
    return `<div class="topbar">${backBtn}<h1>${esc(title)}${sub}</h1>${right}</div>`;
  }

  function tabbar(active) {
    const nMist = Store.get().mistakes.length;
    const tabs = [
      { id: "home", href: "#/", label: "Start", icon: I.home },
      { id: "vocab", href: "#/vocab", label: "Vokabeln", icon: I.cards },
      { id: "grammar", href: "#/grammar", label: "Grammatik", icon: I.book },
      { id: "cases", href: "#/cases", label: "Cases", icon: I.case },
      { id: "more", href: "#/more", label: "Mehr", icon: I.more, dot: nMist > 0 },
    ];
    return `<nav class="tabbar">${tabs.map((t) => `
      <a class="tab ${t.id === active ? "active" : ""}" href="${t.href}">
        ${t.icon}<span>${t.label}</span>${t.dot ? '<i class="dot"></i>' : ""}
      </a>`).join("")}</nav>`;
  }

  const session = { vocab: null, grammar: null, exam: null, practice: null, order: null, playing: false };

  /* ---------- HOME ---------- */
  function renderHome() {
    const st = Store.get();
    const goal = st.settings.goal || 15;
    const done = st.daily.count || 0;
    const goalPct = Math.min(100, (done / goal) * 100);
    const hideInstall = isStandalone() || session.hideInstall || localStorage.getItem("be-hide-install") === "1";
    const install = !hideInstall && isIOS() ? `
      <div class="install-hint" id="install-hint">
        <button type="button" id="hide-install" aria-label="Hinweis schließen">✕</button>
        <strong>Auf den Home-Bildschirm</strong>
        In Safari auf Teilen tippen und „Zum Home-Bildschirm“ wählen. Danach startet die App wie eine normale App.
      </div>` : (!hideInstall && !isStandalone() ? `
      <div class="install-hint" id="install-hint">
        <button type="button" id="hide-install" aria-label="Hinweis schließen">✕</button>
        <strong>Als App nutzen</strong>
        Im Browser das Menü öffnen und die Seite auf dem Startbildschirm bzw. als App installieren.
      </div>` : "");

    const tiles = [
      { href: "#/vocab", emoji: "💬", bg: "var(--teal-soft)", title: "Vokabeln", text: "3 Themenpakete, Karteikarten mit Audio", pct: avg(CONTENT.packs.map((p) => packStats(p).pct)) },
      { href: "#/grammar", emoji: "✍️", bg: "#e8eef2", title: "Grammatik", text: "5 Kapitel mit kurzen Erklärungen", pct: avg(CONTENT.grammar.map(grammarPct)) },
      { href: "#/cases", emoji: "💼", bg: "var(--gold-soft)", title: "Business Cases", text: "Mails, Vorstellung, Projekte, Beratung", pct: avg(CONTENT.cases.map(casePct)) },
      { href: "#/exam", emoji: "📋", bg: "#ece8f5", title: "Prüfung", text: "20 Fragen, 12 Minuten, wie ein Theoriebogen", pct: lastExamPct() },
    ];

    const mistakes = st.mistakes.length;
    const last = st.lastRoute && st.lastRoute !== "#/" ? st.lastRoute : null;

    $app().innerHTML = `
      ${topbar("Business English", { noback: true, sub: "Beratung & CRA", right: `<span class="timer" style="background:rgba(255,255,255,.12)">${st.streak.current || 0} 🔥</span>` })}
      <div class="page">
        <p class="greet">${greeting()}, ${esc(CONTENT.userName)}</p>
        <p class="date-line">${esc(formatDate(new Date()))}</p>
        ${install}
        <div class="row">
          <div class="stat-chip"><span class="emoji">🔥</span><div><span class="lbl">Serie</span><span class="val">${st.streak.current || 0} Tage</span></div></div>
          <div class="stat-chip"><span class="emoji">🏆</span><div><span class="lbl">Beste Serie</span><span class="val">${st.streak.best || 0} Tage</span></div></div>
        </div>
        <div class="card goal-card">
          <div class="goal-head"><strong>Tagesziel</strong><span>${done} / ${goal}</span></div>
          ${pctBar(goalPct, done >= goal ? "gold" : "")}
        </div>
        <div class="grid-2">
          ${tiles.map((t) => `
            <a class="tile" href="${t.href}">
              <div class="tile-emoji" style="background:${t.bg}">${t.emoji}</div>
              <h2>${t.title}</h2>
              <p>${t.text}</p>
              <div class="mini-bar">${pctBar(t.pct)}</div>
            </a>`).join("")}
        </div>
        ${mistakes ? `<a class="nav-row card" href="#/mistakes" style="margin-top:16px;border-radius:16px">
          <div class="avatar" style="background:var(--danger-soft)">🐞</div>
          <div class="meta"><h3>Fehlerbox</h3><p>${mistakes} ${mistakes === 1 ? "Eintrag" : "Einträge"} zum Wiederholen</p></div>
          <span class="badge danger">${mistakes}</span><span class="chev">›</span>
        </a>` : ""}
        ${last ? `<a class="nav-row card" href="${esc(last)}" style="margin-top:10px;border-radius:16px">
          <div class="avatar" style="background:#e8eef2">▶️</div>
          <div class="meta"><h3>Weiterlernen</h3><p>Dort weitermachen, wo du aufgehört hast</p></div>
          <span class="chev">›</span>
        </a>` : ""}
        <p class="footer-note">Gesamtfortschritt ${overallProgress()}&nbsp;%</p>
      </div>
      ${tabbar("home")}`;

    const hide = document.getElementById("hide-install");
    if (hide) hide.addEventListener("click", () => {
      localStorage.setItem("be-hide-install", "1");
      session.hideInstall = true;
      const el = document.getElementById("install-hint");
      if (el) el.remove();
    });
  }

  function avg(arr) {
    if (!arr.length) return 0;
    return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
  }
  function lastExamPct() {
    const ex = Store.get().exams[0];
    if (!ex || !ex.total) return 0;
    return Math.round((ex.score / ex.total) * 100);
  }

  /* ---------- VOCAB ---------- */
  function renderVocabList() {
    $app().innerHTML = `
      ${topbar("Vokabeltrainer", { back: "#/" })}
      <div class="page">
        <p class="date-line" style="margin-top:0">Tippe auf ein Paket, um mit Karteikarten zu lernen. Falsche Karten kommen öfter wieder.</p>
        <div class="list-card card">
          ${CONTENT.packs.map((p) => {
            const s = packStats(p);
            return `<a class="list-row" href="#/vocab/${esc(p.id)}">
              <div class="avatar" style="background:${esc(p.color)}1a">${p.emoji}</div>
              <div class="meta">
                <h3>${esc(p.titleDe)}</h3>
                <p>${s.total} Wörter · ${s.mastered} sicher · ${s.due} fällig</p>
                ${pctBar(s.pct)}
              </div>
              <span class="chev">›</span>
            </a>`;
          }).join("")}
        </div>
      </div>
      ${tabbar("vocab")}`;
  }

  function renderVocabPack(id) {
    const pack = CONTENT.packs.find((p) => p.id === id);
    if (!pack) return renderVocabList();
    const s = packStats(pack);
    $app().innerHTML = `
      ${topbar(pack.titleDe, { back: "#/vocab", sub: pack.title })}
      <div class="page">
        <p class="date-line" style="margin-top:0">${esc(pack.blurb)}</p>
        <div class="card goal-card">
          <div class="goal-head"><strong>Fortschritt</strong><span>${s.seen} / ${s.total} gesehen</span></div>
          ${pctBar(s.pct)}
          <p style="margin:8px 0 0;color:var(--muted);font-size:.85rem">${s.mastered} Karten im sicheren Bereich · ${s.due} jetzt fällig oder neu</p>
        </div>
        <button class="btn" data-go="#/vocab/${esc(id)}/train">Übung starten</button>
        <p class="section-title">Wortliste</p>
        <div class="list-card card">
          ${pack.words.map((w) => {
            const r = Store.vocabGet(w.id);
            const tag = !r || !r.seen ? "Neu" : r.box >= 3 ? "Sicher" : "Lernend";
            const cls = tag === "Sicher" ? "" : tag === "Neu" ? "warn" : "";
            return `<div class="list-row">
              <div class="avatar" style="background:#eef3f6">${w.emoji}</div>
              <div class="meta"><h3>${esc(w.term)}</h3><p>${esc(w.de)}</p></div>
              <span class="badge ${cls}">${tag}</span>
              <button class="speaker" data-say="${esc(w.term)}" aria-label="Aussprache">${I.speaker}</button>
            </div>`;
          }).join("")}
        </div>
      </div>
      ${tabbar("vocab")}`;
  }

  function startVocabTrain(id, forceAll) {
    const pack = CONTENT.packs.find((p) => p.id === id);
    if (!pack) return renderVocabList();
    const now = Date.now();
    const due = [];
    const fresh = [];
    pack.words.forEach((w) => {
      const r = Store.vocabGet(w.id);
      if (!r) fresh.push(w);
      else if (r.due <= now) due.push(w);
    });
    let queue = shuffle(due).concat(shuffle(fresh).slice(0, 8));
    if (forceAll || !queue.length) queue = shuffle(pack.words.slice());
    queue = queue.slice(0, 20);
    session.vocab = { packId: id, queue, index: 0, flipped: false, known: 0, again: 0, replay: [], replayed: false };
    renderVocabTrain();
  }

  function renderVocabTrain() {
    const s = session.vocab;
    if (!s) return renderVocabList();
    const pack = CONTENT.packs.find((p) => p.id === s.packId);
    if (s.index >= s.queue.length) return renderVocabDone();
    const w = s.queue[s.index];
    const front = !s.flipped;
    $app().innerHTML = `
      ${topbar(pack.titleDe, { back: `#/vocab/${pack.id}` })}
      <div class="page">
        <div class="flash-wrap">
          <button type="button" class="flash" id="flash-card" aria-label="Karte umdrehen">
            <span class="pack-tag">${esc(pack.title)}</span>
            <span class="counter">${s.index + 1} / ${s.queue.length}</span>
            <div class="emoji-lg">${w.emoji}</div>
            ${front ? `
              <p class="term">${esc(w.term)}</p>
              ${w.phon ? `<p class="phon">${esc(w.phon)}</p>` : ""}
            ` : `
              <p class="term">${esc(w.term)}</p>
              <p class="meaning">${esc(w.de)}</p>
              <p class="example">${esc(w.example)}</p>
              <p class="example-de">${esc(w.exampleDe)}</p>
              ${w.hint ? `<p class="hint">${esc(w.hint)}</p>` : ""}
            `}
          </button>
        </div>
        <div style="display:flex;justify-content:center;margin-bottom:14px">
          <button class="speaker lg" id="say-term" aria-label="Aussprache">${I.speaker}</button>
        </div>
        ${front ? `<p class="flip-hint">Tippe auf die Karte, um die Bedeutung zu sehen.</p>` : `
          <div class="btn-row">
            <button class="btn ghost" id="btn-again">Nochmal</button>
            <button class="btn" id="btn-known">Gewusst</button>
          </div>`}
      </div>
      ${tabbar("vocab")}`;

    document.getElementById("flash-card").addEventListener("click", () => {
      s.flipped = !s.flipped;
      renderVocabTrain();
    });
    document.getElementById("say-term").addEventListener("click", (e) => {
      e.stopPropagation();
      AudioEng.speak(s.flipped ? `${w.term}. ${w.example}` : w.term);
    });
    const again = document.getElementById("btn-again");
    const known = document.getElementById("btn-known");
    if (again) again.addEventListener("click", () => gradeVocab(false));
    if (known) known.addEventListener("click", () => gradeVocab(true));
  }

  function gradeVocab(known) {
    const s = session.vocab;
    const w = s.queue[s.index];
    Store.vocabRecord(w.id, known);
    if (known) s.known += 1;
    else {
      s.again += 1;
      Store.addMistake({
        id: "v:" + w.id,
        type: "vocab",
        area: s.packId,
        prompt: w.term,
        promptDe: w.de,
        answer: w.de,
        example: w.example,
        emoji: w.emoji,
      });
      s.replay.push(w);
    }
    s.index += 1;
    s.flipped = false;
    if (s.index >= s.queue.length && s.replay.length && !s.replayed) {
      s.queue = s.queue.concat(s.replay);
      s.replay = [];
      s.replayed = true;
    }
    renderVocabTrain();
  }

  function renderVocabDone() {
    const s = session.vocab;
    const pack = CONTENT.packs.find((p) => p.id === s.packId);
    $app().innerHTML = `
      ${topbar(pack.titleDe, { back: `#/vocab/${pack.id}` })}
      <div class="page session-end">
        <p class="emoji-lg" style="font-size:3rem">🎉</p>
        <p class="big">${s.known} gewusst</p>
        <p class="date-line">${s.again} nochmal · ${s.queue.length} Karten in dieser Runde</p>
        <button class="btn" id="again-vocab">Noch eine Runde</button>
        <div style="height:10px"></div>
        <button class="btn secondary" data-go="#/vocab/${pack.id}">Zur Wortliste</button>
      </div>
      ${tabbar("vocab")}`;
    const againV = document.getElementById("again-vocab");
    if (againV) againV.addEventListener("click", () => startVocabTrain(s.packId, true));
  }

  /* ---------- GRAMMAR ---------- */
  function renderGrammarList() {
    $app().innerHTML = `
      ${topbar("Grammatik", { back: "#/" })}
      <div class="page">
        <p class="date-line" style="margin-top:0">Kurze Erklärung, danach Übungen – wie in der Theorie-App.</p>
        <div class="list-card card">
          ${CONTENT.grammar.map((g, i) => {
            const p = grammarPct(g);
            const rec = Store.grammarProgress(g.id);
            const sub = rec.total ? `Beste Runde: ${rec.bestCorrect != null ? rec.bestCorrect : rec.correct} von ${rec.total}` : `${g.exercises.length} Übungen`;
            return `<a class="list-row" href="#/grammar/${esc(g.id)}">
              <div class="avatar" style="background:#e8eef2">${g.emoji || (i + 1)}</div>
              <div class="meta"><h3>${esc(g.title)}</h3><p>${esc(sub)}</p>${pctBar(p)}</div>
              <span class="chev">›</span>
            </a>`;
          }).join("")}
        </div>
      </div>
      ${tabbar("grammar")}`;
  }

  function renderGrammarTheory(id) {
    const ch = CONTENT.grammar.find((g) => g.id === id);
    if (!ch) return renderGrammarList();
    $app().innerHTML = `
      ${topbar(ch.title, { back: "#/grammar" })}
      <div class="page">
        <p class="date-line" style="margin-top:0">${esc(ch.intro)}</p>
        <div class="theory">
          ${ch.theory.map((t) => `<article class="theory-block"><h3>${esc(t.h)}</h3><p>${esc(t.p)}</p></article>`).join("")}
        </div>
        <div class="btn-row"><button class="btn" data-go="#/grammar/${esc(id)}/practice">Zu den Übungen</button></div>
      </div>
      ${tabbar("grammar")}`;
  }

  function startGrammar(id) {
    const ch = CONTENT.grammar.find((g) => g.id === id);
    if (!ch) return renderGrammarList();
    session.grammar = { id, index: 0, correct: 0, answers: [], locked: false };
    renderGrammarPractice();
  }

  function renderGrammarPractice() {
    const s = session.grammar;
    if (!s) return renderGrammarList();
    const ch = CONTENT.grammar.find((g) => g.id === s.id);
    if (s.index >= ch.exercises.length) return renderGrammarDone();
    const ex = ch.exercises[s.index];
    renderExercisePage({
      title: ch.title,
      back: `#/grammar/${ch.id}`,
      tab: "grammar",
      index: s.index,
      total: ch.exercises.length,
      ex,
      locked: s.locked,
      last: s.answers[s.index],
      onCheck: (user) => gradeExercise(ex, user, "grammar"),
      onNext: () => { s.locked = false; s.index += 1; renderGrammarPractice(); },
    });
  }

  function gradeExercise(ex, user, source) {
    const ok = isCorrect(ex, user);
    const s = source === "grammar" ? session.grammar : source === "case" ? session.practice : session.exam;
    if (source === "grammar" || source === "case") {
      if (s.locked) return;
      s.locked = true;
      if (ok) s.correct += 1;
      else {
        Store.addMistake({
          id: (source === "grammar" ? "g:" : "c:") + ex.id,
          type: ex.type,
          area: ex.area,
          prompt: ex.prompt,
          options: ex.options,
          accept: ex.accept,
          items: ex.items,
          answer: ex.answer,
          answerLabel: correctLabel(ex),
          explain: ex.explain,
          user,
        });
      }
      s.answers[s.index] = { user, ok };
      Store.bumpActivity(1);
      if (source === "grammar") renderGrammarPractice();
      else renderCasePractice();
    }
  }

  function renderGrammarDone() {
    const s = session.grammar;
    const ch = CONTENT.grammar.find((g) => g.id === s.id);
    const rec = Store.grammarProgress(ch.id);
    const best = Math.max(rec.bestCorrect || 0, s.correct);
    Store.grammarSave(ch.id, {
      done: ch.exercises.length,
      correct: s.correct,
      total: ch.exercises.length,
      bestCorrect: best,
      completed: true,
    });
    $app().innerHTML = `
      ${topbar(ch.title, { back: `#/grammar/${ch.id}` })}
      <div class="page session-end">
        <p class="big">${s.correct} / ${ch.exercises.length}</p>
        <p class="date-line">${s.correct >= 8 ? "Sehr gut – das Kapitel sitzt." : "Schau dir die Erklärungen in der Fehlerbox noch einmal an."}</p>
        <button class="btn" id="again-grammar">Kapitel wiederholen</button>
        <div style="height:10px"></div>
        <button class="btn secondary" data-go="#/grammar">Alle Kapitel</button>
      </div>
      ${tabbar("grammar")}`;
    const againG = document.getElementById("again-grammar");
    if (againG) againG.addEventListener("click", () => startGrammar(ch.id));
  }

  /* ---------- SHARED EXERCISE RENDER ---------- */
  function renderExercisePage(cfg) {
    const ex = cfg.ex;
    const locked = cfg.locked;
    const last = cfg.last;
    let body = "";
    if (ex.type === "mc") {
      body = `<div class="choices">${ex.options.map((opt, i) => {
        let cls = "choice";
        if (locked && last) {
          if (i === ex.answer) cls += " correct";
          else if (Number(last.user) === i && !last.ok) cls += " wrong";
        }
        return `<button class="${cls}" data-choice="${i}" ${locked ? "disabled" : ""}><span class="key">${String.fromCharCode(65 + i)}</span>${esc(opt)}</button>`;
      }).join("")}</div>`;
    } else if (ex.type === "gap") {
      const val = last ? last.user : "";
      const cls = locked ? (last.ok ? "correct" : "wrong") : "";
      body = `<input class="gap-input ${cls}" id="gap" type="text" lang="en" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="${esc(ex.placeholder || "Antwort eingeben")}" value="${esc(val)}" ${locked ? "disabled" : ""}>
        ${locked ? "" : `<div class="btn-row"><button class="btn" id="check-gap">Prüfen</button></div>`}`;
    } else if (ex.type === "order") {
      if (!session.order || session.order.exId !== ex.id) {
        let order = shuffle(ex.items.map((_, i) => i));
        if (JSON.stringify(order) === JSON.stringify(ex.answer)) order = shuffle(order);
        session.order = { exId: ex.id, order };
      }
      const cur = locked && last ? last.user : session.order.order;
      body = `<div class="order-list">${cur.map((orig, pos) => `
        <div class="order-item">
          <div class="txt">${esc(ex.items[orig])}</div>
          ${locked ? "" : `<div class="movers">
            <button type="button" data-up="${pos}" aria-label="Nach oben">▴</button>
            <button type="button" data-down="${pos}" aria-label="Nach unten">▾</button>
          </div>`}
        </div>`).join("")}</div>
        ${locked ? "" : `<div class="btn-row"><button class="btn" id="check-order">Prüfen</button></div>`}`;
    }

    let fb = "";
    if (locked && last) {
      fb = `<div class="feedback ${last.ok ? "ok" : "bad"}">
        <strong>${last.ok ? "Richtig" : "Nicht ganz"}</strong>
        ${last.ok ? "" : `Richtig ist: ${esc(correctLabel(ex))}<br>`}
        ${esc(ex.explain || "")}
      </div>
      <div class="btn-row"><button class="btn" id="next-ex">Weiter</button></div>`;
    }

    $app().innerHTML = `
      ${topbar(cfg.title, { back: cfg.back })}
      <div class="page">
        <div class="q-card">
          <div class="q-meta"><span>Frage ${cfg.index + 1} von ${cfg.total}</span><span>${areaName(ex.area)}</span></div>
          <p class="q-prompt">${blankify(ex.prompt)}</p>
          ${body}
          ${fb}
        </div>
      </div>
      ${tabbar(cfg.tab)}`;

    if (!locked && ex.type === "mc") {
      $app().querySelectorAll("[data-choice]").forEach((btn) => {
        btn.addEventListener("click", () => cfg.onCheck(Number(btn.getAttribute("data-choice"))));
      });
    }
    if (!locked && ex.type === "gap") {
      const input = document.getElementById("gap");
      const go = () => cfg.onCheck(input.value);
      document.getElementById("check-gap").addEventListener("click", go);
      input.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
      setTimeout(() => input.focus(), 50);
    }
    if (!locked && ex.type === "order") {
      $app().querySelectorAll("[data-up]").forEach((b) => b.addEventListener("click", () => moveOrder(Number(b.getAttribute("data-up")), -1, cfg)));
      $app().querySelectorAll("[data-down]").forEach((b) => b.addEventListener("click", () => moveOrder(Number(b.getAttribute("data-down")), 1, cfg)));
      document.getElementById("check-order").addEventListener("click", () => cfg.onCheck(session.order.order.slice()));
    }
    const next = document.getElementById("next-ex");
    if (next) next.addEventListener("click", () => { session.order = null; cfg.onNext(); });
  }

  function moveOrder(pos, dir, cfg) {
    const arr = session.order.order;
    const to = pos + dir;
    if (to < 0 || to >= arr.length) return;
    [arr[pos], arr[to]] = [arr[to], arr[pos]];
    renderExercisePage(cfg);
  }

  window.renderHome = renderHome;
  window._be = {
    renderHome, renderVocabList, renderVocabPack, startVocabTrain,
    renderGrammarList, renderGrammarTheory, startGrammar,
    /* more attached below after rest of functions exist – placeholder */
  };

  /* remaining views are registered after they are defined in the same IIFE */
  function renderCaseList() {
    $app().innerHTML = `
      ${topbar("Business Cases", { back: "#/" })}
      <div class="page">
        <p class="date-line" style="margin-top:0">Wendungen, ein hörbares Beispiel und Übungen zu typischen Beratungsanlässen.</p>
        <div class="list-card card">
          ${CONTENT.cases.map((c) => {
            const p = casePct(c);
            return `<a class="list-row" href="#/cases/${esc(c.id)}">
              <div class="avatar" style="background:var(--gold-soft)">${c.emoji}</div>
              <div class="meta"><h3>${esc(c.title)}</h3><p>${esc(c.blurb)}</p>${pctBar(p)}</div>
              <span class="chev">›</span>
            </a>`;
          }).join("")}
        </div>
      </div>
      ${tabbar("cases")}`;
  }

  function renderCaseDetail(id) {
    const c = CONTENT.cases.find((x) => x.id === id);
    if (!c) return renderCaseList();
    const p = Store.caseProgress(c.id);
    $app().innerHTML = `
      ${topbar(c.title, { back: "#/cases", sub: c.titleEn })}
      <div class="page">
        <p class="date-line" style="margin-top:0">${esc(c.blurb)}</p>
        <div class="theory">${(c.goals || []).map((g) => `<article class="theory-block"><p>${esc(g)}</p></article>`).join("")}</div>
        <p class="section-title">Loslegen</p>
        <div class="list-card card">
          <a class="list-row" href="#/cases/${c.id}/phrases"><div class="avatar" style="background:var(--teal-soft)">💬</div><div class="meta"><h3>Wendungen</h3><p>${c.phrases.length} Formulierungen mit Audio</p></div><span class="badge">${p.phrases || 0}/${c.phrases.length}</span><span class="chev">›</span></a>
          <a class="list-row" href="#/cases/${c.id}/model"><div class="avatar" style="background:#e8eef2">🎧</div><div class="meta"><h3>${c.model.kind === "email" ? "Mustermail" : c.model.kind === "dialogue" ? "Musterdialog" : "Mustervortrag"}</h3><p>Zum Anhören und Mitlesen</p></div><span class="chev">›</span></a>
          <a class="list-row" href="#/cases/${c.id}/practice"><div class="avatar" style="background:var(--gold-soft)">✅</div><div class="meta"><h3>Übungen</h3><p>${c.exercises.length} Aufgaben</p></div><span class="chev">›</span></a>
        </div>
      </div>
      ${tabbar("cases")}`;
  }

  function renderCasePhrases(id) {
    const c = CONTENT.cases.find((x) => x.id === id);
    if (!c) return renderCaseList();
    $app().innerHTML = `
      ${topbar("Wendungen", { back: `#/cases/${id}`, sub: c.title })}
      <div class="page">
        ${c.phrases.map((ph, i) => `
          <div class="phrase-card">
            <button class="speaker" data-say="${esc(ph.en)}" aria-label="Aussprache">${I.speaker}</button>
            <div class="body">
              <p class="en">${esc(ph.en)}</p>
              <p class="de">${esc(ph.de)}</p>
              ${ph.note ? `<p class="note">${esc(ph.note)}</p>` : ""}
            </div>
          </div>`).join("")}
        <button class="btn" id="mark-phrases">Wendungen als angesehen markieren</button>
      </div>
      ${tabbar("cases")}`;
    document.getElementById("mark-phrases").addEventListener("click", () => {
      const prev = Store.caseProgress(id);
      Store.caseSave(id, { ...prev, phrases: c.phrases.length, phraseTotal: c.phrases.length });
      Store.bumpActivity(1);
      location.hash = `#/cases/${id}`;
    });
  }

  function renderCaseModel(id) {
    const c = CONTENT.cases.find((x) => x.id === id);
    if (!c) return renderCaseList();
    const lines = c.model.lines;
    $app().innerHTML = `
      ${topbar(c.model.title, { back: `#/cases/${id}` })}
      <div class="page">
        <p class="date-line" style="margin-top:0">${esc(c.model.intro)}</p>
        <div class="btn-row" style="margin-top:0">
          <button class="btn" id="play-model">${I.speaker} Anhören</button>
          <button class="btn secondary" id="stop-model">Stopp</button>
        </div>
        <div class="dialogue" id="dialogue">
          ${lines.map((ln, i) => {
            const who = ln.speaker || (c.model.kind === "email" ? "Mail" : "Isa");
            const cls = (ln.speaker === "Isa" || (!ln.speaker && c.model.kind !== "dialogue")) ? "isa" : "";
            return `<div class="bubble ${cls}" data-line="${i}">${ln.speaker || c.model.kind === "email" ? `<div class="who">${esc(who)}</div>` : ""}<p>${esc(ln.text)}</p></div>`;
          }).join("")}
        </div>
      </div>
      ${tabbar("cases")}`;

    document.getElementById("play-model").addEventListener("click", () => {
      const prev = Store.caseProgress(id);
      Store.caseSave(id, { ...prev, modelHeard: true });
      AudioEng.speakLines(lines, {
        online(i) {
          document.querySelectorAll(".bubble").forEach((el) => el.classList.toggle("active", Number(el.getAttribute("data-line")) === i));
          const el = document.querySelector(`.bubble[data-line="${i}"]`);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        },
        onend() {
          document.querySelectorAll(".bubble").forEach((el) => el.classList.remove("active"));
        },
      });
    });
    document.getElementById("stop-model").addEventListener("click", () => {
      AudioEng.stop();
      document.querySelectorAll(".bubble").forEach((el) => el.classList.remove("active"));
    });
  }

  function startCasePractice(id) {
    const c = CONTENT.cases.find((x) => x.id === id);
    if (!c) return renderCaseList();
    session.practice = { id, index: 0, correct: 0, answers: [], locked: false };
    session.order = null;
    renderCasePractice();
  }

  function renderCasePractice() {
    const s = session.practice;
    if (!s) return renderCaseList();
    const c = CONTENT.cases.find((x) => x.id === s.id);
    if (s.index >= c.exercises.length) return renderCaseDone();
    const ex = c.exercises[s.index];
    renderExercisePage({
      title: c.title,
      back: `#/cases/${c.id}`,
      tab: "cases",
      index: s.index,
      total: c.exercises.length,
      ex,
      locked: s.locked,
      last: s.answers[s.index],
      onCheck: (user) => gradeExercise(ex, user, "case"),
      onNext: () => { s.locked = false; s.index += 1; renderCasePractice(); },
    });
  }

  function renderCaseDone() {
    const s = session.practice;
    const c = CONTENT.cases.find((x) => x.id === s.id);
    const prev = Store.caseProgress(c.id);
    Store.caseSave(c.id, {
      ...prev,
      exercisesCorrect: Math.max(prev.exercisesCorrect || 0, s.correct),
      exercisesTotal: c.exercises.length,
      completed: true,
    });
    $app().innerHTML = `
      ${topbar(c.title, { back: `#/cases/${c.id}` })}
      <div class="page session-end">
        <p class="big">${s.correct} / ${c.exercises.length}</p>
        <p class="date-line">${s.correct === c.exercises.length ? "Perfekt – der Case sitzt." : "Die Fehler liegen in der Fehlerbox bereit."}</p>
        <button class="btn" id="again-case">Übungen wiederholen</button>
        <div style="height:10px"></div>
        <button class="btn secondary" data-go="#/cases/${c.id}">Zum Case</button>
      </div>
      ${tabbar("cases")}`;
    const againC = document.getElementById("again-case");
    if (againC) againC.addEventListener("click", () => startCasePractice(c.id));
  }

  /* ---------- EXAM ---------- */
  function renderExamIntro() {
    const last = Store.get().exams[0];
    $app().innerHTML = `
      ${topbar("Prüfungsmodus", { back: "#/more" })}
      <div class="page">
        <div class="card" style="padding:18px 16px">
          <h2 style="margin:0 0 8px">Theoriebogen</h2>
          <p style="margin:0 0 8px">20 gemischte Fragen aus Vokabeln, Grammatik und Business Cases. Du hast 12 Minuten. Die Auswertung kommt am Ende – wie in der Fahrschule.</p>
          <p style="margin:0;color:var(--muted)">Bestehen ab 16 richtigen Antworten (80&nbsp;%).</p>
        </div>
        ${last ? `<div class="card goal-card" style="margin-top:14px"><div class="goal-head"><strong>Letzte Prüfung</strong><span>${last.score} / ${last.total}</span></div>${pctBar((last.score / last.total) * 100, last.score >= 16 ? "" : "")}<p style="margin:8px 0 0;color:var(--muted);font-size:.85rem">${last.passed ? "Bestanden" : "Nicht bestanden"}</p></div>` : ""}
        <div class="btn-row"><button class="btn" id="start-exam">Prüfung starten</button></div>
      </div>
      ${tabbar("more")}`;
    document.getElementById("start-exam").addEventListener("click", startExam);
  }

  function startExam() {
    const pool = shuffle(CONTENT.exam.slice());
    const questions = pool.slice(0, 20);
    session.exam = {
      questions,
      index: 0,
      answers: Array(questions.length).fill(null),
      startedAt: Date.now(),
      remaining: 12 * 60,
      tick: null,
      submitted: false,
    };
    session.order = null;
    tickExam();
    session.exam.tick = setInterval(tickExam, 1000);
    renderExamRun();
  }

  function tickExam() {
    const s = session.exam;
    if (!s || s.submitted) return;
    const elapsed = Math.floor((Date.now() - s.startedAt) / 1000);
    s.remaining = Math.max(0, 12 * 60 - elapsed);
    const el = document.getElementById("exam-timer");
    if (el) {
      el.textContent = formatTime(s.remaining);
      el.classList.toggle("warn", s.remaining <= 60);
    }
    if (s.remaining <= 0) finishExam();
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  }

  function renderExamRun() {
    const s = session.exam;
    if (!s) return renderExamIntro();
    if (s.submitted) return;
    const ex = s.questions[s.index];
    const chosen = s.answers[s.index];
    let body = "";
    if (ex.type === "mc") {
      body = `<div class="choices">${ex.options.map((opt, i) => `
        <button class="choice ${Number(chosen) === i ? "selected" : ""}" data-choice="${i}">
          <span class="key">${String.fromCharCode(65 + i)}</span>${esc(opt)}
        </button>`).join("")}</div>`;
    } else {
      body = `<input class="gap-input" id="gap" type="text" lang="en" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="${esc(ex.placeholder || "Antwort eingeben")}" value="${esc(chosen || "")}">`;
    }
    $app().innerHTML = `
      ${topbar("Prüfung", { back: "#/exam", right: `<span class="timer ${s.remaining <= 60 ? "warn" : ""}" id="exam-timer">${formatTime(s.remaining)}</span>` })}
      <div class="page">
        <div class="q-card">
          <div class="q-meta"><span>Frage ${s.index + 1} von ${s.questions.length}</span><span>${esc(areaName(ex.area))}</span></div>
          <p class="q-prompt">${blankify(ex.prompt)}</p>
          ${body}
        </div>
        <div class="btn-row">
          <button class="btn secondary" id="exam-prev" ${s.index === 0 ? "disabled" : ""}>Zurück</button>
          ${s.index === s.questions.length - 1
            ? `<button class="btn" id="exam-finish">Abgeben</button>`
            : `<button class="btn" id="exam-next">Weiter</button>`}
        </div>
      </div>`;

    if (ex.type === "mc") {
      $app().querySelectorAll("[data-choice]").forEach((btn) => {
        btn.addEventListener("click", () => {
          s.answers[s.index] = Number(btn.getAttribute("data-choice"));
          renderExamRun();
        });
      });
    } else {
      const input = document.getElementById("gap");
      input.addEventListener("input", () => { s.answers[s.index] = input.value; });
      setTimeout(() => input.focus(), 50);
    }
    const prev = document.getElementById("exam-prev");
    const next = document.getElementById("exam-next");
    const fin = document.getElementById("exam-finish");
    if (prev) prev.addEventListener("click", () => { saveGap(); s.index -= 1; renderExamRun(); });
    if (next) next.addEventListener("click", () => { saveGap(); s.index += 1; renderExamRun(); });
    if (fin) fin.addEventListener("click", () => { saveGap(); finishExam(); });
  }

  function saveGap() {
    const s = session.exam;
    const ex = s.questions[s.index];
    if (ex.type === "gap") {
      const input = document.getElementById("gap");
      if (input) s.answers[s.index] = input.value;
    }
  }

  function finishExam() {
    const s = session.exam;
    if (!s || s.submitted) return;
    s.submitted = true;
    if (s.tick) clearInterval(s.tick);
    AudioEng.stop();
    let score = 0;
    const review = s.questions.map((ex, i) => {
      const user = s.answers[i];
      const ok = isCorrect(ex, user);
      if (ok) score += 1;
      else {
        Store.addMistake({
          id: "x:" + ex.id,
          type: ex.type,
          area: ex.area,
          prompt: ex.prompt,
          options: ex.options,
          accept: ex.accept,
          answer: ex.answer,
          answerLabel: correctLabel(ex),
          explain: ex.explain,
          user,
        });
      }
      return { ex, user, ok };
    });
    const weak = {};
    review.forEach((r) => {
      if (!r.ok) weak[r.ex.area] = (weak[r.ex.area] || 0) + 1;
    });
    const passed = score >= 16;
    Store.addExam({
      date: Date.now(),
      score,
      total: s.questions.length,
      passed,
      weak,
    });
    session.examResult = { score, total: s.questions.length, passed, weak, review };
    location.hash = "#/exam/result";
    renderExamResult();
  }

  function renderExamResult() {
    const r = session.examResult || null;
    if (!r) {
      const last = Store.get().exams[0];
      if (!last) return renderExamIntro();
      $app().innerHTML = `
        ${topbar("Ergebnis", { back: "#/exam" })}
        <div class="page">
          <div class="result-hero ${last.passed ? "pass" : "fail"}">
            <p class="score">${last.score} / ${last.total}</p>
            <p class="verdict">${last.passed ? "Bestanden" : "Nicht bestanden"}</p>
          </div>
          <button class="btn" data-go="#/exam">Neue Prüfung</button>
        </div>
        ${tabbar("more")}`;
      return;
    }
    const weakItems = Object.entries(r.weak).sort((a, b) => b[1] - a[1]);
    $app().innerHTML = `
      ${topbar("Ergebnis", { back: "#/exam" })}
      <div class="page">
        <div class="result-hero ${r.passed ? "pass" : "fail"}">
          <p class="score">${r.score} / ${r.total}</p>
          <p class="verdict">${r.passed ? "Bestanden" : "Nicht bestanden"}</p>
          <p class="date-line">${r.passed ? "Solide Leistung – weiter so." : "Schau dir die Schwachstellen unten an und übe in der Fehlerbox."}</p>
        </div>
        <p class="section-title">Schwachstellen</p>
        <div class="card" style="padding:4px 16px">
          ${weakItems.length ? `<ul class="weak-list">${weakItems.map(([k, n]) => `<li><span>${esc(areaName(k))}</span><span class="badge danger">${n}</span></li>`).join("")}</ul>` : `<p class="empty" style="padding:16px">Keine – alle Bereiche waren sicher.</p>`}
        </div>
        <p class="section-title">Auswertung</p>
        ${r.review.map((item, i) => `
          <div class="theory-block" style="margin-bottom:10px">
            <h3 style="color:${item.ok ? "var(--teal-dark)" : "var(--danger)"}">${i + 1}. ${item.ok ? "Richtig" : "Falsch"} · ${esc(areaName(item.ex.area))}</h3>
            <p>${esc(item.ex.prompt)}</p>
            <p style="margin-top:6px">${item.ok ? "" : `Deine Antwort: ${esc(item.ex.type === "mc" && item.ex.options[item.user] != null ? item.ex.options[item.user] : (item.user || "—"))}<br>`}Richtig: ${esc(correctLabel(item.ex))}<br>${esc(item.ex.explain || "")}</p>
          </div>`).join("")}
        <div class="btn-row">
          <button class="btn" data-go="#/exam">Neue Prüfung</button>
        </div>
        <div class="btn-row">
          <button class="btn secondary" data-go="#/mistakes">Zur Fehlerbox</button>
        </div>
      </div>
      ${tabbar("more")}`;
  }

  /* ---------- MORE / PROGRESS / MISTAKES / SETTINGS ---------- */
  function renderMore() {
    const n = Store.get().mistakes.length;
    $app().innerHTML = `
      ${topbar("Mehr", { back: "#/", noback: false })}
      <div class="page">
        <div class="list-card card">
          <a class="list-row" href="#/exam"><div class="avatar" style="background:#ece8f5">📋</div><div class="meta"><h3>Prüfungsmodus</h3><p>20 Fragen in 12 Minuten</p></div><span class="chev">›</span></a>
          <a class="list-row" href="#/progress"><div class="avatar" style="background:var(--teal-soft)">📊</div><div class="meta"><h3>Fortschritt</h3><p>Statistik, Serie und Kapitel</p></div><span class="chev">›</span></a>
          <a class="list-row" href="#/mistakes"><div class="avatar" style="background:var(--danger-soft)">🐞</div><div class="meta"><h3>Fehlerbox</h3><p>Fehler gezielt wiederholen</p></div>${n ? `<span class="badge danger">${n}</span>` : ""}<span class="chev">›</span></a>
          <a class="list-row" href="#/settings"><div class="avatar" style="background:#e8eef2">⚙️</div><div class="meta"><h3>Einstellungen</h3><p>Stimme, Tagesziel, Hinweise</p></div><span class="chev">›</span></a>
        </div>
      </div>
      ${tabbar("more")}`;
  }

  function renderProgress() {
    const st = Store.get();
    const exams = st.exams || [];
    $app().innerHTML = `
      ${topbar("Fortschritt", { back: "#/more" })}
      <div class="page">
        <div class="row">
          <div class="stat-chip"><span class="emoji">🔥</span><div><span class="lbl">Serie</span><span class="val">${st.streak.current || 0} Tage</span></div></div>
          <div class="stat-chip"><span class="emoji">🎯</span><div><span class="lbl">Heute</span><span class="val">${st.daily.count || 0} / ${st.settings.goal}</span></div></div>
        </div>
        <div class="card goal-card">
          <div class="goal-head"><strong>Gesamtfortschritt</strong><span>${overallProgress()}&nbsp;%</span></div>
          ${pctBar(overallProgress())}
        </div>
        <p class="section-title">Vokabeln</p>
        <div class="list-card card">${CONTENT.packs.map((p) => {
          const s = packStats(p);
          return `<div class="list-row"><div class="avatar" style="background:#eef3f6">${p.emoji}</div><div class="meta"><h3>${esc(p.titleDe)}</h3><p>${s.mastered} sicher · ${s.seen} gesehen</p>${pctBar(s.pct)}</div></div>`;
        }).join("")}</div>
        <p class="section-title">Grammatik</p>
        <div class="list-card card">${CONTENT.grammar.map((g) => {
          const rec = Store.grammarProgress(g.id);
          const label = rec.total ? `${rec.bestCorrect != null ? rec.bestCorrect : rec.correct} / ${rec.total}` : "Noch nicht geübt";
          return `<div class="list-row"><div class="avatar" style="background:#e8eef2">${g.emoji}</div><div class="meta"><h3>${esc(g.title)}</h3><p>${label}</p>${pctBar(grammarPct(g))}</div></div>`;
        }).join("")}</div>
        <p class="section-title">Business Cases</p>
        <div class="list-card card">${CONTENT.cases.map((c) => `<div class="list-row"><div class="avatar" style="background:var(--gold-soft)">${c.emoji}</div><div class="meta"><h3>${esc(c.title)}</h3><p>${casePct(c)}&nbsp;%</p>${pctBar(casePct(c))}</div></div>`).join("")}</div>
        <p class="section-title">Prüfungen</p>
        <div class="list-card card">${exams.length ? exams.slice(0, 8).map((e) => {
          const d = new Date(e.date);
          return `<div class="list-row"><div class="avatar" style="background:${e.passed ? "var(--teal-soft)" : "var(--danger-soft)"}">${e.passed ? "✓" : "!"}</div><div class="meta"><h3>${e.score} / ${e.total}</h3><p>${esc(d.toLocaleDateString("de-DE"))} · ${e.passed ? "Bestanden" : "Nicht bestanden"}</p></div></div>`;
        }).join("") : `<div class="empty">Noch keine Prüfung abgelegt.</div>`}</div>
      </div>
      ${tabbar("more")}`;
  }

  function renderMistakes() {
    const list = Store.get().mistakes;
    $app().innerHTML = `
      ${topbar("Fehlerbox", { back: "#/more" })}
      <div class="page">
        ${list.length ? `
          <p class="date-line" style="margin-top:0">Einträge verschwinden, wenn du sie zweimal hintereinander richtig beantwortest.</p>
          <button class="btn" id="practice-mistakes">Jetzt üben</button>
          <div class="list-card card" style="margin-top:14px">
            ${list.map((m) => `<div class="list-row">
              <div class="avatar" style="background:var(--danger-soft)">${m.emoji || "❗️"}</div>
              <div class="meta"><h3>${esc(m.prompt)}</h3><p>${esc(areaName(m.area))} · ${esc(m.answerLabel || m.answer || "")}</p></div>
            </div>`).join("")}
          </div>
          <div class="btn-row"><button class="btn ghost" id="clear-mistakes">Fehlerbox leeren</button></div>
        ` : `<div class="empty"><span class="emoji">✨</span>Die Fehlerbox ist leer. Sehr gut.</div>`}
      </div>
      ${tabbar("more")}`;
    const start = document.getElementById("practice-mistakes");
    if (start) start.addEventListener("click", startMistakePractice);
    const clear = document.getElementById("clear-mistakes");
    if (clear) clear.addEventListener("click", () => {
      if (confirm("Fehlerbox wirklich leeren?")) { Store.clearMistakes(); renderMistakes(); }
    });
  }

  function startMistakePractice() {
    const list = Store.get().mistakes.slice();
    if (!list.length) return renderMistakes();
    session.mistakes = { queue: shuffle(list), index: 0, locked: false, last: null };
    renderMistakePractice();
  }

  function renderMistakePractice() {
    const s = session.mistakes;
    if (!s || s.index >= s.queue.length) {
      $app().innerHTML = `
        ${topbar("Fehlerbox", { back: "#/mistakes" })}
        <div class="page session-end">
          <p class="big">Runde beendet</p>
          <p class="date-line">Schau in die Fehlerbox, was noch offen ist.</p>
          <button class="btn" data-go="#/mistakes">Zur Fehlerbox</button>
        </div>
        ${tabbar("more")}`;
      return;
    }
    const m = s.queue[s.index];
    if (m.type === "vocab") {
      $app().innerHTML = `
        ${topbar("Fehlerbox", { back: "#/mistakes" })}
        <div class="page">
          <div class="q-card">
            <div class="q-meta"><span>${s.index + 1} / ${s.queue.length}</span><span>${esc(areaName(m.area))}</span></div>
            <p class="q-prompt">${esc(m.prompt)}</p>
            ${s.locked ? `<p style="font-weight:700;color:var(--teal-dark)">${esc(m.answer)}</p>
              ${m.example ? `<p>${esc(m.example)}</p>` : ""}
              <div class="btn-row">
                <button class="btn ghost" id="m-again">Nochmal</button>
                <button class="btn" id="m-ok">Gewusst</button>
              </div>` : `<div class="btn-row"><button class="btn" id="m-show">Bedeutung zeigen</button></div>`}
          </div>
        </div>
        ${tabbar("more")}`;
      const show = document.getElementById("m-show");
      if (show) show.addEventListener("click", () => { s.locked = true; renderMistakePractice(); });
      const ok = document.getElementById("m-ok");
      const again = document.getElementById("m-again");
      if (ok) ok.addEventListener("click", () => { Store.resolveMistake(m.id, true); s.locked = false; s.index += 1; renderMistakePractice(); });
      if (again) again.addEventListener("click", () => { Store.resolveMistake(m.id, false); s.locked = false; s.index += 1; renderMistakePractice(); });
      return;
    }
    const ex = {
      id: m.id, type: m.type || "mc", area: m.area, prompt: m.prompt,
      options: m.options, answer: m.answer, accept: m.accept, items: m.items, explain: m.explain,
    };
    renderExercisePage({
      title: "Fehlerbox",
      back: "#/mistakes",
      tab: "more",
      index: s.index,
      total: s.queue.length,
      ex,
      locked: s.locked,
      last: s.last,
      onCheck: (user) => {
        const ok = isCorrect(ex, user);
        s.locked = true;
        s.last = { user, ok };
        Store.resolveMistake(m.id, ok);
        renderMistakePractice();
      },
      onNext: () => { s.locked = false; s.last = null; session.order = null; s.index += 1; renderMistakePractice(); },
    });
  }

  function renderSettings() {
    const st = Store.get();
    const voice = st.settings.voice || "en-GB";
    const goal = st.settings.goal || 15;
    $app().innerHTML = `
      ${topbar("Einstellungen", { back: "#/more" })}
      <div class="page">
        <div class="settings-group">
          <h3>Aussprache</h3>
          <div class="seg" id="voice-seg">
            <button type="button" data-voice="en-GB" class="${voice === "en-GB" ? "on" : ""}">British English</button>
            <button type="button" data-voice="en-US" class="${voice === "en-US" ? "on" : ""}">American English</button>
          </div>
          <div class="btn-row"><button class="btn secondary" id="test-voice">Stimme testen</button></div>
        </div>
        <div class="settings-group">
          <h3>Tagesziel</h3>
          <div class="seg" id="goal-seg">
            ${[10, 15, 20, 30].map((n) => `<button type="button" data-goal="${n}" class="${goal === n ? "on" : ""}">${n}</button>`).join("")}
          </div>
        </div>
        <div class="settings-group">
          <h3>Auf dem iPhone</h3>
          <div class="theory-block">
            <p>In Safari das Teilen-Symbol antippen und <strong>Zum Home-Bildschirm</strong> wählen. Die App funktioniert danach auch offline.</p>
          </div>
        </div>
        <div class="settings-group">
          <h3>Daten</h3>
          <button class="btn danger" id="reset-all">Fortschritt zurücksetzen</button>
        </div>
      </div>
      ${tabbar("more")}`;
    document.querySelectorAll("#voice-seg button").forEach((b) => {
      b.addEventListener("click", () => { Store.setSetting("voice", b.getAttribute("data-voice")); AudioEng.refresh(); renderSettings(); });
    });
    document.querySelectorAll("#goal-seg button").forEach((b) => {
      b.addEventListener("click", () => { Store.setSetting("goal", Number(b.getAttribute("data-goal"))); renderSettings(); });
    });
    document.getElementById("test-voice").addEventListener("click", () => {
      AudioEng.speak("Good morning. I am looking forward to working with you on the Cyber Resilience Act project.");
    });
    document.getElementById("reset-all").addEventListener("click", () => {
      if (confirm("Wirklich den gesamten Lernfortschritt löschen?")) {
        Store.resetAll();
        renderSettings();
      }
    });
  }

  /* ---------- ROUTER ---------- */
  function route() {
    AudioEng.stop();
    if (session.exam && session.exam.tick && !session.exam.submitted) {
      const next = (location.hash || "#/").replace(/^#/, "") || "/";
      if (!next.startsWith("/exam")) {
        if (!confirm("Prüfung verlassen? Der aktuelle Durchgang wird abgebrochen.")) {
          history.pushState(null, "", "#/exam/run");
          renderExamRun();
          return;
        }
        clearInterval(session.exam.tick);
        session.exam = null;
      }
    }
    const raw = (location.hash || "#/").replace(/^#/, "") || "/";
    const parts = raw.split("/").filter(Boolean);
    Store.setRoute("#" + (raw.startsWith("/") ? raw : "/" + raw));
    const a = parts[0];
    const b = parts[1];
    const c = parts[2];
    if (!a) return renderHome();
    if (a === "vocab" && !b) return renderVocabList();
    if (a === "vocab" && b && c === "train") return startVocabTrain(b);
    if (a === "vocab" && b) return renderVocabPack(b);
    if (a === "grammar" && !b) return renderGrammarList();
    if (a === "grammar" && b && c === "practice") return startGrammar(b);
    if (a === "grammar" && b) return renderGrammarTheory(b);
    if (a === "cases" && !b) return renderCaseList();
    if (a === "cases" && b && c === "phrases") return renderCasePhrases(b);
    if (a === "cases" && b && c === "model") return renderCaseModel(b);
    if (a === "cases" && b && c === "practice") return startCasePractice(b);
    if (a === "cases" && b) return renderCaseDetail(b);
    if (a === "exam" && c === undefined && b === "run") return session.exam ? renderExamRun() : renderExamIntro();
    if (a === "exam" && b === "result") return renderExamResult();
    if (a === "exam") return renderExamIntro();
    if (a === "progress") return renderProgress();
    if (a === "mistakes") return renderMistakes();
    if (a === "settings") return renderSettings();
    if (a === "more") return renderMore();
    renderHome();
  }

  document.addEventListener("click", (e) => {
    const go = e.target.closest("[data-go]");
    if (go) {
      e.preventDefault();
      location.hash = go.getAttribute("data-go");
      return;
    }
    const say = e.target.closest("[data-say]");
    if (say) {
      e.preventDefault();
      AudioEng.speak(say.getAttribute("data-say"));
    }
  });

  window.addEventListener("hashchange", route);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js", { scope: "./" }).catch(() => {});
  }

  route();
})();
