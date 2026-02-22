import React from "react";
import { Link } from "react-router-dom";

const NewsCardLarge = ({ noticia }) => {
  if (!noticia) return null;

  return (
    <article className="space-y-3 group">
      {/* Imagen */}
      <Link
        to={`/noticia/${noticia.slug}`}
        className="block relative aspect-video overflow-hidden bg-zinc-900"
      >
        <img
          src={noticia.image}
          alt={noticia.title}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Texto */}
      <div className="space-y-2 max-w-2xl">
        {noticia.category && (
          <span className="text-xs uppercase tracking-widest text-fuchsia-500">
            {noticia.category}
          </span>
        )}

        <Link
          to={`/noticia/${noticia.slug}`}
          className="block font-title text-zinc-800  text-xl md:text-2xl font-bold leading-tight  transition"
        >
          {noticia.title}
        </Link>

        {noticia.excerpt && (
          <p className="text-zinc-400 line-clamp-2">{noticia.excerpt}</p>
        )}

        {(noticia.author || noticia.date) && (
          <div className="text-xs text-zinc-500">
            {noticia.author}
            {noticia.author && noticia.date && " · "}
            {noticia.date}
          </div>
        )}
      </div>
    </article>
  );
};

export default NewsCardLarge;
