/* Pre-generated MP3 playback (reliable on iOS Safari / PWA).
   Web Speech API is only a fallback when a clip is missing. */
(function () {
  const AudioEng = {};
  let current = null;
  let unlocked = false;

  function locale() {
    try {
      const v = (Store.get().settings || {}).voice || "en-GB";
      return v === "en-US" ? "en-US" : "en-GB";
    } catch (err) {
      return "en-GB";
    }
  }

  function femaleVoice() {
    return locale() === "en-US" ? "en-US-JennyNeural" : "en-GB-SoniaNeural";
  }

  function maleVoice() {
    return locale() === "en-US" ? "en-US-GuyNeural" : "en-GB-RyanNeural";
  }

  function voiceForSpeaker(speaker) {
    if (!speaker || speaker === "Isa" || speaker === "Mail" || speaker === "female") {
      return femaleVoice();
    }
    return maleVoice();
  }

  function map() {
    return typeof AUDIO_MAP === "object" && AUDIO_MAP ? AUDIO_MAP : {};
  }

  function lookup(voice, text) {
    const m = map();
    const exact = m[voice + "|" + text];
    if (exact) return "./audio/" + exact;
    // Prefer the British clip if a US file was not generated
    let fallback = null;
    if (voice === "en-US-JennyNeural") fallback = m["en-GB-SoniaNeural|" + text];
    else if (voice === "en-US-GuyNeural") fallback = m["en-GB-RyanNeural|" + text];
    if (fallback) return "./audio/" + fallback;
    return null;
  }

  function unlock() {
    if (unlocked) return;
    unlocked = true;
    try {
      const a = new Audio("data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAABhgC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAAYYoRHD4AAAAAAD/+1DEAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+1DEAAADAAAD//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
      a.playsInline = true;
      a.muted = true;
      const p = a.play();
      if (p && p.catch) p.catch(function () {});
      setTimeout(function () { try { a.pause(); } catch (e) {} }, 300);
    } catch (err) { /* ignore */ }
  }

  function stop() {
    if (current) {
      try {
        current.onended = null;
        current.onerror = null;
        current.pause();
        current.removeAttribute("src");
        current.load();
      } catch (err) { /* ignore */ }
      current = null;
    }
    const syn = window.speechSynthesis;
    if (syn) {
      try { syn.cancel(); } catch (err) { /* ignore */ }
    }
  }

  function markPlaying(on) {
    document.querySelectorAll(".speaker.playing, .btn.playing").forEach(function (el) {
      el.classList.remove("playing");
    });
    if (on) {
      /* caller may add the class itself */
    }
  }

  function playUrl(url, opts) {
    opts = opts || {};
    stop();
    const a = new Audio(url);
    a.playsInline = true;
    a.preload = "auto";
    current = a;
    a.onended = function () {
      if (current === a) current = null;
      markPlaying(false);
      if (opts.onend) opts.onend();
    };
    a.onerror = function () {
      if (current === a) current = null;
      markPlaying(false);
      if (opts.onerror) opts.onerror();
    };
    const p = a.play();
    if (p && p.catch) {
      p.catch(function () {
        if (opts.onerror) opts.onerror();
      });
    }
    return a;
  }

  function speakFallback(text, opts) {
    opts = opts || {};
    const syn = window.speechSynthesis;
    if (!syn) return;
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    /* Do not cancel() in the same turn as speak() on iOS — it drops the utterance. */
    try {
      if (syn.paused) syn.resume();
    } catch (err) { /* ignore */ }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = locale() === "en-US" ? "en-US" : "en-GB";
    u.rate = 0.95;
    /* On iOS, assigning an unavailable voice object often yields silence. Use lang only. */
    if (!ios) {
      const want = locale() === "en-US" ? "en-US" : "en-GB";
      const voices = syn.getVoices() || [];
      const v = voices.find(function (x) { return x.lang && x.lang.indexOf(want) === 0 && /female|samantha|siri|jenny|sonia|google/i.test(x.name); })
        || voices.find(function (x) { return x.lang && x.lang.indexOf(want) === 0; });
      if (v) u.voice = v;
    }
    if (opts.onend) u.onend = opts.onend;
    syn.speak(u);
  }

  AudioEng.unlock = unlock;

  AudioEng.refresh = function () {
    const syn = window.speechSynthesis;
    if (syn && syn.getVoices) syn.getVoices();
  };

  AudioEng.stop = stop;

  AudioEng.hasClip = function (text, speaker) {
    return !!lookup(voiceForSpeaker(speaker), text);
  };

  AudioEng.speak = function (text, opts) {
    opts = opts || {};
    if (!text) return;
    unlock();
    const voice = opts.voice || voiceForSpeaker(opts.speaker);
    const url = lookup(voice, text);
    if (url) {
      playUrl(url, {
        onend: opts.onend,
        onerror: function () { speakFallback(text, opts); },
      });
      return;
    }
    speakFallback(text, opts);
  };

  AudioEng.speakLines = function (lines, opts) {
    opts = opts || {};
    if (!lines || !lines.length) return;
    unlock();
    const loc = locale();
    const full = (typeof AUDIO_FULL === "object" && AUDIO_FULL) ? AUDIO_FULL : {};
    let file = null;
    if (opts.caseId && full[opts.caseId]) {
      file = full[opts.caseId][loc] || full[opts.caseId]["en-GB"];
    }
    if (file) {
      if (opts.online) opts.online(0);
      playUrl("./audio/" + file, { onend: opts.onend });
      return;
    }
    /* Do not chain clips with setTimeout — iOS drops playback outside the user gesture.
       Speak the whole model as one fallback utterance instead. */
    const all = lines.map(function (ln) { return ln.text; }).filter(Boolean).join(" ");
    AudioEng.speak(all, { speaker: "Isa", onend: opts.onend });
  };

  /* Unlock on the first user gesture so later autoplay (rare) has a better chance. */
  document.addEventListener("touchstart", unlock, { once: true, passive: true });
  document.addEventListener("click", unlock, { once: true });

  if (window.speechSynthesis && speechSynthesis.addEventListener) {
    speechSynthesis.addEventListener("voiceschanged", function () { AudioEng.refresh(); });
  }

  window.AudioEng = AudioEng;
})();
