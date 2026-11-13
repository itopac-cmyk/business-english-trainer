/* Guided learning path, bite-sized lessons, and new tap exercises. */
const LearnUI = (() => {
  let H = null;

  function setup(helpers) {
    H = helpers;
  }

  function $app() {
    return document.getElementById("app");
  }

  function allLessons() {
    const list = [];
    (PATH.units || []).forEach((u, ui) => {
      (u.lessons || []).forEach((l, li) => list.push({ unit: u, lesson: l, ui, li }));
    });
    return list;
  }

  function findLesson(id) {
    return allLessons().find((x) => x.lesson.id === id) || null;
  }

  function currentTarget() {
    const list = allLessons();
    const first = list.find((x) => !((Store.lessonGet(x.lesson.id) || {}).completed));
    return first || list[list.length - 1] || null;
  }

  function crownCount() {
    let n = 0;
    allLessons().forEach((x) => { n += (Store.lessonGet(x.lesson.id) || {}).crowns || 0; });
    return n;
  }

  function renderStars(n) {
    const got = n || 0;
    return `<span class="crowns" aria-label="${got} von 3 Sternen">${[1, 2, 3].map((i) =>
      `<i class="${i <= got ? "on" : ""}">★</i>`).join("")}</span>`;
  }

  function toast(msg) {
    let el = document.getElementById("be-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "be-toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.remove("show");
    void el.offsetWidth;
    el.classList.add("show");
  }

  /* ---------- HOME / PATH ---------- */
  function renderHome() {
    Store.ensureQuests();
    const st = Store.get();
    const rank = Store.rankFor(st.xp.total || 0);
    const goal = st.settings.xpGoal || 50;
    const todayXp = st.xp.today || 0;
    const goalPct = Math.min(100, (todayXp / goal) * 100);
    const hideInstall = H.isStandalone() || H.session.hideInstall || localStorage.getItem("be-hide-install") === "1";
    const install = !hideInstall && H.isIOS() ? `
      <div class="install-hint" id="install-hint">
        <button type="button" id="hide-install" aria-label="Hinweis schließen">✕</button>
        <strong>Auf den Home-Bildschirm</strong>
        In Safari auf Teilen tippen und „Zum Home-Bildschirm“ wählen. Danach startet die App wie eine normale App.
      </div>` : (!hideInstall && !H.isStandalone() ? `
      <div class="install-hint" id="install-hint">
        <button type="button" id="hide-install" aria-label="Hinweis schließen">✕</button>
        <strong>Als App nutzen</strong>
        Im Browser das Menü öffnen und die Seite auf dem Startbildschirm bzw. als App installieren.
      </div>` : "");

    const quests = (st.quests && st.quests.items) || [];
    const mistakes = st.mistakes.length;
    const target = currentTarget();
    const nextId = target ? target.lesson.id : "";

    $app().innerHTML = `
      ${H.topbar("Business English", { noback: true, sub: "Lernpfad", right: `<span class="hud-pill">${st.streak.current || 0} 🔥</span>` })}
      <div class="page path-page">
        <p class="greet">${H.greeting()}, ${H.esc(CONTENT.userName)}</p>
        <div class="rank-row">
          <span class="rank-emoji">${rank.emoji}</span>
          <div class="rank-meta">
            <strong>${H.esc(rank.title)}</strong>
            <p>${rank.next ? `${(st.xp.total || 0).toLocaleString("de-DE")} XP · noch ${rank.next.min - (st.xp.total || 0)} XP bis ${H.esc(rank.next.title)}` : `${(st.xp.total || 0).toLocaleString("de-DE")} XP`}</p>
          </div>
        </div>
        <div class="card goal-card">
          <div class="goal-head"><strong>Tagesziel</strong><span>${todayXp} / ${goal} XP</span></div>
          ${H.pctBar(goalPct, todayXp >= goal ? "gold" : "")}
        </div>
        ${install}
        <p class="section-title">Tägliche Quests</p>
        <div class="quest-list">
          ${quests.map((q) => `
            <div class="quest-row ${q.done ? "done" : ""}">
              <div class="q-check">${q.done ? "✓" : ""}</div>
              <div class="q-body">
                <strong>${H.esc(q.title)}</strong>
                <p>${q.progress || 0} / ${q.target} · +${q.xp} XP</p>
                ${H.pctBar(((q.progress || 0) / q.target) * 100, q.done ? "gold" : "")}
              </div>
            </div>`).join("")}
        </div>
        ${mistakes ? `<a class="nav-row card boost-card" href="#/boost">
          <div class="avatar" style="background:var(--danger-soft)">🔧</div>
          <div class="meta"><h3>Schwachstellen-Boost</h3><p>Fehler ausbügeln${st.settings.challenge && Store.heartsLeft() < 5 ? " und Herzen zurückholen" : ""} · ${mistakes} offen</p></div>
          <span class="badge danger">${mistakes}</span><span class="chev">›</span>
        </a>` : ""}
        <div class="path">
          ${PATH.units.map((unit) => {
            const recs = unit.lessons.map((l) => Store.lessonGet(l.id) || {});
            const doneN = recs.filter((r) => r.completed).length;
            return `
              <section class="path-unit">
                <div class="unit-banner" style="--unit:${H.esc(unit.color)}">
                  <span class="unit-emoji">${unit.emoji}</span>
                  <div>
                    <p class="unit-kicker">Einheit ${unit.id.slice(1)}</p>
                    <h2>${H.esc(unit.title)}</h2>
                    <p>${H.esc(unit.blurb)}</p>
                    <p class="unit-progress">${doneN} / ${unit.lessons.length} Lektionen · ${recs.reduce((a, r) => a + (r.crowns || 0), 0)} ★</p>
                  </div>
                </div>
                <div class="path-steps">
                  ${unit.lessons.map((l, i) => {
                    const rec = Store.lessonGet(l.id) || {};
                    const isCurrent = l.id === nextId;
                    const cls = rec.completed ? "done" : isCurrent ? "current" : "open";
                    return `
                      <div class="path-step ${i % 2 ? "right" : "left"}">
                        <button type="button" class="path-node ${cls}" data-lesson="${H.esc(l.id)}" aria-label="${H.esc(l.title)}">
                          <span class="node-face">${rec.completed ? "✓" : l.emoji}</span>
                        </button>
                        <div class="node-meta">
                          <strong>${H.esc(l.title)}</strong>
                          ${renderStars(rec.crowns || 0)}
                          <p>${(l.items || []).length} Aufgaben</p>
                        </div>
                      </div>`;
                  }).join("")}
                </div>
              </section>`;
          }).join("")}
        </div>
        <p class="footer-note">${crownCount()} Sterne insgesamt · ${H.overallProgress()}&nbsp;% in den Themen</p>
      </div>
      ${H.tabbar("home")}`;

    const hide = document.getElementById("hide-install");
    if (hide) hide.addEventListener("click", () => {
      localStorage.setItem("be-hide-install", "1");
      H.session.hideInstall = true;
      const el = document.getElementById("install-hint");
      if (el) el.remove();
    });
    $app().querySelectorAll("[data-lesson]").forEach((btn) => {
      btn.addEventListener("click", () => openLesson(btn.getAttribute("data-lesson")));
    });
  }

  /* ---------- LESSON FLOW ---------- */
  function openLesson(id) {
    const found = findLesson(id);
    if (!found) return renderHome();
    if (Store.heartsEnabled() && Store.heartsLeft() <= 0) {
      /* still allow entry, but we'll show a hint */
    }
    H.session.lesson = {
      id,
      unit: found.unit,
      lesson: found.lesson,
      items: found.lesson.items.slice(),
      index: 0,
      locked: false,
      last: null,
      correct: 0,
      combo: 0,
      comboMax: 0,
      xp: 0,
      build: null,
      match: null,
      startedAt: Date.now(),
    };
    location.hash = "#/lesson/" + id;
    renderLesson();
  }

  function playItemAudio(ex) {
    const text = ex && (ex.audio || (ex.type === "build" || ex.type === "listen-build" ? (ex.accept && ex.accept[0]) : null));
    if (text) AudioEng.speak(text);
  }

  function itemOk(ex, user) {
    if (ex.type === "build" || ex.type === "listen-build") {
      const built = Array.isArray(user) ? user.join(" ") : String(user || "");
      const accept = (ex.accept || []).concat([(ex.tokens || []).join(" ")]);
      return accept.map(H.norm).includes(H.norm(built));
    }
    if (ex.type === "listen") return Number(user) === Number(ex.answer);
    if (ex.type === "match") return !!(user && user.complete);
    return H.isCorrect(ex, user);
  }

  function itemAnswerLabel(ex) {
    if (ex.type === "build" || ex.type === "listen-build") return (ex.tokens || []).join(" ");
    if (ex.type === "listen") return (ex.options || [])[ex.answer] || "";
    if (ex.type === "match") return (ex.pairs || []).map((p) => p.left + " – " + p.right).join("; ");
    return H.correctLabel(ex);
  }

  function awardFor(ok, combo) {
    if (!ok) return { xp: 0, bonus: 0, comboMsg: "" };
    let xp = 10;
    let bonus = 0;
    let comboMsg = "";
    if (combo === 3) { bonus = 5; comboMsg = "3 in Folge! +5 Bonus-XP"; }
    if (combo === 5) { bonus = 10; comboMsg = "5 in Folge! +10 Bonus-XP"; }
    if (combo === 6) { bonus = 10; comboMsg = "Volle Serie! +10 Bonus-XP"; }
    xp += bonus;
    return { xp, bonus, comboMsg };
  }

  function recordResult(ex, user, ok) {
    const s = H.session.lesson;
    if (ok) {
      s.correct += 1;
      s.combo += 1;
      if (s.combo > s.comboMax) s.comboMax = s.combo;
      const aw = awardFor(true, s.combo);
      s.xp += Store.addXp(aw.xp);
      if (aw.comboMsg) {
        Sfx.combo();
        toast(aw.comboMsg);
      } else {
        Sfx.correct();
      }
      if (ex.vocabId) Store.vocabRecord(ex.vocabId, true);
      if (ex.type === "listen" || ex.type === "listen-build") Store.bumpQuest("listen", 1);
    } else {
      s.combo = 0;
      Sfx.wrong();
      if (Store.heartsEnabled()) Store.loseHeart();
      if (ex.vocabId) Store.vocabRecord(ex.vocabId, false);
      Store.addMistake({
        id: "p:" + ex.id,
        type: ex.type,
        area: ex.area,
        prompt: ex.promptDe || ex.prompt,
        options: ex.options,
        accept: ex.accept,
        tokens: ex.tokens,
        distractors: ex.distractors,
        pairs: ex.pairs,
        audio: ex.audio,
        answer: ex.answer,
        answerLabel: itemAnswerLabel(ex),
        explain: ex.explain,
        vocabId: ex.vocabId,
        user,
      });
    }
  }

  function renderLesson() {
    const s = H.session.lesson;
    if (!s) return renderHome();
    if (s.index >= s.items.length) return s.isBoost ? renderBoostDone() : renderLessonDone();
    const ex = s.items[s.index];
    const locked = s.locked;
    const last = s.last;
    const hearts = Store.heartsEnabled() ? Store.heartsLeft() : null;
    const pct = ((s.index + (locked ? 1 : 0)) / s.items.length) * 100;

    let body = "";
    if (ex.type === "mc" || ex.type === "listen") {
      body = renderChoices(ex, locked, last);
    } else if (ex.type === "gap") {
      body = renderGap(ex, locked, last);
    } else if (ex.type === "build" || ex.type === "listen-build") {
      body = renderBuild(ex, locked, last, s);
    } else if (ex.type === "match") {
      body = renderMatch(ex, locked, last, s);
    } else if (ex.type === "order") {
      body = `<p class="date-line">Diese Aufgabe öffnet sich im klassischen Übungsmodus.</p>`;
    }

    const listen = ex.type === "listen" || ex.type === "listen-build" || ex.audio;
    let fb = "";
    if (locked && last) {
      const noHearts = Store.heartsEnabled() && Store.heartsLeft() <= 0;
      fb = `<div class="feedback ${last.ok ? "ok" : "bad"}">
        <strong>${last.ok ? "Richtig" : "Nicht ganz"}</strong>
        ${last.ok ? "" : `Richtig ist: ${H.esc(itemAnswerLabel(ex))}<br>`}
        ${H.esc(ex.explain || "").replace(/\n/g, "<br>")}
      </div>
      ${noHearts && !last.ok ? `<div class="hearts-empty">Keine Herzen mehr im Fokus-Modus. Du kannst trotzdem weitermachen, den Modus in den Einstellungen ausschalten oder Herzen in der Fehler-Übung zurückholen.</div>
        <div class="btn-row"><button class="btn secondary" data-go="#/boost">Herzen zurückholen</button></div>` : ""}
      <div class="btn-row"><button class="btn" id="next-ex">Weiter</button></div>`;
    }

    $app().innerHTML = `
      ${H.topbar(s.lesson.title, { back: "#/", sub: s.unit.title, right: `${hearts != null ? `<span class="hud-pill hearts">❤ ${hearts}</span>` : ""}${s.combo >= 2 ? `<span class="hud-pill combo">${s.combo} in Folge</span>` : ""}` })}
      <div class="page lesson-page">
        <div class="lesson-progress">${H.pctBar(pct)}<span>Frage ${s.index + 1} von ${s.items.length}</span></div>
        <div class="q-card">
          <div class="q-meta"><span>${labelForType(ex.type)}</span><span>${H.esc(H.areaName(ex.area))}</span></div>
          <p class="q-prompt">${H.blankify(ex.prompt || "")}</p>
          ${ex.promptDe ? `<p class="build-de">${H.esc(ex.promptDe)}</p>` : ""}
          ${listen ? `<div class="listen-play"><button type="button" class="speaker lg" id="play-item" aria-label="Anhören">${H.I.speaker}</button></div>` : ""}
          ${body}
          ${fb}
        </div>
      </div>
      ${H.tabbar("home")}`;

    bindLesson(ex, locked);
    if (!locked && (ex.type === "listen" || ex.type === "listen-build")) {
      playItemAudio(ex);
    }
  }

  function labelForType(t) {
    if (t === "build") return "Satz-Baukasten";
    if (t === "listen" || t === "listen-build") return "Hörverstehen";
    if (t === "match") return "Wortpaare";
    if (t === "gap") return "Lücke";
    return "Aufgabe";
  }

  function renderChoices(ex, locked, last) {
    return `<div class="choices">${(ex.options || []).map((opt, i) => {
      let cls = "choice";
      if (locked && last) {
        if (i === ex.answer) cls += " correct";
        else if (Number(last.user) === i && !last.ok) cls += " wrong";
      }
      return `<button class="${cls}" data-choice="${i}" ${locked ? "disabled" : ""}><span class="key">${String.fromCharCode(65 + i)}</span>${H.esc(opt)}</button>`;
    }).join("")}</div>`;
  }

  function renderGap(ex, locked, last) {
    const hasChips = Array.isArray(ex.options) && ex.options.length;
    if (hasChips) {
      return `<div class="chip-row">${ex.options.map((opt) => {
        let c = "chip";
        if (locked && last) {
          const okHit = (ex.accept || []).map(H.norm).includes(H.norm(opt));
          if (okHit) c += " correct";
          else if (H.norm(last.user) === H.norm(opt) && !last.ok) c += " wrong";
        }
        return `<button type="button" class="${c}" data-chip="${H.esc(opt)}" ${locked ? "disabled" : ""}>${H.esc(opt)}</button>`;
      }).join("")}</div>`;
    }
    return `<input class="gap-input" id="gap" type="text" lang="en" autocapitalize="off" autocomplete="off" value="${H.esc((last && last.user) || "")}" ${locked ? "disabled" : ""}>
      ${locked ? "" : `<div class="btn-row"><button class="btn" id="check-gap">Prüfen</button></div>`}`;
  }

  function ensureBuild(ex, s) {
    if (!s.build || s.build.exId !== ex.id) {
      const tiles = (ex.tokens || []).map((t, i) => ({ id: "t" + i, text: t }))
        .concat((ex.distractors || []).map((t, i) => ({ id: "d" + i, text: t })));
      s.build = { exId: ex.id, bank: H.shuffle(tiles), placed: [] };
    }
    return s.build;
  }

  function renderBuild(ex, locked, last, s) {
    const st = locked && last && last.placed ? { placed: last.placed, bank: last.bank || [] } : ensureBuild(ex, s);
    return `
      <div class="build-tray ${locked ? (last && last.ok ? "ok" : "bad") : ""}" id="build-tray">
        ${st.placed.length ? st.placed.map((t, i) =>
          `<button type="button" class="chip placed" data-unplace="${i}" ${locked ? "disabled" : ""}>${H.esc(t.text)}</button>`
        ).join("") : `<span class="tray-hint">Tippe die Wörter in der richtigen Reihenfolge an.</span>`}
      </div>
      ${locked ? "" : `<div class="chip-row build-bank">${st.bank.map((t, i) =>
        `<button type="button" class="chip" data-place="${i}">${H.esc(t.text)}</button>`
      ).join("")}</div>
      <div class="btn-row"><button class="btn" id="check-build" ${st.placed.length !== (ex.tokens || []).length ? "disabled" : ""}>Prüfen</button></div>`}`;
  }

  function ensureMatch(ex, s) {
    if (!s.match || s.match.exId !== ex.id) {
      const n = (ex.pairs || []).length;
      let left = H.shuffle(ex.pairs.map((_, i) => i));
      let right = H.shuffle(ex.pairs.map((_, i) => i));
      if (JSON.stringify(left) === JSON.stringify(right)) right = H.shuffle(right);
      s.match = { exId: ex.id, left, right, selL: null, selR: null, cleared: [], mistakes: 0, done: false };
    }
    return s.match;
  }

  function renderMatch(ex, locked, last, s) {
    const st = locked && last && last.match ? last.match : ensureMatch(ex, s);
    const pairs = ex.pairs || [];
    const side = (keys, which) => keys.map((idx) => {
      const p = pairs[idx];
      const cleared = st.cleared.indexOf(idx) !== -1;
      const sel = which === "L" ? st.selL === idx : st.selR === idx;
      const label = which === "L" ? p.left : p.right;
      return `<button type="button" class="match-item ${cleared ? "cleared" : ""} ${sel ? "selected" : ""}" data-match="${which}:${idx}" ${locked || cleared ? "disabled" : ""}>${H.esc(label)}</button>`;
    }).join("");
    return `<div class="match-board">
      <div class="match-col">${side(st.left, "L")}</div>
      <div class="match-col">${side(st.right, "R")}</div>
    </div>
    <p class="order-hint">${st.cleared.length} / ${pairs.length} Paare</p>`;
  }

  function finishItem(ex, user, extra) {
    const s = H.session.lesson;
    const ok = itemOk(ex, user);
    recordResult(ex, user, ok);
    s.locked = true;
    s.last = { user, ok, ...(extra || {}) };
    renderLesson();
  }

  function bindLesson(ex, locked) {
    const s = H.session.lesson;
    const play = document.getElementById("play-item");
    if (play) play.addEventListener("click", (e) => { e.preventDefault(); playItemAudio(ex); });

    if (!locked && (ex.type === "mc" || ex.type === "listen")) {
      $app().querySelectorAll("[data-choice]").forEach((btn) => {
        btn.addEventListener("click", () => finishItem(ex, Number(btn.getAttribute("data-choice"))));
      });
    }
    if (!locked && ex.type === "gap") {
      $app().querySelectorAll("[data-chip]").forEach((btn) => {
        btn.addEventListener("click", () => finishItem(ex, btn.getAttribute("data-chip")));
      });
      const input = document.getElementById("gap");
      const chk = document.getElementById("check-gap");
      if (input && chk) chk.addEventListener("click", () => finishItem(ex, input.value));
    }
    if (!locked && (ex.type === "build" || ex.type === "listen-build")) {
      $app().querySelectorAll("[data-place]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const i = Number(btn.getAttribute("data-place"));
          const tile = s.build.bank.splice(i, 1)[0];
          s.build.placed.push(tile);
          Sfx.tap();
          renderLesson();
        });
      });
      $app().querySelectorAll("[data-unplace]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const i = Number(btn.getAttribute("data-unplace"));
          const tile = s.build.placed.splice(i, 1)[0];
          s.build.bank.push(tile);
          Sfx.tap();
          renderLesson();
        });
      });
      const chk = document.getElementById("check-build");
      if (chk) chk.addEventListener("click", () => {
        const user = s.build.placed.map((t) => t.text);
        finishItem(ex, user, { placed: s.build.placed.slice(), bank: s.build.bank.slice() });
      });
    }
    if (!locked && ex.type === "match") {
      $app().querySelectorAll("[data-match]").forEach((btn) => {
        btn.addEventListener("click", () => onMatchTap(ex, btn.getAttribute("data-match")));
      });
    }
    const next = document.getElementById("next-ex");
    if (next) next.addEventListener("click", () => {
      s.locked = false;
      s.last = null;
      s.build = null;
      s.match = null;
      s.index += 1;
      renderLesson();
    });
  }

  function onMatchTap(ex, raw) {
    const s = H.session.lesson;
    const st = s.match;
    const [side, idxS] = raw.split(":");
    const idx = Number(idxS);
    if (st.cleared.indexOf(idx) !== -1) return;
    if (side === "L") st.selL = st.selL === idx ? null : idx;
    else st.selR = st.selR === idx ? null : idx;
    if (st.selL != null && st.selR != null) {
      if (st.selL === st.selR) {
        st.cleared.push(st.selL);
        Sfx.correct();
        st.selL = st.selR = null;
        if (st.cleared.length === (ex.pairs || []).length) {
          st.done = true;
          finishItem(ex, { complete: true, mistakes: st.mistakes }, { match: { ...st } });
          return;
        }
      } else {
        st.mistakes += 1;
        Sfx.wrong();
        st.selL = st.selR = null;
      }
    } else {
      Sfx.tap();
    }
    renderLesson();
  }

  function renderLessonDone() {
    const s = H.session.lesson;
    const total = s.items.length;
    const pct = Math.round((s.correct / total) * 100);
    let crowns = 0;
    if (pct >= 50) crowns = 1;
    if (pct >= 80) crowns = 2;
    if (pct === 100) crowns = 3;
    const first = !((Store.lessonGet(s.id) || {}).completed);
    Store.lessonSave(s.id, {
      completed: true,
      crowns,
      best: pct,
      attempts: ((Store.lessonGet(s.id) || {}).attempts || 0) + 1,
    });
    if (first) Store.bumpQuest("lesson", 1);
    if (pct >= 80) Store.bumpQuest("score80", 1);
    const bonus = pct === 100 ? 25 : pct >= 80 ? 15 : 0;
    if (bonus) s.xp += Store.addXp(bonus);
    Sfx.complete();

    $app().innerHTML = `
      ${H.topbar("Lektion geschafft", { back: "#/" })}
      <div class="page session-end lesson-done">
        <p class="big">${crowns ? "★".repeat(crowns) : "Gut geübt"}</p>
        ${renderStars(crowns)}
        <p class="score-line">${s.correct} / ${total} richtig · ${pct}&nbsp;%</p>
        <p class="xp-gain">+${s.xp} XP${bonus ? ` inkl. Abschlussbonus` : ""}</p>
        <p class="date-line">${pct === 100 ? "Saubere Arbeit – alle Aufgaben auf Anhieb." : pct >= 80 ? "Starkes Ergebnis. Die Sterne kannst du beim Wiederholen noch aufwerten." : "Schau in den Schwachstellen-Boost, dann sitzt es."}</p>
        <div class="btn-row">
          <button class="btn" data-go="#/">Zum Lernpfad</button>
          <button class="btn secondary" id="retry-lesson">Nochmal</button>
        </div>
      </div>
      ${H.tabbar("home")}`;
    const retry = document.getElementById("retry-lesson");
    if (retry) retry.addEventListener("click", () => openLesson(s.id));
  }

  /* ---------- SCHWACHSTELLEN-BOOST ---------- */
  function startBoost() {
    const mistakes = Store.get().mistakes.slice();
    let queue = mistakes.map((m) => ({ ...m, fromMistake: true }));
    if (queue.length < 6) {
      const weak = [];
      (CONTENT.packs || []).forEach((p) => {
        p.words.forEach((w) => {
          const r = Store.vocabGet(w.id);
          if (r && (r.wrong || 0) > (r.correct || 0)) weak.push(w);
        });
      });
      H.shuffle(weak).slice(0, 6 - queue.length).forEach((w) => {
        queue.push({
          id: "boost-v-" + w.id,
          type: "mc",
          area: "vocab",
          kind: "vocab",
          prompt: `Was bedeutet „${w.term}“?`,
          options: [w.de],
          answer: 0,
          audio: w.term,
          vocabId: w.id,
          explain: w.de,
          fromMistake: false,
        });
        /* pad options */
      });
      queue.forEach((ex) => {
        if (ex.type === "mc" && ex.options && ex.options.length < 4 && ex.vocabId) {
          const w = findWord(ex.vocabId);
          const pack = (CONTENT.packs || []).find((p) => p.words.some((x) => x.id === ex.vocabId));
          const opts = [ex.options[0]];
          H.shuffle((pack && pack.words) || []).forEach((x) => {
            if (x.de && opts.indexOf(x.de) === -1) opts.push(x.de);
          });
          ex.options = opts.slice(0, 4);
          ex.answer = 0;
        }
      });
    }
    if (!queue.length) {
      $app().innerHTML = `
        ${H.topbar("Schwachstellen-Boost", { back: "#/" })}
        <div class="page session-end">
          <p class="big">Alles klar</p>
          <p class="date-line">Gerade liegen keine offenen Fehler vor. Komm später wieder, oder starte eine Lektion.</p>
          <button class="btn" data-go="#/">Zum Lernpfad</button>
        </div>
        ${H.tabbar("home")}`;
      return;
    }
    queue = H.shuffle(queue).slice(0, 8);
    /* Map mistakes that are new types into lesson-compatible items */
    H.session.lesson = {
      id: "boost",
      unit: { title: "Schwachstellen-Boost", id: "boost" },
      lesson: { id: "boost", title: "Fehler ausbügeln", items: queue },
      items: queue,
      index: 0,
      locked: false,
      last: null,
      correct: 0,
      combo: 0,
      comboMax: 0,
      xp: 0,
      build: null,
      match: null,
      startedAt: Date.now(),
      isBoost: true,
    };
    location.hash = "#/boost/run";
    renderLesson();
  }

  function findWord(id) {
    for (const p of CONTENT.packs || []) {
      const w = p.words.find((x) => x.id === id);
      if (w) return w;
    }
    return null;
  }


  return {
    setup,
    renderHome,
    openLesson,
    startBoost,
    findLesson,
    renderLesson,
  };
})();
