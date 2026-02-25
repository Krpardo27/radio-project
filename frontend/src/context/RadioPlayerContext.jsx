import { createContext, useEffect, useRef, useState } from "react";

export const RadioPlayerContext = createContext();

export const RadioPlayerProvider = ({ children }) => {
  const audioRef = useRef(null);
  const loadingStart = useRef(null);

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

  const changeStation = async (newStation) => {
    const audio = audioRef.current;
    if (!audio || !newStation?.streamUrl) return;

    try {
      const wasPlaying = !audio.paused;

      setIsLoading(true);
      setStation(newStation);

      audio.pause();
      audio.src = newStation.streamUrl;
      audio.load();

      await new Promise((resolve, reject) => {
        audio.addEventListener("canplay", resolve, { once: true });
        audio.addEventListener("error", reject, { once: true });
      });

      if (wasPlaying) await audio.play();
      setIsLoading(false);
    } catch (err) {
      console.error("❌ Stream inválido:", newStation.streamUrl);

      setIsLoading(false);
      setIsPlaying(false);

      // 👉 auto skip
      nextStation();
    }
  };

  /* ================= AUDIO EVENTS ================= */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onError = () => {
      setIsLoading(false);
      setIsPlaying(false);
    };

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

    startLoading();

    await audio.play();

    setTimeout(() => stopLoading(), 1000);
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
