import React from "react";
import { Link } from "react-router-dom";

const NewsCardMedium = ({ noticia }) => {
  if (!noticia) return null;

  return (
    <article className="space-y-2 group">
      {/* Imagen */}
      <Link
        to={`/noticia/${noticia.slug}`}
        className="block relative aspect-video overflow-hidden bg-zinc-900"
      >
        <img
          src={noticia.image}
          alt={noticia.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="space-y-1">
        {noticia.category && (
          <span className="text-[10px] uppercase tracking-widest text-fuchsia-500">
            {noticia.category}
          </span>
        )}

        <Link
          to={`/noticia/${noticia.slug}`}
          className="block font-title text-lg md:text-xl text-zinc-800 font-semibold leading-tight transition"
        >
          {noticia.title}
        </Link>

        {noticia.excerpt && (
          <p className="text-sm text-zinc-400 line-clamp-2">
            {noticia.excerpt}
          </p>
        )}
      </div>
    </article>
  );
};

export default NewsCardMedium;
