import React from "react";
import { Link } from "react-router-dom";

const NewsCardSmall = ({ noticia }) => {
  if (!noticia) return null;

  return (
    <article className="flex gap-3 items-start group">
      {/* Imagen */}
      <Link
        to={`/noticia/${noticia.slug}`}
        className="relative w-28 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-900"
      >
        <img
          src={noticia.image}
          alt={noticia.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Texto */}
      <div className="space-y-1">
        {noticia.category && (
          <span className="text-[10px] uppercase tracking-widest text-fuchsia-500">
            {noticia.category}
          </span>
        )}

        <Link
          to={`/noticia/${noticia.slug}`}
          className="font-title font-semibold leading-tight line-clamp-2 hover:text-fuchsia-400 transition"
        >
          {noticia.title}
        </Link>

        {noticia.author && (
          <span className="text-xs text-zinc-500">{noticia.author}</span>
        )}
      </div>
    </article>
  );
};

export default NewsCardSmall;
