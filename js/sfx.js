/* Subtle synthesized UI sounds via Web Audio API. No external assets. */
const Sfx = (() => {
  let ctx = null;
  let unlocked = false;

  function enabled() {
    try {
      return (Store.get().settings || {}).sound !== false;
    } catch (err) {
      return true;
    }
  }

  function ac() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctx) ctx = new AC();
    if (ctx.state === "suspended") {
      const p = ctx.resume();
      if (p && p.catch) p.catch(function () {});
    }
    return ctx;
  }

  function unlock() {
    if (unlocked) {
      ac();
      return;
    }
    const c = ac();
    if (!c) return;
    unlocked = true;
    try {
      const b = c.createBuffer(1, 1, c.sampleRate);
      const src = c.createBufferSource();
      src.buffer = b;
      src.connect(c.destination);
      src.start(0);
    } catch (err) { /* ignore */ }
  }

  function tone(freq, start, dur, type, gain, freq2) {
    const c = ac();
    if (!c || !enabled()) return;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, c.currentTime + start);
    if (freq2) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq2), c.currentTime + start + dur);
    const peak = gain == null ? 0.07 : gain;
    g.gain.setValueAtTime(0.0001, c.currentTime + start);
    g.gain.exponentialRampToValueAtTime(peak, c.currentTime + start + 0.018);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + start + dur);
    osc.connect(g);
    g.connect(c.destination);
    osc.start(c.currentTime + start);
    osc.stop(c.currentTime + start + dur + 0.02);
  }

  function correct() {
    unlock();
    tone(523.25, 0, 0.11, "sine", 0.07);
    tone(783.99, 0.08, 0.16, "sine", 0.06);
  }

  function wrong() {
    unlock();
    tone(196, 0, 0.22, "triangle", 0.05, 130);
  }

  function combo() {
    unlock();
    tone(659.25, 0, 0.09, "sine", 0.07);
    tone(830.61, 0.08, 0.1, "sine", 0.07);
    tone(1046.5, 0.16, 0.16, "sine", 0.06);
  }

  function complete() {
    unlock();
    tone(523.25, 0, 0.12, "sine", 0.08);
    tone(659.25, 0.11, 0.12, "sine", 0.08);
    tone(783.99, 0.22, 0.12, "sine", 0.08);
    tone(1046.5, 0.34, 0.28, "sine", 0.09);
  }

  function tap() {
    unlock();
    tone(880, 0, 0.04, "sine", 0.03);
  }

  document.addEventListener("touchstart", unlock, { once: true, passive: true });
  document.addEventListener("click", unlock, { once: true });

  return { unlock, correct, wrong, combo, complete, tap, enabled };
})();
