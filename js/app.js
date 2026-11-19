/* Business English Trainer – UI */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const S = () => Store.get();
  const app = $("#app");
  const DAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const MONTHS = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
  const WEEKDAYS = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

  const ICON = {
    today: '<svg viewBox="0 0 24 24"><path d="M12 3c.6 3.2 4.8 5 4.8 9.6A4.8 4.8 0 0 1 12 17.4a4.8 4.8 0 0 1-4.8-4.8c0-2 1-3.3 2-4.3.3 1.4 1.2 2.3 2.2 2.6C11 8.6 11.2 5.6 12 3Z"/><path d="M5 21h14"/></svg>',
    training: '<svg viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>',
    praxis: '<svg viewBox="0 0 24 24"><path d="M4 5h16v10H9l-5 4V5Z"/><path d="M8 9h8M8 12h5"/></svg>',
    progress: '<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    back: '<svg viewBox="0 0 24 24"><path d="m15 5-7 7 7 7"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    speaker: '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="m5 12.5 4.2 4.2L19 7"/></svg>',
    chevron: '<svg viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg>'
  };

  /* ---------- helpers ---------- */
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const clip = (text, speaker) => !!(text && window.AudioEng && AudioEng.hasClip(text, speaker));
  function speakBtn(text, speaker, cls = "") {
    if (!clip(text, speaker)) return "";
    return `<button class="speak ${cls}" data-speak="${esc(text)}" data-speaker="${esc(speaker || "")}" aria-label="Anhören">${ICON.speaker}</button>`;
  }
  function weekDates() {
    const t = new Date(Store.today() + "T12:00:00");
    const dow = (t.getDay() + 6) % 7;
    return DAYS.map((d, i) => Store.offset(Store.today(), i - dow));
  }
  function greeting() {
    const h = new Date().getHours();
    return h < 11 ? "Guten Morgen" : h < 18 ? "Guten Tag" : "Guten Abend";
  }
  function ring(p, size = 92, stroke = 10, color = "var(--primary)", inner = "") {
    const r = (size - stroke) / 2, c = 2 * Math.PI * r;
    return `<div class="ring" style="width:${size}px;height:${size}px"><svg viewBox="0 0 ${size} ${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" class="ring-bg"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" stroke="${color}" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - Math.min(1, p))}" class="ring-fg"/></svg><div class="ring-in">${inner}</div></div>`;
  }
  function bar(p, cls = "") { return `<div class="bar ${cls}"><i style="width:${Math.max(0, Math.min(100, p))}%"></i></div>`; }
  function toast(msg) {
    const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add("show"));
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 300); }, 1800);
  }
  function confetti() {
    const box = document.createElement("div"); box.className = "confetti";
    const colors = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#0EA5E9", "#8B5CF6"];
    for (let i = 0; i < 70; i++) {
      const p = document.createElement("i");
      p.style.left = Math.random() * 100 + "%";
      p.style.background = colors[i % colors.length];
      p.style.animationDelay = Math.random() * 0.35 + "s";
      p.style.animationDuration = 1.6 + Math.random() * 1.2 + "s";
      p.style.setProperty("--dx", (Math.random() * 160 - 80) + "px");
      p.style.setProperty("--rot", Math.random() * 720 + "deg");
      box.appendChild(p);
    }
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 3400);
  }
  function sessionState() {
    const s = S(); const t = Store.today();
    if (!s.dailySession[t]) s.dailySession[t] = { answered: 0, done: false, xp: 0 };
    return s.dailySession[t];
  }
  function weekMinutes() {
    const h = S().history;
    return weekDates().map((d) => ({ date: d, min: Math.round(((h[d] && h[d].seconds) || 0) / 60), answers: (h[d] && h[d].answers) || 0, frozen: S().freeze.used.includes(d) }));
  }
  function streakStrip() {
    const t = Store.today();
    return `<div class="week">${weekMinutes().map((d, i) => `<div class="day ${d.answers ? "done" : ""} ${d.frozen ? "frozen" : ""} ${d.date === t ? "today" : ""} ${d.date > t ? "future" : ""}"><span class="dot">${d.answers ? ICON.check : d.frozen ? "❄️" : ""}</span><small>${DAYS[i]}</small></div>`).join("")}</div>`;
  }
  const top = (eyebrow, title, chips = "") => `<header class="top"><div class="top-row"><p class="eyebrow">${eyebrow}</p><div class="chips">${chips}</div></div><h1>${title}</h1></header>`;
  const fmtTime = (s) => `${Math.floor(Math.max(0, s) / 60)}:${String(Math.max(0, s) % 60).padStart(2, "0")}`;

  /* ---------- shell ---------- */
  const TABS = [
    { id: "today", hash: "#/", label: "Heute", icon: ICON.today },
    { id: "training", hash: "#/training", label: "Training", icon: ICON.training },
    { id: "praxis", hash: "#/praxis", label: "Praxis", icon: ICON.praxis },
    { id: "progress", hash: "#/progress", label: "Fortschritt", icon: ICON.progress }
  ];
  function shell(tab, html, opts = {}) {
    app.innerHTML = `<main class="view ${opts.cls || ""}">${opts.back ? `<header class="subhead"><button class="iconbtn" data-back="${esc(opts.back)}" aria-label="Zurück">${ICON.back}</button><h1>${esc(opts.title || "")}</h1><span></span></header>` : ""}${html}</main>
    <nav class="tabbar">${TABS.map((t) => `<a href="${t.hash}" class="${t.id === tab ? "on" : ""}">${t.icon}<span>${t.label}</span></a>`).join("")}</nav>`;
    window.scrollTo(0, 0);
  }

  /* ---------- Heute ---------- */
  function firstOpenLesson() {
    for (const u of PATH_UNITS) for (const l of u.lessons) if (!(S().lessons[l.id] && S().lessons[l.id].completed)) return l.id;
    return null;
  }
  function viewToday() {
    const s = S(), ss = sessionState(), items = 12;
    const progress = ss.done ? 1 : ss.answered / items;
    const goal = s.settings.xpGoal || 80, d = new Date();
    const cta = ss.done ? "Extra-Runde starten" : ss.answered ? "Weitermachen · noch " + Math.max(1, Math.round((items - ss.answered) * 0.9)) + " Min" : "Heute starten · 10 Min";
    const rank = Store.rankFor();
    const next = firstOpenLesson();
    const unitHtml = PATH_UNITS.map((u, ui) => {
      const done = u.lessons.filter((l) => s.lessons[l.id] && s.lessons[l.id].completed).length;
      const offsets = [0, 54, 78, 54, 0];
      const sign = ui % 2 ? -1 : 1;
      return `<section class="unit" style="--u:${u.color}">
        <div class="unit-head"><div><span class="stage">${esc(u.stage)} · Einheit ${ui + 1}</span><h3>${u.emoji} ${esc(u.title)}</h3></div><b>${done}/5</b></div>
        ${bar(pct(done, 5), "unit-bar")}
        <div class="nodes">${u.lessons.map((l, li) => {
          const rec = s.lessons[l.id];
          const st = rec && rec.completed ? "done" : l.id === next ? "current" : "open";
          const crowns = rec && rec.completed ? "★".repeat(rec.crowns || 1) + "☆".repeat(3 - (rec.crowns || 1)) : "";
          return `<button class="node ${st} ${l.milestone ? "milestone" : ""}" data-lesson="${l.id}" style="--x:${offsets[li] * sign}px">
            ${st === "current" ? '<span class="start-tip">START</span>' : ""}
            <span class="node-btn">${st === "done" ? ICON.check : l.milestone ? "🏆" : li + 1}</span>
            <span class="node-label">${esc(l.title)}${crowns ? `<em>${crowns}</em>` : ""}</span>
          </button>`;
        }).join("")}</div>
      </section>`;
    }).join("");
    shell("today", `
      ${top(`${WEEKDAYS[d.getDay()]}, ${d.getDate()}. ${MONTHS[d.getMonth()]}`, `${greeting()}, Isa`, `<span class="chip flame">🔥 ${s.streak.current}</span><span class="chip xp">⚡ ${s.xp.total}</span>`)}
      <section class="hero card">
        <div class="hero-row">
          ${ring(progress, 96, 10, ss.done ? "var(--success)" : "var(--primary)", ss.done ? '<b class="ring-check">✓</b>' : `<b>${Math.round(progress * 100)}%</b><small>heute</small>`)}
          <div class="hero-txt"><p class="eyebrow accent">Tages-Session · 10 Min</p><h2>${ss.done ? "Heute geschafft!" : "Dein Business-Workout"}</h2>
          <p class="muted">${ss.done ? "Stark. Morgen geht's weiter – deine Serie läuft." : "12 Übungen in 4 Teilen – auf deine Schwächen zugeschnitten."}</p></div>
        </div>
        <div class="phase-row">${["Warm-up", "Fehler", "Praxis", "Hören"].map((p, i) => `<span class="${ss.done || ss.answered >= (i + 1) * 3 ? "ok" : ss.answered >= i * 3 ? "now" : ""}">${p}</span>`).join("")}</div>
        ${streakStrip()}
        <div class="goal"><div class="goal-top"><span>Tagesziel</span><b>${Math.min(s.xp.today, goal)} / ${goal} XP</b></div>${bar(pct(s.xp.today, goal), "amber")}</div>
        <button class="btn primary big" data-act="session">${cta}</button>
      </section>
      <div class="rankline card slim"><span class="rank-emoji">${rank.emoji}</span><div class="grow"><b>${rank.title}</b><small>${rank.next ? `${rank.next.min - s.xp.total} XP bis ${rank.next.title}` : "Höchster Rang erreicht"}</small>${bar(rank.next ? pct(s.xp.total - rank.min, rank.next.min - rank.min) : 100, "mini amber")}</div></div>
      <div class="section-title"><h2>Lernpfad</h2><span>B2 → C1 · 40 Lektionen</span></div>
      ${unitHtml}`);
    const cur = $(".node.current");
    if (cur && sessionStorage.getItem("be-scroll-path")) { sessionStorage.removeItem("be-scroll-path"); cur.scrollIntoView({ block: "center" }); }
  }
  function startSession() {
    const ss = sessionState();
    const all = Engine.daily();
    const start = ss.done ? 0 : ss.answered;
    const items = ss.done ? Engine.shuffle(all).slice(0, 8) : all.slice(start);
    play({ title: "Tages-Session", items, offset: ss.done ? 0 : start, total: ss.done ? items.length : all.length, mode: "session",
      onAnswer: () => { if (!ss.done) { ss.answered = Math.min(all.length, ss.answered + 1); Store.save(); } },
      onDone: (r) => { if (!ss.done) { ss.done = true; ss.xp += r.xp; Store.addXp(15); r.bonus = 15; Store.save(); } } });
  }
  function startLesson(id) {
    let lesson, unit;
    PATH_UNITS.forEach((u) => u.lessons.forEach((l) => { if (l.id === id) { lesson = l; unit = u; } }));
    if (!lesson) return;
    const items = lesson.items.map(Engine.resolve).filter(Boolean);
    play({ title: lesson.title, subtitle: unit.title, items, mode: "lesson",
      onDone: (r) => { Store.lessonSave(id, r.pct); const b = 10 + (r.pct === 100 ? 5 : 0); Store.addXp(b); r.bonus = b; sessionStorage.setItem("be-scroll-path", "1"); } });
  }

  /* ---------- Player ---------- */
  let player = null;
  function play(cfg) {
    const st = { cfg, queue: cfg.items.slice(), i: 0, done: 0, firstTry: {}, combo: 0, best: 0, xp: 0, start: Date.now(), itemStart: Date.now(), requeued: {}, results: [], timeLeft: cfg.timeLimit || 0 };
    const total = cfg.total || cfg.items.length;
    const el = document.createElement("div");
    el.className = "player";
    document.body.appendChild(el); document.body.classList.add("noscroll");
    player = st;
    let timer = null;
    if (cfg.timeLimit) timer = setInterval(() => {
      st.timeLeft--; const t = $(".p-timer", el);
      if (t) { t.textContent = fmtTime(st.timeLeft); t.classList.toggle("warn", st.timeLeft <= 30); }
      if (st.timeLeft <= 0) { clearInterval(timer); finish(); }
    }, 1000);
    const close = () => { clearInterval(timer); AudioEng.stop(); el.remove(); document.body.classList.remove("noscroll"); player = null; route(); };
    function header() {
      const p = ((cfg.offset || 0) + st.done) / total;
      const hearts = S().settings.challenge && cfg.mode !== "exam" ? `<span class="hearts">❤️ ${S().hearts.left}</span>` : "";
      const tm = cfg.timeLimit ? `<span class="p-timer">${fmtTime(st.timeLeft)}</span>` : "";
      return `<div class="p-top"><button class="iconbtn" data-x aria-label="Schließen">${ICON.close}</button><div class="bar p-bar"><i style="width:${Math.round(p * 100)}%"></i></div>${hearts}${tm}<span class="combo ${st.combo >= 3 ? "on" : ""}">🔥 ${st.combo}</span></div>`;
    }
    function render() {
      const q = st.queue[st.i];
      if (!q) return finish();
      st.itemStart = Date.now();
      const again = st.queue.indexOf(q) !== st.i;
      el.innerHTML = `${header()}
        <div class="p-scroll"><div class="p-meta">${q.phase ? `<span class="phase">${esc(q.phase)}</span>` : ""}${again ? '<span class="phase again">Nochmal</span>' : ""}${q.type === "error" ? '<span class="ctx">Finde den Fehler</span>' : q.type === "upgrade" ? `<span class="ctx">B1 → C1 · ${esc(q.ctx)}</span>` : q.ctx || q.label ? `<span class="ctx">${esc(q.ctx || q.label)}</span>` : ""}</div>
        <div class="p-body"></div></div>
        <div class="p-foot"><button class="btn primary big" data-check disabled>Prüfen</button></div>`;
      const body = $(".p-body", el);
      const api = { body, exam: cfg.mode === "exam", enable: (on) => { $("[data-check]", el).disabled = !on; }, finish: (r) => result(q, r) };
      const R = RENDER[q.type] || RENDER.mc;
      st.current = R(q, api);
      if (q.type === "pairs" || q.type === "error") $(".p-foot", el).classList.add("hidden");
      $("[data-x]", el).onclick = () => { if (st.done === 0 || confirm("Session beenden? Dein Fortschritt bis hier bleibt gespeichert.")) close(); };
      $("[data-check]", el).onclick = () => { const r = st.current && st.current.check(); if (r) result(q, r); };
      if (q.type === "listen" && q.audio) setTimeout(() => { if (player === st && st.queue[st.i] === q) AudioEng.speak(q.audio, { speaker: q.speaker }); }, 350);
    }
    function result(q, r) {
      const secs = Math.min(90, Math.round((Date.now() - st.itemStart) / 1000));
      const first = !(q.id in st.firstTry);
      if (first) { st.firstTry[q.id] = r.correct; st.results.push({ q, correct: r.correct }); st.done++; if (cfg.onAnswer) cfg.onAnswer(); }
      Store.activity(r.correct, q.focus, secs);
      if (q.vocabId) Store.vocabRecord(q.vocabId, r.correct);
      let gained = 0;
      if (r.correct) {
        st.combo++; st.best = Math.max(st.best, st.combo);
        gained = Store.addXp((first ? 5 : 2) + (st.combo >= 3 ? Math.min(st.combo, 7) - 2 : 0));
        st.xp += gained;
        if (cfg.mode === "boost") Store.resolve(q.id);
        const milestone = st.combo === 3 || st.combo === 5 || st.combo === 10;
        if (cfg.mode !== "exam") { Sfx[milestone ? "combo" : "correct"](); if (milestone) comboBadge(st.combo); }
      } else {
        st.combo = 0;
        if (q.ref && !String(q.ref).startsWith("legacy")) Store.mistake(q);
        if (cfg.mode !== "exam") {
          Sfx.wrong();
          const card = $(".p-body", el); if (card) { card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake"); }
          if (!st.requeued[q.id]) { st.requeued[q.id] = true; st.queue.push(q); }
          if (S().settings.challenge) Store.loseHeart();
        }
      }
      if (cfg.mode === "exam") { st.i++; return render(); }
      sheet(q, r, gained);
    }
    function comboBadge(n) {
      const b = document.createElement("div"); b.className = "combo-pop";
      b.textContent = n >= 5 ? `🔥 ${n}x Feuer!` : `⚡ ${n}x Combo!`;
      el.appendChild(b); setTimeout(() => b.remove(), 1400);
    }
    function sheet(q, r, gained) {
      const ok = r.correct;
      const titles = ["Stark!", "Sehr gut!", "Exzellent!", "Profi-Niveau!", "Genau so!"];
      const persona = q.persona && r.reply ? `<div class="reaction"><span class="avatar sm" style="background:${q.persona.color}">${q.persona.initials}</span><p><b>${esc(q.persona.name.split(" ")[0])}:</b> ${esc(r.reply)}</p></div>` : "";
      const compare = q.type === "upgrade" ? `<div class="compare"><div class="before"><small>Vorher · B1</small><p>${esc(q.b1)}</p></div><div class="after"><small>Profi · C1</small><p>${esc(q.c1)}</p></div></div>` : "";
      const right = !ok && r.answer && q.type !== "upgrade" ? `<p class="right-label">Richtig ist:</p><p class="right">${esc(r.answer)}</p>` : "";
      const why = r.coach || q.explain || q.note || "";
      const tip = ok ? (q.type === "upgrade" || q.type === "reply" ? why : (q.tip && q.tip !== r.answer ? q.tip : why)) : why;
      const hearts0 = !ok && S().settings.challenge && S().hearts.left <= 0;
      const s = document.createElement("div");
      s.className = "sheet " + (ok ? "ok" : "bad");
      s.innerHTML = `<div class="sheet-in">
        <div class="sheet-h"><span class="sheet-ic">${ok ? ICON.check : ICON.close}</span><b>${ok ? titles[Math.floor(Math.random() * titles.length)] : "Nicht ganz."}</b>${gained ? `<span class="xp-pill">+${gained} XP</span>` : ""}</div>
        ${persona}${right}${compare}
        ${tip ? `<p class="tip"><b>${ok ? "C1-Tipp:" : "Warum?"}</b> ${esc(tip)}</p>` : ""}
        <button class="btn ${ok ? "success" : "danger"} big" data-next>${hearts0 ? "Keine Herzen mehr" : ok ? "Weiter" : "Verstanden"}</button></div>`;
      el.appendChild(s);
      $(".p-foot", el).classList.add("hidden");
      requestAnimationFrame(() => s.classList.add("up"));
      $("[data-next]", s).onclick = () => { if (hearts0) return finish(true); st.i++; render(); };
    }
    function finish(outOfHearts) {
      clearInterval(timer);
      AudioEng.stop();
      const n = st.results.length, c = st.results.filter((x) => x.correct).length;
      const r = { pct: pct(c, n), correct: c, total: n, xp: st.xp, best: st.best, seconds: Math.round((Date.now() - st.start) / 1000), results: st.results, bonus: 0 };
      if (!outOfHearts && cfg.onDone) cfg.onDone(r);
      if (cfg.mode === "exam") return examResult(el, r, close, cfg);
      Sfx.complete(); if (!outOfHearts) confetti();
      const streak = S().streak.current;
      const emoji = outOfHearts ? "💔" : r.pct >= 90 ? "🏆" : r.pct >= 70 ? "🎉" : "💪";
      el.innerHTML = `<div class="done-screen">
        <div class="done-emoji">${emoji}</div>
        <h1>${outOfHearts ? "Keine Herzen mehr" : cfg.mode === "session" ? "Session geschafft!" : cfg.mode === "boost" ? "Schwachstellen bearbeitet!" : cfg.mode === "lesson" ? "Lektion geschafft!" : "Runde geschafft!"}</h1>
        <p class="muted">${outOfHearts ? "Mit dem Schwachstellen-Boost füllst du deine Herzen wieder auf." : r.pct >= 90 ? "Das klingt nach C1. Weiter so!" : r.pct >= 70 ? "Sehr solide – deine Fehler landen im Boost." : "Jeder Fehler ist jetzt ein Trainingspunkt im Boost."}</p>
        <div class="stat-grid">
          <div class="stat amber"><small>XP</small><b>+${r.xp + (r.bonus || 0)}</b></div>
          <div class="stat green"><small>Treffer</small><b>${r.pct}%</b></div>
          <div class="stat indigo"><small>Beste Combo</small><b>${r.best}x</b></div>
          <div class="stat slate"><small>Zeit</small><b>${fmtTime(r.seconds)}</b></div>
        </div>
        <div class="streak-banner">🔥 <b>${streak} ${streak === 1 ? "Tag" : "Tage"}</b> Serie${S().freeze.available ? ` · ❄️ ${S().freeze.available} Streak-Schutz` : ""}</div>
        <button class="btn primary big" data-close>${outOfHearts ? "Zum Boost" : "Weiter"}</button></div>`;
      $("[data-close]", el).onclick = () => { if (outOfHearts) location.hash = "#/progress"; close(); };
    }
    render();
  }

  /* ---------- exercise renderers ---------- */
  function optionList(q, api, cls = "") {
    const box = document.createElement("div"); box.className = "options " + cls;
    box.innerHTML = q.options.map((o, i) => `<button class="opt" data-i="${i}">${esc(o.text)}</button>`).join("");
    let sel = -1;
    box.onclick = (e) => {
      const b = e.target.closest(".opt"); if (!b || box.classList.contains("locked")) return;
      $$(".opt", box).forEach((x) => x.classList.remove("sel")); b.classList.add("sel"); sel = Number(b.dataset.i); Sfx.tap(); api.enable(true);
    };
    api.body.appendChild(box);
    return {
      check: () => {
        if (sel < 0) return null;
        box.classList.add("locked");
        const o = q.options[sel], right = q.options.find((x) => x.correct);
        if (!api.exam) $$(".opt", box).forEach((x, i) => { if (q.options[i].correct) x.classList.add("right"); else if (i === sel) x.classList.add("wrong"); });
        return { correct: !!o.correct, answer: right && right.text, reply: o.reply, coach: o.coach };
      }
    };
  }
  const RENDER = {
    mc(q, api) {
      const reverse = q.label === "Aktiv abrufen";
      const instr = q.label === "Grammatik-Labor" || q.label === "Prüfung" ? "Wähle die richtige Form" : q.label === "Business Collocation" ? "Welches Verb passt?" : reverse ? "Wie sagst du das auf Englisch?" : "Was bedeutet das?";
      api.body.innerHTML = `<p class="instr">${instr}</p>
        <div class="prompt-card"><h2 class="${q.prompt.length > 70 ? "long" : ""}">${esc(q.prompt).replace("___", '<span class="gap">_____</span>')}</h2>${!reverse && q.vocabId ? speakBtn(q.term) || speakBtn(q.example) : ""}</div>`;
      return optionList(q, api);
    },
    listen(q, api) {
      api.body.innerHTML = `<p class="instr">${esc(q.prompt)}</p>
        <div class="listen-card"><button class="play-big" data-p="1" aria-label="Abspielen">${ICON.speaker}</button><button class="play-slow" data-p="0.85">🐢 0.85x</button></div>
        <button class="linkbtn" data-tr>Transkript anzeigen</button><p class="transcript hidden">${esc(q.audio)}</p>`;
      $$("[data-p]", api.body).forEach((b) => (b.onclick = () => { AudioEng.speak(q.audio, { rate: Number(b.dataset.p) }); b.classList.add("pulse"); setTimeout(() => b.classList.remove("pulse"), 600); }));
      $("[data-tr]", api.body).onclick = (e) => { const t = $(".transcript", api.body); t.classList.toggle("hidden"); e.target.textContent = t.classList.contains("hidden") ? "Transkript anzeigen" : "Transkript ausblenden"; };
      return optionList(q, api);
    },
    build(q, api) {
      api.body.innerHTML = `<p class="instr">Bau den Satz auf Englisch</p><div class="prompt-card small"><h2>${esc(q.prompt)}</h2></div>
        <div class="answer-line" aria-label="Deine Antwort"></div><div class="bank"></div>`;
      const line = $(".answer-line", api.body), bank = $(".bank", api.body);
      const tokens = q.tokens.map((t, k) => ({ ...t, k }));
      bank.innerHTML = tokens.map((t) => `<button class="tok" data-k="${t.k}">${esc(t.text)}</button>`).join("");
      const order = [];
      api.body.onclick = (e) => {
        const b = e.target.closest(".tok"); if (!b || b.classList.contains("ghost") || api.body.classList.contains("locked")) return;
        Sfx.tap();
        if (b.parentElement === bank) { b.classList.add("ghost"); const c = b.cloneNode(true); line.appendChild(c); order.push(Number(b.dataset.k)); }
        else { const k = Number(b.dataset.k); order.splice(order.indexOf(k), 1); b.remove(); $(`.tok[data-k="${k}"]`, bank).classList.remove("ghost"); }
        api.enable(order.length === tokens.length);
      };
      return {
        check: () => {
          api.body.classList.add("locked");
          const norm = (s) => s.replace(/[.,!?;:]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
          const ok = norm(order.map((k) => tokens[k].text).join(" ")) === norm(q.target);
          line.classList.add(ok ? "right" : "wrong");
          if (ok && clip(q.target)) AudioEng.speak(q.target);
          return { correct: ok, answer: q.target };
        }
      };
    },
    pairs(q, api) {
      const left = Engine.shuffle(q.words), right = Engine.shuffle(q.words);
      api.body.innerHTML = `<p class="instr">Finde die Paare</p><div class="pairs"><div>${left.map((w) => `<button class="pair" data-side="l" data-id="${w.id}">${esc(w.term)}</button>`).join("")}</div><div>${right.map((w) => `<button class="pair" data-side="r" data-id="${w.id}">${esc(w.de)}</button>`).join("")}</div></div>`;
      let pick = null, matched = 0, errors = 0;
      api.body.onclick = (e) => {
        const b = e.target.closest(".pair"); if (!b || b.classList.contains("matched")) return;
        if (!pick || pick.dataset.side === b.dataset.side) {
          $$(".pair.sel", api.body).forEach((x) => x.classList.remove("sel")); b.classList.add("sel"); pick = b; Sfx.tap();
          if (b.dataset.side === "l") { const w = q.words.find((x) => x.id === b.dataset.id); if (clip(w.term)) AudioEng.speak(w.term); }
          return;
        }
        if (pick.dataset.id === b.dataset.id) {
          [pick, b].forEach((x) => { x.classList.remove("sel"); x.classList.add("matched"); }); matched++; Sfx.correct();
          if (matched === q.words.length) setTimeout(() => api.finish({ correct: errors <= 1, answer: q.words.map((w) => w.term + " = " + w.de).join(" · ") }), 350);
        } else {
          errors++; Sfx.wrong(); const pair = [pick, b]; pair.forEach((x) => x.classList.add("bad")); setTimeout(() => pair.forEach((x) => x.classList.remove("bad", "sel")), 450);
        }
        pick = null;
      };
      return { check: () => null };
    },
    error(q, api) {
      const m = q.text.match(/^(.*?)\[\[(.*?)\]\](.*)$/);
      const tail = (m[3].match(/^[^\s]+/) || [""])[0];
      const words = [...m[1].split(/\s+/).filter(Boolean).map((t) => ({ t, bad: false })), { t: m[2], bad: true, suffix: tail }, ...m[3].slice(tail.length).split(/\s+/).filter(Boolean).map((t) => ({ t, bad: false }))];
      api.body.innerHTML = `<p class="instr">Tippe auf den Fehler</p><div class="mail-card"><div class="mail-h"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><small>${esc(q.ctx)}</small></div>
        <p class="err-line">${words.map((w, i) => `<button class="w" data-i="${i}">${esc(w.t)}</button>${w.suffix ? `<span class="sfx">${esc(w.suffix)}</span>` : ""}`).join(" ")}</p></div><div class="stage2"></div>`;
      const line = $(".err-line", api.body);
      let inner = null;
      line.onclick = (e) => {
        const b = e.target.closest(".w"); if (!b || line.classList.contains("locked")) return;
        line.classList.add("locked");
        const w = words[Number(b.dataset.i)];
        const badBtn = $$(".w", line)[words.findIndex((x) => x.bad)];
        if (!w.bad) { b.classList.add("miss"); badBtn.classList.add("found"); return api.finish({ correct: false, answer: q.tip }); }
        Sfx.tap(); b.classList.add("found");
        $(".instr", api.body).textContent = "Treffer! Jetzt die richtige Korrektur wählen";
        inner = optionList(q, { body: $(".stage2", api.body), enable: api.enable, exam: api.exam });
        const foot = api.body.closest(".player").querySelector(".p-foot"); if (foot) foot.classList.remove("hidden");
      };
      return { check: () => { if (!inner) return null; const r = inner.check(); if (r) r.answer = q.tip; return r; } };
    },
    upgrade(q, api) {
      api.body.innerHTML = `<p class="instr">Wähle die Profi-Version (C1)</p>
        <div class="b1-card"><span class="tag">B1 · klingt zu direkt</span><p>„${esc(q.b1)}“</p></div>`;
      return optionList(q, api, "upgrade-opts");
    },
    reply(q, api) {
      api.body.innerHTML = `<p class="instr">Wie antwortest du?</p>
        <div class="chat mini"><div class="msg client"><span class="avatar sm" style="background:${q.persona.color}">${q.persona.initials}</span><div class="bubble"><small>${esc(q.persona.name)} · ${esc(q.persona.role)}</small><p>${esc(q.prompt)}</p>${speakBtn(q.prompt, q.speaker, "in-bubble")}</div></div></div>`;
      return optionList(q, api, "reply-opts");
    }
  };

  function examResult(el, r, close, cfg) {
    const by = {};
    r.results.forEach(({ q, correct }) => { const f = q.focus || "phrases"; by[f] = by[f] || { c: 0, t: 0 }; by[f].t++; if (correct) by[f].c++; });
    const pass = r.pct >= 80;
    S().exams.unshift({ date: Date.now(), pct: r.pct, total: r.total, by, mode: cfg.examMode });
    S().exams = S().exams.slice(0, 20); Store.save();
    Sfx.complete(); if (pass) confetti();
    const wrong = r.results.filter((x) => !x.correct);
    el.innerHTML = `<div class="done-screen exam">
      <div class="done-emoji">${pass ? "🎓" : "📋"}</div><h1>${pass ? "Bestanden!" : "Noch nicht bestanden"}</h1>
      <p class="muted">${r.correct} von ${r.total} richtig · Bestehensgrenze 80 %</p>
      ${ring(r.pct / 100, 120, 12, pass ? "var(--success)" : "var(--danger)", `<b>${r.pct}%</b>`)}
      <div class="card breakdown"><h3>Schwachstellen-Analyse</h3>${Object.entries(Engine.FOCUS).filter(([k]) => by[k]).map(([k, n]) => { const p = pct(by[k].c, by[k].t); return `<div class="bd-row"><span>${n}</span><b class="${p < 70 ? "weak" : ""}">${by[k].c}/${by[k].t}</b>${bar(p, p < 70 ? "red" : "green")}</div>`; }).join("")}</div>
      ${wrong.length ? `<div class="card review"><h3>Das solltest du dir merken</h3>${wrong.map(({ q }) => `<div class="rv"><p class="muted">${esc((q.prompt || "").replace(/\[\[|\]\]/g, ""))}</p><p><b>${esc(q.tip || "")}</b></p></div>`).join("")}</div>` : ""}
      <button class="btn primary big" data-close>Fertig</button></div>`;
    $("[data-close]", el).onclick = close;
  }

  /* ---------- Training ---------- */
  function listenPool() { return Engine.vocab.filter((w) => clip(w.example)); }
  function viewTraining() {
    const s = S();
    const tiles = [
      { href: "#/mode/error", emoji: "🔎", title: "Finde den Fehler", sub: "Echte Mails & Meetings", meta: ERROR_ITEMS.length + " Fälle", color: "#EF4444" },
      { href: "#/mode/upgrade", emoji: "💎", title: "Klingt nach Profi", sub: "B1 → C1 Upgrade", meta: UPGRADE_ITEMS.length + " Sätze", color: "#8B5CF6" },
      { href: "#/vocab", emoji: "🗂️", title: "Vokabel-Meister", sub: "Karteikarten & Quiz", meta: Engine.vocab.length + " Wendungen", color: "#4F46E5" },
      { href: "#/grammar", emoji: "🧪", title: "Grammatik-Labor", sub: "If, Inversion, Modals", meta: Engine.grammar.length + " Labore", color: "#10B981" },
      { href: "#/listen", emoji: "🎧", title: "Hör-Studio", sub: "Hören & Nachsprechen", meta: listenPool().length + " Clips", color: "#0EA5E9" },
      { href: "#/boost", emoji: "🎯", title: "Schwachstellen-Boost", sub: "Deine Fehler gezielt", meta: s.mistakes.length + " offen", color: "#F59E0B" }
    ];
    shell("training", `${top("Training", "Gezielt besser werden", `<span class="chip xp">⚡ ${s.xp.today} heute</span>`)}
      <a class="blitz-hero" href="#/blitz"><div class="grow"><span class="eyebrow light">60s Blitz-Challenge</span><h2>Wie schnell bist du?</h2><p>Collocations, False Friends & Phrasal Verbs – Combo bis x4</p><span class="btn white">Blitz starten</span></div><div class="blitz-score"><small>Highscore</small><b>${s.blitzBest || 0}</b></div></a>
      <div class="tiles">${tiles.map((t) => `<a class="tile" href="${t.href}" style="--c:${t.color}"><span class="tile-ic">${t.emoji}</span><b>${t.title}</b><small>${t.sub}</small><em>${t.meta}</em></a>`).join("")}</div>`);
  }
  function runMode(kind) {
    const s = S();
    const rank = (refs) => refs.map((ref) => ({ ref, k: s.mistakes.some((x) => x.id === ref) ? -1 : Math.random() })).sort((a, b) => a.k - b.k).map((x) => x.ref);
    if (kind === "error") {
      const items = rank(ERROR_ITEMS.map((e) => "e:" + e.id)).slice(0, 8).map(Engine.resolve);
      return play({ title: "Finde den Fehler", items, mode: "drill" });
    }
    if (kind === "upgrade") {
      const items = rank(UPGRADE_ITEMS.map((u) => "u:" + u.id)).slice(0, 7).map(Engine.resolve);
      return play({ title: "Klingt nach Profi", items, mode: "drill" });
    }
  }

  /* ---------- Blitz ---------- */
  function blitzPool() {
    const fromDecks = Engine.vocab.filter((w) => ["falsefriends", "phrasal", "idioms", "risk"].includes(w.deck) && w.term.length < 34);
    return [
      ...COLLOCATIONS.map((c) => ({ prompt: c.gap, answer: c.answer, wrong: c.wrong, kind: "Collocation" })),
      ...fromDecks.map((w) => ({ prompt: w.term, answer: w.de, wrong: Engine.shuffle(Engine.vocab.filter((x) => x.deck === w.deck && x.id !== w.id)).slice(0, 3).map((x) => x.de), kind: w.deck === "falsefriends" ? "False Friend" : w.deck === "phrasal" ? "Phrasal Verb" : w.deck === "idioms" ? "Idiom" : "Risk & Escalation" }))
    ];
  }
  function viewBlitz() {
    const s = S();
    shell("training", `<div class="blitz-intro card"><div class="big-ic amber">⚡</div><h2>60 Sekunden. Volle Konzentration.</h2>
      <p class="muted">Tippe so schnell wie möglich die richtige Antwort. Jede dritte richtige Antwort in Folge erhöht deinen Multiplikator bis <b>x4</b>. Ein Fehler setzt ihn zurück.</p>
      <div class="stat-grid two"><div class="stat amber"><small>Highscore</small><b>${s.blitzBest || 0}</b></div><div class="stat indigo"><small>Fragen im Pool</small><b>${blitzPool().length}</b></div></div>
      <button class="btn primary big" data-act="blitz-go">Los geht's</button></div>`, { back: "#/training", title: "Blitz-Challenge" });
  }
  function runBlitz() {
    const pool = Engine.shuffle(blitzPool());
    const st = { score: 0, streak: 0, mult: 1, correct: 0, answered: 0, t: 60, k: 0 };
    const el = document.createElement("div"); el.className = "player blitz"; document.body.appendChild(el); document.body.classList.add("noscroll");
    player = st;
    let timer = null;
    const close = () => { clearInterval(timer); el.remove(); document.body.classList.remove("noscroll"); player = null; route(); };
    function q() {
      const item = pool[st.k++ % pool.length];
      const opts = Engine.shuffle([{ text: item.answer, correct: true }, ...item.wrong.slice(0, 3).map((t) => ({ text: t, correct: false }))]);
      el.innerHTML = `<div class="p-top"><button class="iconbtn" data-x aria-label="Schließen">${ICON.close}</button>
        <div class="blitz-stats"><span class="b-score">${st.score}</span><span class="mult m${st.mult}">x${st.mult}</span></div>
        ${ring(st.t / 60, 54, 6, st.t <= 10 ? "var(--danger)" : "var(--amber)", `<b class="b-t">${st.t}</b>`)}</div>
        <div class="blitz-body"><div class="blitz-card"><span class="ctx">${item.kind}</span><h2 class="blitz-q">${esc(item.prompt).replace("___", '<span class="gap">___</span>')}</h2><small class="blitz-live">${st.correct} richtig · Serie ${st.streak}</small></div>
        <div class="blitz-grid">${opts.map((o, i) => `<button class="opt" data-i="${i}">${esc(o.text)}</button>`).join("")}</div>
        <div class="streak-dots">${[0, 1, 2].map((i) => `<i class="${st.streak % 3 > i ? "on" : ""}"></i>`).join("")}<small>${st.mult < 4 ? "bis x" + (st.mult + 1) : "Maximum!"}</small></div></div>`;
      $("[data-x]", el).onclick = close;
      $(".blitz-grid", el).onclick = (e) => {
        const b = e.target.closest(".opt"); if (!b || el.dataset.lock || st.t <= 0) return;
        el.dataset.lock = "1";
        const o = opts[Number(b.dataset.i)]; st.answered++;
        if (o.correct) { st.correct++; st.streak++; st.score += 10 * st.mult; st.mult = Math.min(4, 1 + Math.floor(st.streak / 3)); b.classList.add("right"); Sfx[st.streak % 3 === 0 ? "combo" : "correct"](); }
        else { st.streak = 0; st.mult = 1; b.classList.add("wrong"); $$(".opt", el)[opts.findIndex((x) => x.correct)].classList.add("right"); Sfx.wrong(); }
        setTimeout(() => { delete el.dataset.lock; if (st.t > 0) q(); }, o.correct ? 260 : 650);
      };
    }
    function end() {
      clearInterval(timer);
      const s = S(), record = st.score > (s.blitzBest || 0);
      if (record) { s.blitzBest = st.score; Store.save(); confetti(); }
      Sfx.complete();
      Store.activity(st.correct >= st.answered / 2, null, 60);
      const xp = Store.addXp(Math.min(25, Math.round(st.score / 20)));
      el.innerHTML = `<div class="done-screen"><div class="done-emoji">${record ? "🏆" : "⚡"}</div><h1>${record ? "Neuer Highscore!" : "Zeit ist um!"}</h1><p class="muted">${st.correct} von ${st.answered} richtig</p>
        <div class="stat-grid"><div class="stat amber"><small>Punkte</small><b>${st.score}</b></div><div class="stat indigo"><small>Highscore</small><b>${s.blitzBest}</b></div><div class="stat green"><small>Treffer</small><b>${pct(st.correct, st.answered)}%</b></div><div class="stat slate"><small>XP</small><b>+${xp}</b></div></div>
        <button class="btn primary big" data-again>Revanche</button><button class="btn ghost big" data-close>Fertig</button></div>`;
      $("[data-again]", el).onclick = () => { clearInterval(timer); el.remove(); player = null; runBlitz(); };
      $("[data-close]", el).onclick = close;
    }
    timer = setInterval(() => {
      st.t--; const t = $(".b-t", el); if (t) t.textContent = st.t;
      const fg = $(".ring-fg", el); if (fg) { const c = Number(fg.getAttribute("stroke-dasharray")); fg.setAttribute("stroke-dashoffset", c * (1 - st.t / 60)); if (st.t <= 10) fg.setAttribute("stroke", "var(--danger)"); }
      if (st.t <= 0) end();
    }, 1000);
    q();
  }

  /* ---------- Vocab ---------- */
  const mastered = (d) => d.words.filter((w) => (S().vocab[w.id] || {}).box >= 3).length;
  function viewVocab() {
    const due = Engine.vocab.filter((w) => S().vocab[w.id] && S().vocab[w.id].due <= Date.now()).length;
    shell("training", `<div class="card due-card"><div class="grow"><b>${due} Karten fällig</b><small>Wiederholung nach 1 · 3 · 7 · 14 · 30 Tagen</small></div><a class="btn primary" href="#/cards/due">${due ? "Wiederholen" : "Neue lernen"}</a></div>
      <div class="list">${Engine.decks.map((d) => `<a class="row-card" href="#/vocab/${d.id}"><span class="row-ic" style="background:${d.color || "#4F46E5"}1f">${d.emoji}</span><div class="grow"><b>${esc(d.titleDe)}</b><small>${d.words.length} Wendungen · ${mastered(d)} gemeistert</small>${bar(pct(mastered(d), d.words.length), "mini green")}</div>${ICON.chevron}</a>`).join("")}</div>`, { back: "#/training", title: "Vokabel-Meister" });
  }
  function viewDeck(id) {
    const d = Engine.decks.find((x) => x.id === id); if (!d) { location.hash = "#/vocab"; return; }
    shell("training", `<div class="deck-hero card"><span class="deck-emoji">${d.emoji}</span><h2>${esc(d.titleDe)}</h2><p class="muted">${esc(d.blurb || "")}</p>
      <div class="btn-row"><a class="btn primary" href="#/cards/${d.id}">Karteikarten</a><button class="btn secondary" data-act="quiz" data-deck="${d.id}">Quiz · 10</button></div></div>
      <div class="list words">${d.words.map((w) => `<div class="word"><div class="grow"><b>${esc(w.term)}</b><span>${esc(w.de)}</span><small>${esc(w.example)}</small></div>${speakBtn(w.term) || speakBtn(w.example)}</div>`).join("")}</div>`, { back: "#/vocab", title: d.titleDe });
  }
  function viewCards(id) {
    const s = S();
    const deck = Engine.decks.find((d) => d.id === id);
    let words = id === "due" ? Engine.vocab.filter((w) => s.vocab[w.id] && s.vocab[w.id].due <= Date.now()) : deck ? deck.words.map((w) => Engine.V[w.id]) : [];
    if (id === "due" && !words.length) words = Engine.vocab.filter((w) => !s.vocab[w.id]).slice(0, 15);
    words = words.slice().sort((a, b) => ((s.vocab[a.id] || {}).due || 0) - ((s.vocab[b.id] || {}).due || 0)).slice(0, 15);
    let i = 0, known = 0;
    const back = deck ? "#/vocab/" + id : "#/vocab";
    function card() {
      const w = words[i];
      if (!w) {
        confetti(); Sfx.complete(); Store.addXp(known * 2);
        return shell("training", `<div class="done-screen inline"><div class="done-emoji">🗂️</div><h1>Stapel geschafft!</h1><p class="muted">${known} von ${words.length} gewusst · +${known * 2} XP</p><a class="btn primary big" href="${back}">Weiter</a></div>`, { back, title: "Karteikarten" });
      }
      shell("training", `<p class="counter">${i + 1} / ${words.length}</p>${bar(pct(i, words.length))}
        <div class="flash" data-flip><div class="flash-front"><small>${esc(w.deckName)}</small><h2>${esc(w.term)}</h2>${speakBtn(w.term) || speakBtn(w.example)}<p class="muted tapnote">Tippe zum Aufdecken</p></div>
        <div class="flash-back hidden"><h3>${esc(w.de)}</h3><p class="ex">„${esc(w.example)}“ ${speakBtn(w.example)}</p>${w.hint ? `<p class="note">💡 ${esc(w.hint)}</p>` : ""}</div></div>
        <div class="btn-row hidden" data-rate><button class="btn danger" data-k="0">Nochmal</button><button class="btn success" data-k="1">Gewusst</button></div>`, { back, title: "Karteikarten" });
      $("[data-flip]").onclick = (e) => { if (e.target.closest(".speak")) return; $(".flash-back").classList.remove("hidden"); $(".tapnote").classList.add("hidden"); $("[data-rate]").classList.remove("hidden"); };
      $$("[data-k]").forEach((b) => (b.onclick = () => { const ok = b.dataset.k === "1"; Store.vocabRecord(w.id, ok); Store.activity(ok, null, 8); if (ok) { known++; Sfx.correct(); } else Sfx.wrong(); i++; card(); }));
    }
    card();
  }

  /* ---------- Grammar ---------- */
  function viewGrammar() {
    shell("training", `<div class="list">${Engine.grammar.map((g) => { const p = S().grammar[g.id] || {}; return `<a class="row-card" href="#/grammar/${g.id}"><span class="row-ic">${g.emoji}</span><div class="grow"><b>${esc(g.title)}</b><small>${g.exercises.length} Übungen${p.best != null ? ` · Bestwert ${p.best}%` : ""}</small></div>${ICON.chevron}</a>`; }).join("")}</div>`, { back: "#/training", title: "Grammatik-Labor" });
  }
  function viewGrammarChapter(id) {
    const g = Engine.grammar.find((x) => x.id === id); if (!g) { location.hash = "#/grammar"; return; }
    shell("training", `<div class="card"><p class="muted">${esc(g.intro)}</p></div>
      <div class="theory">${g.theory.map((t, i) => `<details ${i === 0 ? "open" : ""}><summary>${esc(t.h)}</summary><p>${esc(t.p)}</p></details>`).join("")}</div>
      <button class="btn primary big" data-act="gdrill" data-g="${g.id}">Drill starten · 10 Übungen</button>`, { back: "#/grammar", title: g.title });
  }
  function runGrammar(id) {
    const g = Engine.grammar.find((x) => x.id === id);
    const items = Engine.shuffle(g.exercises).slice(0, 10).map((x) => Engine.resolve("g:" + g.id + ":" + x.id)).filter(Boolean);
    play({ title: g.title, items, mode: "drill", onDone: (r) => { const p = S().grammar[g.id] || {}; S().grammar[g.id] = { ...p, best: Math.max(p.best || 0, r.pct), completed: true }; Store.save(); } });
  }

  /* ---------- Listening studio ---------- */
  function viewListen() {
    const pool = listenPool();
    const saved = sessionStorage.getItem("be-listen");
    const idx = (saved == null ? Math.floor(Math.random() * pool.length) : Number(saved)) % pool.length;
    const w = pool[idx];
    let rate = 1;
    const opts = w.exampleDe
      ? Engine.shuffle([{ text: w.exampleDe, correct: true }, ...Engine.shuffle(pool.filter((x) => x.exampleDe && x.id !== w.id)).slice(0, 2).map((x) => ({ text: x.exampleDe, correct: false }))])
      : Engine.shuffle([{ text: w.term, correct: true }, ...Engine.shuffle(pool.filter((x) => x.deck === w.deck && x.id !== w.id)).slice(0, 2).map((x) => ({ text: x.term, correct: false }))]);
    shell("training", `<div class="card studio">
        <span class="ctx">${esc(w.deckName)}</span>
        <div class="listen-card"><button class="play-big" data-play aria-label="Abspielen">${ICON.speaker}</button></div>
        <div class="seg"><button class="on" data-r="1">1.0x</button><button data-r="0.85">0.85x</button></div>
        <button class="linkbtn" data-tr>Transkript anzeigen</button><p class="transcript hidden">${esc(w.example)}</p>
      </div>
      <div class="card"><h3>1 · Verständnis-Check</h3><p class="muted">${w.exampleDe ? "Was bedeutet der Satz?" : "Welche Wendung hast du gehört?"}</p><div class="options" id="lopts">${opts.map((o, i) => `<button class="opt" data-o="${i}">${esc(o.text)}</button>`).join("")}</div><p class="fb hidden"></p></div>
      <div class="card"><h3>2 · Shadowing</h3><p class="muted">Hör den Satz, dann sprich ihn im gleichen Tempo laut nach. Der Balken gibt dir den Takt.</p>
        <div class="pace hidden"><div class="bar amber"><i></i></div><small>Jetzt du – sprich laut nach</small></div>
        <button class="btn secondary big" data-shadow>Shadowing starten</button></div>
      <button class="btn primary big" data-nextclip>Nächster Clip</button>`, { back: "#/training", title: "Hör-Studio" });
    $("[data-play]").onclick = () => AudioEng.speak(w.example, { rate });
    $$("[data-r]").forEach((b) => (b.onclick = () => { rate = Number(b.dataset.r); $$("[data-r]").forEach((x) => x.classList.toggle("on", x === b)); AudioEng.speak(w.example, { rate }); }));
    $("[data-tr]").onclick = (e) => { const t = $(".transcript"); t.classList.toggle("hidden"); e.target.textContent = t.classList.contains("hidden") ? "Transkript anzeigen" : "Transkript ausblenden"; };
    $("#lopts").onclick = (e) => {
      const b = e.target.closest(".opt"), box = $("#lopts"); if (!b || box.classList.contains("locked")) return; box.classList.add("locked");
      const ok = opts[Number(b.dataset.o)].correct;
      $$(".opt", box).forEach((x, i) => { if (opts[i].correct) x.classList.add("right"); else if (x === b) x.classList.add("wrong"); });
      Store.activity(ok, null, 15); if (ok) { Store.addXp(3); Sfx.correct(); } else Sfx.wrong();
      const fb = $(".fb"); fb.classList.remove("hidden"); fb.innerHTML = `<b>${ok ? "Richtig!" : "Fast."}</b> „${esc(w.example)}“`;
      $(".transcript").classList.remove("hidden");
    };
    $("[data-shadow]").onclick = () => {
      const pace = $(".pace"), fill = $(".pace i");
      AudioEng.speak(w.example, { rate, onmeta: (d) => (pace.dataset.d = d), onend: () => {
        const d = Number(pace.dataset.d) || 4; pace.classList.remove("hidden"); fill.style.transition = "none"; fill.style.width = "0%";
        requestAnimationFrame(() => requestAnimationFrame(() => { fill.style.transition = `width ${d * 1.25}s linear`; fill.style.width = "100%"; }));
        setTimeout(() => { const sm = pace.querySelector("small"); if (sm) sm.textContent = "Super – wiederhole, bis es flüssig klingt."; }, d * 1250);
      } });
      Store.addXp(2);
    };
    $("[data-nextclip]").onclick = () => { sessionStorage.setItem("be-listen", String((idx + 1 + Math.floor(Math.random() * 7)) % pool.length)); AudioEng.stop(); viewListen(); };
  }

  /* ---------- Praxis ---------- */
  function viewPraxis() {
    const chats = S().chats || {};
    shell("praxis", `${top("Praxis", "Echte Kundensituationen", `<span class="chip flame">🔥 ${S().streak.current}</span>`)}
      <div class="section-title"><h2>Kunden-Simulator</h2><span>8 Fälle · 36 Züge</span></div>
      <div class="list">${CHAT_SCENARIOS.map((c) => { const b = chats[c.id]; return `<a class="scenario" href="#/chat/${c.id}">
        <span class="avatar lg" style="background:${c.persona.color}">${c.persona.initials}</span>
        <div class="grow"><div class="sc-top"><span class="lvl">${c.level}</span><span class="chan">${c.channel === "mail" ? "✉️ Mail" : "💬 Chat"}</span>${b ? `<span class="best">${b.best}%</span>` : ""}</div>
        <b>${esc(c.title)}</b><small>${esc(c.persona.name)} · ${esc(c.persona.role)}</small></div>${ICON.chevron}</a>`; }).join("")}</div>
      <a class="exam-card" href="#/exam"><div class="grow"><span class="eyebrow light">Prüfungssimulator</span><h2>B2/C1 unter Zeitdruck</h2><p>Mit Schwachstellen-Analyse · Bestehen ab 80 %</p></div><span class="exam-ic">🎓</span></a>
      <div class="section-title"><h2>Musterfälle & Phrasen</h2><span>Mit Audio</span></div>
      <div class="list">${CONTENT.cases.map((c) => `<a class="row-card" href="#/case/${c.id}"><span class="row-ic">${c.emoji}</span><div class="grow"><b>${esc(c.title)}</b><small>${esc(c.titleEn)}</small></div>${ICON.chevron}</a>`).join("")}</div>`);
  }
  function viewCase(id) {
    const c = CONTENT.cases.find((x) => x.id === id); if (!c) { location.hash = "#/praxis"; return; }
    const full = typeof AUDIO_FULL === "object" && AUDIO_FULL[c.id];
    shell("praxis", `<div class="card"><p class="muted">${esc(c.blurb)}</p><ul class="goals">${c.goals.map((g) => `<li>${esc(g)}</li>`).join("")}</ul></div>
      <div class="section-title"><h2>Schlüsselphrasen</h2></div>
      <div class="list words">${c.phrases.map((p) => `<div class="word"><div class="grow"><b>${esc(p.en)}</b><span>${esc(p.de)}</span></div>${speakBtn(p.en)}</div>`).join("")}</div>
      <div class="section-title"><h2>${esc(c.model.title)}</h2></div>
      <div class="card model">${full ? `<button class="btn secondary" data-model>▶ Ganzes Beispiel anhören</button>` : ""}${c.model.lines.map((l) => `<p>${l.speaker ? `<b>${esc(l.speaker)}:</b> ` : ""}${esc(l.text)}</p>`).join("")}</div>`, { back: "#/praxis", title: c.title });
    const m = $("[data-model]"); if (m) m.onclick = () => AudioEng.speakLines(c.model.lines, { caseId: c.id });
  }

  function viewChat(id) {
    const c = Engine.C[id]; if (!c) { location.hash = "#/praxis"; return; }
    const st = { t: 0, score: 0, meters: [0, 0, 0] };
    let clock = 9 * 60 + 40;
    const time = () => { clock++; return `${String(Math.floor(clock / 60)).padStart(2, "0")}:${String(clock % 60).padStart(2, "0")}`; };
    shell("praxis", `<div class="chat-top"><div class="chat-head"><span class="avatar" style="background:${c.persona.color}">${c.persona.initials}</span><div class="grow"><b>${esc(c.persona.name)}</b><small>${esc(c.persona.role)} · ${esc(c.persona.company)}</small></div><span class="online">${c.channel === "mail" ? "✉️" : "●"}</span></div>
      <div class="meters">${["Klarheit", "Diplomatie", "Souveränität"].map((m, i) => `<div class="meter" data-m="${i}"><small>${m}</small>${bar(0, ["indigo", "green", "amber"][i])}</div>`).join("")}</div></div>
      <p class="goal-line">🎯 ${esc(c.goal)}</p>
      <div class="chat" id="thread"></div><div class="chat-actions" id="acts"></div>`, { back: "#/praxis", title: c.title, cls: "chatview" });
    const thread = $("#thread"), acts = $("#acts");
    const add = (html) => { thread.insertAdjacentHTML("beforeend", html); };
    const clientMsg = (text, audio) => `<div class="msg client"><span class="avatar sm" style="background:${c.persona.color}">${c.persona.initials}</span><div class="bubble"><small>${esc(c.persona.name.split(" ")[0])} · ${time()}</small><p>${esc(text)}</p>${audio ? speakBtn(text, c.persona.voice, "in-bubble") : ""}</div></div>`;
    function meters() {
      $$(".meter").forEach((m, i) => { m.querySelector(".bar i").style.width = Math.round((st.meters[i] / (3 * Math.max(1, st.t))) * 100) + "%"; });
    }
    function turn() {
      const t = c.turns[st.t];
      if (!t) return end();
      add(clientMsg(t.client, true));
      const opts = Engine.shuffle(t.options.map((o, i) => ({ o, i })));
      acts.innerHTML = `<p class="instr">Deine Antwort · ${st.t + 1}/${c.turns.length}</p>${opts.map(({ o, i }) => `<button class="reply" data-i="${i}">${esc(o[0])}</button>`).join("")}`;
      $$(".reply", acts).forEach((b) => (b.onclick = () => choose(t.options[Number(b.dataset.i)])));
      if (st.t > 0) thread.lastElementChild.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function choose(o) {
      acts.innerHTML = "";
      const [text, score, m, reply, coach] = o;
      st.score += score; [0, 1, 2].forEach((i) => (st.meters[i] += Number(m[i])));
      st.t++;
      Store.activity(score === 3, "phrases", 25);
      if (score === 3) { Sfx.correct(); Store.addXp(5); } else if (score === 0) Sfx.wrong(); else Sfx.tap();
      add(`<div class="msg me"><div class="bubble"><small>Du · ${time()}</small><p>${esc(text)}</p></div></div>`);
      add(`<div class="msg client typing"><span class="avatar sm" style="background:${c.persona.color}">${c.persona.initials}</span><div class="bubble"><span class="dots"><i></i><i></i><i></i></span></div></div>`);
      thread.lastElementChild.scrollIntoView({ behavior: "smooth", block: "end" });
      setTimeout(() => {
        if (!document.body.contains(thread)) return;
        const ty = $(".typing", thread); if (ty) ty.remove();
        add(clientMsg(reply, false));
        add(`<div class="coach ${score === 3 ? "good" : score === 0 ? "bad" : "mid"}"><b>${score === 3 ? "✓ Souverän" : score === 0 ? "✗ Riskant" : "◐ Geht besser"}</b><p>${esc(coach)}</p></div>`);
        meters();
        acts.innerHTML = `<button class="btn primary big" data-go>${st.t < c.turns.length ? "Weiter" : "Auswertung"}</button>`;
        $("[data-go]", acts).onclick = () => { acts.innerHTML = ""; turn(); };
        thread.lastElementChild.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 600);
    }
    function end() {
      const p = pct(st.score, c.turns.length * 3);
      const s = S(); s.chats = s.chats || {}; const prev = s.chats[c.id] || { best: 0, runs: 0 };
      s.chats[c.id] = { best: Math.max(prev.best, p), runs: prev.runs + 1 }; Store.save();
      const stars = p >= 90 ? 3 : p >= 65 ? 2 : 1;
      Store.addXp(stars * 5); Sfx.complete(); if (stars >= 2) confetti();
      acts.innerHTML = `<div class="card result"><div class="stars">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div><h2>${p >= 90 ? "Kunde begeistert!" : p >= 65 ? "Gute Gesprächsführung" : "Da geht noch mehr"}</h2>
        <p class="muted">${p}% Gesprächsqualität · +${stars * 5} XP Bonus</p>
        ${["Klarheit", "Diplomatie", "Souveränität"].map((m, i) => `<div class="bd-row"><span>${m}</span><b>${pct(st.meters[i], 3 * c.turns.length)}%</b>${bar(pct(st.meters[i], 3 * c.turns.length), ["indigo", "green", "amber"][i])}</div>`).join("")}
        <div class="btn-row"><button class="btn secondary" data-again>Nochmal</button><a class="btn primary" href="#/praxis">Übersicht</a></div></div>`;
      $("[data-again]", acts).onclick = () => viewChat(id);
      acts.lastElementChild.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    turn();
  }

  function viewExam() {
    const last = S().exams[0];
    shell("praxis", `<div class="card exam-intro"><div class="big-ic indigo">🎓</div><h2>Prüfungssimulator</h2><p class="muted">Realistische B2/C1-Aufgaben: Fehler finden, Profi-Formulierungen, Collocations, Hörverstehen. Kein Feedback bis zum Ende – wie in der echten Prüfung.</p>
      ${last ? `<p class="last">Letztes Ergebnis: <b>${last.pct}%</b></p>` : ""}
      <button class="btn primary big" data-act="exam" data-n="10">Schnelltest · 10 Fragen · 6 Min</button>
      <button class="btn secondary big" data-act="exam" data-n="20">Vollprüfung · 20 Fragen · 12 Min</button></div>`, { back: "#/praxis", title: "Prüfungssimulator" });
  }

  /* ---------- Fortschritt ---------- */
  function radar() {
    const f = S().focus, keys = Object.keys(Engine.FOCUS), n = keys.length, cx = 160, cy = 132, R = 86;
    const pt = (i, r) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; };
    const vals = keys.map((k) => (f[k] && f[k].total ? f[k].correct / f[k].total : 0));
    const grid = [0.25, 0.5, 0.75, 1].map((l) => `<polygon points="${keys.map((_, i) => pt(i, R * l).join(",")).join(" ")}" class="rg"/>`).join("");
    const axes = keys.map((_, i) => `<line x1="${cx}" y1="${cy}" x2="${pt(i, R)[0]}" y2="${pt(i, R)[1]}" class="ra"/>`).join("");
    const poly = `<polygon points="${vals.map((v, i) => pt(i, R * Math.max(0.05, v)).join(",")).join(" ")}" class="rv"/>`;
    const dots = vals.map((v, i) => `<circle cx="${pt(i, R * Math.max(0.05, v))[0]}" cy="${pt(i, R * Math.max(0.05, v))[1]}" r="4" class="rd"/>`).join("");
    const labels = keys.map((k, i) => { const [x, y] = pt(i, R + 26); const v = f[k] && f[k].total ? Math.round(vals[i] * 100) + "%" : "–"; return `<text x="${x}" y="${y - 2}" text-anchor="middle" class="rl">${Engine.FOCUS[k]}</text><text x="${x}" y="${y + 13}" text-anchor="middle" class="rp">${v}</text>`; }).join("");
    const weakest = keys.filter((k) => f[k] && f[k].total >= 3).sort((a, b) => f[a].correct / f[a].total - f[b].correct / f[b].total)[0];
    return `<svg viewBox="0 0 320 270" class="radar" role="img" aria-label="Schwächen-Radar">${grid}${axes}${poly}${dots}${labels}</svg><p class="muted center">${weakest ? `Größtes Potenzial: <b>${Engine.FOCUS[weakest]}</b> – die Tages-Session trainiert das mit.` : "Nach ein paar Übungen siehst du hier dein Profil."}</p>`;
  }
  function viewProgress() {
    const s = S(), rank = Store.rankFor(), wk = weekMinutes(), max = Math.max(10, ...wk.map((d) => d.min));
    const t = Store.today();
    const total = Object.values(s.history).reduce((a, h) => a + (h.answers || 0), 0);
    const set = s.settings;
    shell("progress", `${top("Fortschritt", `${rank.emoji} ${rank.title}`, `<span class="chip xp">⚡ ${s.xp.total}</span>`)}
      <div class="mini-stats">
        <div class="ms amber"><b>🔥 ${s.streak.current}</b><small>Serie · Rekord ${s.streak.best}</small></div>
        <div class="ms sky"><b>❄️ ${s.freeze.available}</b><small>Streak-Schutz</small></div>
        <div class="ms green"><b>${total}</b><small>Antworten</small></div>
        <div class="ms indigo"><b>${Object.keys(s.lessons).filter((k) => /^L\d-\d$/.test(k) && s.lessons[k].completed).length}/40</b><small>Lektionen</small></div>
      </div>
      <div class="card"><div class="card-h"><h3>Diese Woche</h3><span class="muted">${wk.reduce((a, d) => a + d.min, 0)} Min · ${wk.filter((d) => d.answers).length}/7 Tage</span></div>
        <div class="week-bars">${wk.map((d, i) => `<div class="wb ${d.date === t ? "today" : ""}"><span class="wb-min">${d.min ? d.min + "′" : ""}</span><div class="wb-col"><i style="height:${d.answers ? Math.max(10, (d.min / max) * 100) : 0}%"></i></div><span class="wb-chk ${d.answers ? "on" : ""}">${d.answers ? ICON.check : d.frozen ? "❄️" : ""}</span><small>${DAYS[i]}</small></div>`).join("")}</div></div>
      <div class="card"><div class="card-h"><h3>Schwächen-Radar</h3><span class="muted">Trefferquote</span></div>${radar()}</div>
      <div class="card"><div class="card-h"><h3>Rang</h3><span class="muted">${rank.next ? `${rank.next.min - s.xp.total} XP bis ${rank.next.title}` : "Ziel erreicht"}</span></div>
        <div class="ladder">${Store.RANKS.map((r) => `<div class="rung ${s.xp.total >= r.min ? "on" : ""} ${r.title === rank.title ? "cur" : ""}"><span>${r.emoji}</span><small>${r.title}</small></div>`).join("")}</div>
        ${bar(rank.next ? pct(s.xp.total - rank.min, rank.next.min - rank.min) : 100, "amber")}</div>
      <div class="card boost-card"><div class="grow"><h3>🎯 Fehler-Boost</h3><p class="muted">${s.mistakes.length ? `${s.mistakes.length} gespeicherte Fehler. Zweimal richtig = erledigt.` : "Keine offenen Fehler – stark!"}</p></div>${s.mistakes.length ? '<a class="btn primary" href="#/boost">Starten</a>' : ""}</div>
      <div class="card settings"><h3>Einstellungen</h3>
        <div class="set"><div class="grow"><b>Töne</b><small>Sounds bei richtig, falsch und Combos</small></div><button class="toggle ${set.sound !== false ? "on" : ""}" data-set="sound" aria-label="Töne"></button></div>
        <div class="set"><div class="grow"><b>Fokus-Modus</b><small>5 Herzen pro Tag – Fehler kosten ein Herz</small></div><button class="toggle ${set.challenge ? "on" : ""}" data-set="challenge" aria-label="Fokus-Modus"></button></div>
        <div class="set"><div class="grow"><b>Schwierigkeit</b><small>Steuert die Tages-Session</small></div><div class="seg">${["B2", "B2+", "C1"].map((l) => `<button class="${(set.difficulty || "B2+") === l ? "on" : ""}" data-level="${l}">${l}</button>`).join("")}</div></div>
        <div class="set"><div class="grow"><b>Tagesziel</b><small>XP pro Tag</small></div><div class="seg">${[50, 80, 120].map((g) => `<button class="${(set.xpGoal || 80) === g ? "on" : ""}" data-goal="${g}">${g}</button>`).join("")}</div></div>
        <button class="linkbtn danger" data-reset>Fortschritt zurücksetzen</button>
      </div>`);
  }

  /* ---------- router ---------- */
  function route() {
    if (player) return;
    AudioEng.stop();
    const h = location.hash || "#/";
    const [, a, b] = h.split("/");
    if (!a) return viewToday();
    if (a === "training") return viewTraining();
    if (a === "praxis") return viewPraxis();
    if (a === "progress") return viewProgress();
    if (a === "blitz") return viewBlitz();
    if (a === "vocab") return b ? viewDeck(b) : viewVocab();
    if (a === "cards") return viewCards(b);
    if (a === "grammar") return b ? viewGrammarChapter(b) : viewGrammar();
    if (a === "listen") return viewListen();
    if (a === "chat") return viewChat(b);
    if (a === "case") return viewCase(b);
    if (a === "exam") return viewExam();
    if (a === "mode") { history.replaceState(null, "", "#/training"); viewTraining(); return runMode(b); }
    if (a === "boost") {
      history.replaceState(null, "", "#/progress"); viewProgress();
      const items = Engine.boost();
      if (!items.length) return toast("Keine offenen Fehler – stark!");
      return play({ title: "Schwachstellen-Boost", items, mode: "boost", onDone: () => { if (S().settings.challenge) Store.refillHearts(); } });
    }
    viewToday();
  }

  document.addEventListener("click", (e) => {
    const sp = e.target.closest("[data-speak]");
    if (sp) { e.preventDefault(); e.stopPropagation(); sp.classList.add("pulse"); setTimeout(() => sp.classList.remove("pulse"), 600); AudioEng.speak(sp.dataset.speak, { speaker: sp.dataset.speaker || undefined }); return; }
    const bk = e.target.closest("[data-back]"); if (bk) { location.hash = bk.dataset.back; return; }
    const ls = e.target.closest("[data-lesson]"); if (ls) { startLesson(ls.dataset.lesson); return; }
    const act = e.target.closest("[data-act]");
    if (act) {
      const k = act.dataset.act;
      if (k === "session") return startSession();
      if (k === "blitz-go") return runBlitz();
      if (k === "quiz") { const d = Engine.decks.find((x) => x.id === act.dataset.deck); return play({ title: "Quiz", items: Engine.shuffle(d.words).slice(0, 10).map((w, i) => Engine.resolve((i % 2 ? "vr:" : "v:") + w.id)), mode: "drill" }); }
      if (k === "gdrill") return runGrammar(act.dataset.g);
      if (k === "exam") { const n = Number(act.dataset.n); return play({ title: "Prüfung", items: Engine.exam().slice(0, n), mode: "exam", examMode: n, timeLimit: n === 10 ? 360 : 720 }); }
    }
    const set = e.target.closest("[data-set]");
    if (set) { const k = set.dataset.set; const cur = k === "sound" ? S().settings.sound !== false : !!S().settings[k]; Store.setSetting(k, !cur); if (k === "challenge" && !cur) Store.refillHearts(); return viewProgress(); }
    const lv = e.target.closest("[data-level]"); if (lv) { Store.setSetting("difficulty", lv.dataset.level); toast("Schwierigkeit: " + lv.dataset.level); return viewProgress(); }
    const gl = e.target.closest("[data-goal]"); if (gl) { Store.setSetting("xpGoal", Number(gl.dataset.goal)); return viewProgress(); }
    if (e.target.closest("[data-reset]")) { if (confirm("Wirklich den gesamten Fortschritt löschen?")) { localStorage.removeItem("be-trainer-v1"); location.hash = "#/"; location.reload(); } }
  });
  window.addEventListener("hashchange", route);

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    const hadController = !!navigator.serviceWorker.controller;
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing || !hadController) return;
      refreshing = true;
      window.location.reload();
    });
    navigator.serviceWorker.register("./sw.js", { scope: "./" }).then((reg) => { reg.update().catch(() => {}); }).catch(() => {});
  }
  route();
})();
