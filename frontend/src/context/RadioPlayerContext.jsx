import { createContext, useEffect, useRef, useState } from "react";
import {
  clamp,
  fade,
  normalizeUrl,
  waitForAudio,
} from "../utils/audio/audio-utils";

export const RadioPlayerContext = createContext();

export const RadioPlayerProvider = ({ children }) => {
  const audioRef = useRef(null);
  const loadingStart = useRef(null);
  const changeId = useRef(0);

  const [station, setStation] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openPanel, setOpenPanel] = useState(false);
  const [volume, setVolume] = useState(
    Number(localStorage.getItem("radio-volume")) || 0.6,
  );

  const [stations, setStations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const MIN_LOADING_TIME = 500;

  const startLoading = () => {
    if (!audioRef.current?.src) return;
    loadingStart.current = Date.now();
    setIsLoading(true);
  };

  const stopLoading = () => {
    if (!loadingStart.current) return;

    const elapsed = Date.now() - loadingStart.current;
    const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);

    setTimeout(() => setIsLoading(false), remaining);
  };

  const nextStation = async () => {
    if (!stations.length) return;

    const next = (currentIndex + 1) % stations.length;
    setCurrentIndex(next);
    await changeStation(stations[next]);
  };

  const prevStation = () => {
    if (!stations.length) return;

    const prev = (currentIndex - 1 + stations.length) % stations.length;
    setCurrentIndex(prev);
    changeStation(stations[prev]);
  };

  const changeStation = async (newStation, { autoplay = true } = {}) => {
    const audio = audioRef.current;
    if (!audio || !newStation?.streamUrl) return;

    const id = ++changeId.current;

    try {
      setIsLoading(true);
      setStation(newStation);

      // 👉 Fade OUT actual si hay audio
      if (audio.src) {
        await fade(audio, 0, 200);
      }

      // 👉 Reset audio
      audio.pause();
      audio.removeAttribute("src");
      audio.load();

      // 👉 Validar URL
      const url = normalizeUrl(newStation.streamUrl);
      if (!url) throw new Error("Invalid URL");

      audio.src = url;
      audio.load();

      await waitForAudio(audio, 8000);

      if (id !== changeId.current) return;

      // 👉 Autoplay + Fade IN
      if (autoplay) {
        audio.volume = 0;
        await audio.play().catch(() => {});
        await fade(audio, clamp(volume), 200);
      }
    } catch (err) {
      console.error("❌ Stream inválido:", newStation.streamUrl, err);
    } finally {
      setIsLoading(false);
    }
  };

  /* ================= AUDIO EVENTS ================= */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audioRef.current.addEventListener("error", (e) =>
      console.log("AUDIO ERROR:", e, audioRef.current.src),
    );

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onError = () => {
      setIsLoading(false);
      setIsPlaying(false);
    };

    const logError = (e) => console.log("AUDIO ERROR:", e, audio.src);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("waiting", startLoading);
    audio.addEventListener("playing", stopLoading);
    audio.addEventListener("canplay", stopLoading);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("waiting", startLoading);
      audio.removeEventListener("playing", stopLoading);
      audio.removeEventListener("canplay", stopLoading);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("error", logError);
    };
  }, []); // ✅ correcto

  /* ================= VOLUME ================= */
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
    localStorage.setItem("radio-volume", volume);
  }, [volume]);

  const play = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
    } catch (e) {
      console.log("User interaction needed");
    }
  };

  const pause = () => audioRef.current?.pause();

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.paused ? play() : pause();
  };

  return (
    <RadioPlayerContext.Provider
      value={{
        audioRef,
        station,
        setStation,
        isPlaying,
        isLoading,
        volume,
        openPanel,
        setOpenPanel,
        play,
        pause,
        toggle,
        changeVolume: setVolume,
        nextStation,
        prevStation,
        stations,
        setStations,
        currentIndex,
        changeStation,
      }}
    >
      <audio ref={audioRef} preload="none" />
      {children}
    </RadioPlayerContext.Provider>
  );
};
