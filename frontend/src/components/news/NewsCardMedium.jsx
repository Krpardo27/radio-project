import React from "react";
import { Link } from "react-router-dom";

const getAuthorName = (author) => {
  if (!author) return "Redacción";
  if (typeof author === "string") return author;
  return author.name ?? "Redacción";
};

const NewsCardMedium = ({ noticia, priority, compact = false }) => {
  if (!noticia) return null;

  return (
    <article className="space-y-2 group">
      {/* Imagen */}
      <Link
        to={`/noticia/${noticia.slug}`}
        className={`
    block relative
    ${compact ? "h-40 md:h-48 lg:h-56" : "h-64 md:h-72 lg:h-[350px]"}
    overflow-hidden bg-zinc-900
  `}
      >
        <img
          src={noticia.image}
          alt={noticia.title}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
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
          className={`block font-title text-lg md:text-xl text-zinc-800 font-semibold leading-tight transition ${compact ? "line-clamp-2" : ""}`}
        >
          {noticia.title}
        </Link>

        {noticia.excerpt && (
          <p className={`text-sm text-zinc-400 ${compact ? "line-clamp-2" : ""}`}>
            {noticia.excerpt}
          </p>
        )}

        {/* Autor */}
        {(noticia.author || noticia.date) && (
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            {noticia.author?.avatar && (
              <img
                src={noticia.author.avatar}
                alt={getAuthorName(noticia.author)}
                className="w-4 h-4 rounded-full object-cover"
                loading="lazy"
              />
            )}

            {noticia.author && (
              <span>
                Por{" "}
                <span className="text-zinc-300 font-medium">
                  {getAuthorName(noticia.author)}
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

export default NewsCardMedium;
