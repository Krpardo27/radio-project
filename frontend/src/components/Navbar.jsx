import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants/navLinks";

const Navbar = () => {
  return (
    <nav className="border-b border-zinc-200 ">
      <div className="max-w-325 mx-auto px-4 py-2 flex justify-center items-center gap-6 text-sm font-semibold overflow-x-auto">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `
              whitespace-nowrap
              ${isActive ? "text-purple-700" : "text-zinc-600"}
              hover:text-purple-700
              ${
                link.highlight
                  ? "border border-purple-700 rounded-full px-3 py-1"
                  : ""
              }
            `
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
