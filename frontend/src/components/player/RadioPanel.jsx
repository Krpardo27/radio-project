import { AnimatePresence, motion as m } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useRadioPlayer } from "../../hooks/useRadioPlayer";

const RadioPanel = () => {
  const { station, openPanel, setOpenPanel } = useRadioPlayer();
  if (!station) return null;

  return (
    <AnimatePresence>
      {openPanel && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpenPanel(false)}
          />

          {/* Panel */}
          <m.div
            initial={{ y: 220, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 220, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="
    fixed bottom-0 left-0 w-full z-50
    bg-gradient-to-b from-[#2b0f4c]/95 to-[#12051f]/95
    backdrop-blur-2xl
    border-t border-white/10
    shadow-2xl
  "
          >
            <div className="max-w-285 mx-auto px-4 py-6 space-y-5">
              {/* HEADER */}
              <div className="flex justify-between items-start gap-4">
                {/* INFO */}
                <div className="flex gap-4 items-center min-w-0">
                  <img
                    src={station.logo?.url}
                    alt={station.name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl shadow-lg shrink-0"
                  />

                  <div className="min-w-0">
                    {/* 👉 marquee mobile */}
                    <div className="overflow-hidden w-[180px] md:w-auto">
                      <div className="flex whitespace-nowrap animate-[marquee_10s_linear_infinite] md:animate-none">
                        <h3 className="font-semibold mr-8">{station.name}</h3>
                      </div>
                    </div>

                    <p className="text-sm text-zinc-400 truncate">
                      {station.description}
                    </p>

                    <p className="text-xs text-fuchsia-400 mt-1">
                      {station.genre} • {station.country}
                    </p>
                  </div>
                </div>

                {/* CLOSE */}
                <button
                  onClick={() => setOpenPanel(false)}
                  className="text-zinc-400 hover:text-white"
                >
                  <FiX size={22} />
                </button>
              </div>

              {/* SEPARADOR */}
              <div className="h-px bg-white/10" />

              {/* FUTURO: CONTROLES GRANDES / PODCAST INFO */}
              <div className="text-center text-xs text-zinc-500">
                Próximamente: historial, favoritos, podcasts 🎧
              </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RadioPanel;
