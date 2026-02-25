import { AnimatePresence, motion as m } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useRadioPlayer } from "../../hooks/useRadioPlayer";

const RadioPanel = () => {
  const { station, openPanel, setOpenPanel } = useRadioPlayer();
  console.log("openPanel:", openPanel);

  console.log("context object", useRadioPlayer());
  
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
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpenPanel(false)}
          />

          {/* Panel */}
          <m.div
            initial={{ y: 220, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 220, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="
              fixed left-0 w-full z-50
              bottom-0
              bg-zinc-950/90 backdrop-blur-2xl
              border-t border-white/10
            "
          >
            <div className="max-w-285 mx-auto px-4 py-5">
              <div className="flex justify-between items-start gap-4">
                <div className="flex gap-4">
                  <img
                    src={station.logo?.url}
                    className="w-14 h-14 rounded-xl"
                  />

                  <div>
                    <h3 className="font-semibold">{station.name}</h3>
                    <p className="text-sm text-zinc-400">
                      {station.description}
                    </p>
                  </div>
                </div>

                <button onClick={() => setOpenPanel(false)}>
                  <FiX />
                </button>
              </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RadioPanel;
