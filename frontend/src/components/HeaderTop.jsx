import React from "react";
import SocialLinks from "./SocialLinks";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="w-full border-b text-zinc-900">
      <div className="max-w-325 mx-auto px-4 py-5 flex items-center justify-between">
        {/* LEFT ICONS */}
        <div className="flex items-center gap-4 text-purple-700 text-xl">
          <FiMenu className="cursor-pointer" />
          <FiSearch className="cursor-pointer" />
          <FiUser className="cursor-pointer" />
        </div>

        {/* LOGO */}
        <div className="flex items-center gap-2 font-bold text-3xl text-purple-800">
          <Link to="/">
            <img
              src="./fmdos.svg"
              alt="FM DOS"
              className="w-40 object-cover h-10"
            />
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <SocialLinks />

          <button className="hidden md:block bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-800 transition">
            🎧 MÚSICA PARA DOS
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
