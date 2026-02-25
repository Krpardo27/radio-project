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

  // 👉 cargar stations en context
  useEffect(() => {
    if (stations.length) {
      setStations(stations);
      changeStation(stations[0]);
    }
  }, [stations]);

  if (!station) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-50 bg-[#532487] border-t border-white/10">
        <div className="max-w-285 mx-auto px-4 py-3 flex justify-between">
          {/* INFO */}
          <div className="flex items-center gap-3">
            <img src={station.logo?.url} className="w-10 h-10 rounded-xl" />
            <div>
              <p className="text-sm font-semibold">{station.name}</p>
              <p className="text-xs">{station.description}</p>
            </div>
          </div>

          {/* CONTROLES */}
          <div className="flex items-center gap-4">
            <button onClick={prevStation}>
              <FiSkipBack size={18} />
            </button>

            <button
              onClick={toggle}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-fuchsia-600 text-white"
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

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => changeVolume(Number(e.target.value))}
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
