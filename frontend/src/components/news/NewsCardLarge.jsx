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
          <div className="text-xs text-zinc-500 flex items-center gap-2">
            {noticia.author?.avatar && (
              <img
                src={noticia.author.avatar}
                alt={noticia.author.name}
                className="w-5 h-5 rounded-full object-cover"
                loading="lazy"
              />
            )}

            {noticia.author && (
              <span>
                Por{" "}
                <span className="font-medium text-zinc-300">
                  {typeof noticia.author === "string"
                    ? noticia.author
                    : noticia.author?.name}
                </span>
              </span>
            )}

            {noticia.author && noticia.date && <span>·</span>}
            {noticia.date && <span>{noticia.date}</span>}
          </div>
        )}
      </div>
    </article>
  );
};

export default NewsCardLarge;
