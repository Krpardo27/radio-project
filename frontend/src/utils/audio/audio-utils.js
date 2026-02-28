export const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

export const normalizeUrl = (url) => {
  if (!url) return null;

  let fixed = url
    .trim()
    .replace(/^hhttps/, "https")
    .replace(/\n/g, "");

  try {
    new URL(fixed);
    return fixed;
  } catch {
    return null;
  }
};

export const waitForAudio = (audio, timeout = 8000) =>
  new Promise((resolve, reject) => {
    const ok = () => cleanup(resolve);
    const err = () => cleanup(() => reject(new Error("audio error")));
    const to = setTimeout(
      () => cleanup(() => reject(new Error("timeout"))),
      timeout,
    );

    function cleanup(fn) {
      clearTimeout(to);
      audio.removeEventListener("canplay", ok);
      audio.removeEventListener("error", err);
      fn();
    }

    audio.addEventListener("canplay", ok);
    audio.addEventListener("error", err);
  });

export const fade = (audio, to = 1, duration = 250) =>
  new Promise((resolve) => {
    if (!audio) return resolve();

    const from = audio.volume ?? 1;
    const steps = Math.max(1, Math.floor(duration / 40));
    const delta = (to - from) / steps;
    let i = 0;

    const interval = setInterval(() => {
      i++;

      audio.volume = clamp(audio.volume + delta);

      if (i >= steps || Math.abs(audio.volume - to) < 0.01) {
        audio.volume = clamp(to);
        clearInterval(interval);
        resolve();
      }
    }, 40);
  });

export const crossfade = (from, to, targetVolume = 0.6, duration = 800) =>
  new Promise((resolve) => {
    if (!from || !to) return resolve();

    const steps = Math.max(1, Math.floor(duration / 40));
    const delta = targetVolume / steps;
    let i = 0;

    to.volume = 0;

    const interval = setInterval(() => {
      i++;

      from.volume = clamp(from.volume - delta);
      to.volume = clamp(to.volume + delta);

      if (i >= steps) {
        from.pause();
        from.volume = clamp(targetVolume);
        clearInterval(interval);
        resolve();
      }
    }, 40);
  });
