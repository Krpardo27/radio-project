import React, { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const HeaderTop = () => {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let last = 0;

    const onScroll = () => {
      const y = window.scrollY;

      // 👉 hysteresis para evitar vibración
      if (!compact && y > 80) setCompact(true);
      if (compact && y < 40) setCompact(false);

      last = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [compact]);

  return (
    <div
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        compact ? "bg-white/90 backdrop-blur-xs lg:shadow-sm" : "bg-white"
      }`}
    >
      <m.div
        className="container mx-auto lg:px-2 px-1 flex items-center justify-between"
        animate={{
          paddingTop: compact ? 8 : 10,
          paddingBottom: compact ? 8 : 10,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* LEFT */}
        <div className="flex items-center gap-4 text-purple-700 text-xl">
          <FiMenu className="cursor-pointer" />
          <FiSearch className="cursor-pointer" />
          <FiUser className="cursor-pointer" />
        </div>

        {/* LOGO */}
        <m.div
          animate={{
            scale: compact ? 0.9 : 1,
            y: compact ? -2 : 0,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
        >
          <img src="./fmdos.svg" className="w-[170px] h-auto object-contain" />
        </m.div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <SocialLinks />
          <button className="hidden md:block bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-800">
            🎧 MÚSICA PARA DOS
          </button>
        </div>
      </m.div>
    </div>
  );
};

export default HeaderTop;
