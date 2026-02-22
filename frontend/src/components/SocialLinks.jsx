import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  const socials = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaXTwitter />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
  ];

  return (
    <div className="flex items-center gap-3 text-zinc-500">
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-700 transition"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
