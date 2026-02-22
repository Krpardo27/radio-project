import React, { useState } from "react";
import { FiPlay, FiPause, FiVolume2 } from "react-icons/fi";

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-zinc-800 px-4 py-3 flex items-center justify-between z-50">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold">Radio Project</span>
        <span className="text-xs text-red-500 animate-pulse">● EN VIVO</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-fuchsia-600 hover:bg-fuchsia-700 px-4 py-2 rounded-lg flex items-center gap-2">
          <FiPlay />
        </button>

        <div className="flex items-center gap-2">
          <FiVolume2 />
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;
