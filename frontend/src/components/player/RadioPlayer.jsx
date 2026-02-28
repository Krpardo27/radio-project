import {
  FiPlay,
  FiPause,
  FiChevronUp,
  FiLoader,
  FiSkipBack,
  FiSkipForward,
} from "react-icons/fi";
import RadioPanel from "./RadioPanel";
import { useRadioPlayer } from "../../hooks/useRadioPlayer";
import { useEffect } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useStations } from "../../hooks/useStations";

const RadioPlayer = () => {
  const { data: stations = [] } = useStations();

  const {
    station,
    isPlaying,
    volume,
    openPanel,
    setOpenPanel,
    toggle,
    changeVolume,
    isLoading,
    setStations,
    nextStation,
    prevStation,
    changeStation,
  } = useRadioPlayer();

  console.log("stations:", stations);
  console.log("station:", station);

  useEffect(() => {
    if (stations.length && !station) {
      setStations(stations);
      changeStation(stations[0], { autoplay: true });
    }
  }, [stations, station]);

  if (!station) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-50 bg-[#532487] border-t border-white/10">
        <div className="max-w-285 mx-auto px-3 py-2 flex items-center justify-between gap-3">
          {/* INFO */}
          <div className="flex items-center gap-2 min-w-0">
            {/* 👉 Imagen siempre visible */}
            <img
              src={station.logo?.url}
              alt={station.name}
              className="w-9 h-9 md:w-10 md:h-10 rounded-xl shrink-0"
            />

            {/* 👉 Texto compacto */}
            <div className="min-w-0">
              <div className="overflow-hidden w-[150px] sm:w-[200px] md:w-auto">
                <div className="flex whitespace-nowrap animate-[marquee_10s_linear_infinite] md:animate-none">
                  <span className="mr-10">{station.name}</span>
                </div>
              </div>
              <p className="hidden sm:block text-xs opacity-80 truncate">
                {station.description}
              </p>
            </div>
          </div>

          {/* CONTROLES */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <button onClick={prevStation}>
              <FiSkipBack size={18} />
            </button>

            <button
              onClick={toggle}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-fuchsia-600 text-white shadow-lg"
            >
              {isLoading ? (
                <FiLoader className="animate-spin" />
              ) : isPlaying ? (
                <FiPause />
              ) : (
                <FiPlay />
              )}
            </button>

            <button onClick={nextStation}>
              <FiSkipForward size={18} />
            </button>

            {/* Slider solo tablet+ */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) =>
                changeVolume(Math.min(1, Math.max(0, Number(e.target.value))))
              }
              className="hidden md:block w-20"
            />

            <button onClick={() => setOpenPanel(!openPanel)}>
              <FiChevronUp className={openPanel ? "rotate-180" : ""} />
            </button>
          </div>
        </div>
      </div>

      <RadioPanel station={station} />
    </>
  );
};

export default RadioPlayer;
