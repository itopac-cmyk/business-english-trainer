/* Speech synthesis helper – British English by default */
const AudioEng = (() => {
  let voices = [];
  let ready = false;

  function refresh() {
    voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    ready = voices.length > 0;
    return voices;
  }

  if (typeof speechSynthesis !== "undefined") {
    refresh();
    speechSynthesis.addEventListener("voiceschanged", refresh);
  }

  function lang() {
    return (Store.get().settings && Store.get().settings.voice) || "en-GB";
  }

  function pick(preferredLang, hint) {
    refresh();
    const want = (preferredLang || lang()).toLowerCase();
    const list = voices.filter((v) => (v.lang || "").toLowerCase().startsWith(want.slice(0, 2)));
    const exact = list.filter((v) => (v.lang || "").toLowerCase().startsWith(want.toLowerCase()));
    const pool = exact.length ? exact : list;
    if (!pool.length) return null;
    if (hint === "alt") {
      return pool.find((v) => /female|samantha|kate|susan|zira|fiona|victoria|moira/i.test(v.name)) || pool[pool.length - 1];
    }
    return (
      pool.find((v) => /daniel|arthur|george|david|male|rishi|oliver/i.test(v.name)) ||
      pool[0]
    );
  }

  let current = [];

  function stop() {
    current = [];
    if (window.speechSynthesis) speechSynthesis.cancel();
  }

  function speak(text, opts) {
    opts = opts || {};
    if (!text || !window.speechSynthesis) {
      if (opts.onend) opts.onend();
      return;
    }
    if (!opts.queue) stop();
    const u = new SpeechSynthesisUtterance(text);
    const useLang = opts.lang || lang();
    u.lang = useLang;
    const voice = pick(useLang, opts.voiceHint);
    if (voice) u.voice = voice;
    u.rate = opts.rate || 0.95;
    u.pitch = opts.pitch || 1;
    u.onend = () => {
      if (opts.onend) opts.onend();
    };
    u.onerror = () => {
      if (opts.onend) opts.onend();
    };
    current.push(u);
    speechSynthesis.speak(u);
  }

  function speakLines(lines, handlers) {
    handlers = handlers || {};
    stop();
    let i = 0;
    const speakers = [];
    function next() {
      if (i >= lines.length) {
        if (handlers.onend) handlers.onend();
        return;
      }
      const line = lines[i];
      if (handlers.online) handlers.online(i, line);
      const speaker = line.speaker || "";
      let hint = "main";
      let pitch = 1;
      if (speaker) {
        if (!speakers.includes(speaker)) speakers.push(speaker);
        const idx = speakers.indexOf(speaker);
        hint = idx === 0 ? "main" : "alt";
        pitch = idx === 0 ? 1 : 1.08;
      }
      speak(line.text, {
        queue: true,
        voiceHint: hint,
        pitch,
        rate: 0.95,
        onend: () => {
          i += 1;
          setTimeout(next, 280);
        },
      });
    }
    next();
  }

  function available() {
    return typeof speechSynthesis !== "undefined";
  }

  return { speak, speakLines, stop, lang, available, refresh };
})();
