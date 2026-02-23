import React from "react";
import { Link } from "react-router-dom";

const NoticiaPrincipal = ({ noticia }) => {
  if (!noticia) return null;

  return (
    <article className="space-y-4">
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-281 mx-auto aspect-video overflow-hidden">
          <img
            src={noticia.image}
            alt={noticia.title}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="max-w-3xl space-y-3 flex flex-col justify-center items-center mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-fuchsia-500">
          {noticia.category}
        </span>

        <h1 className="title-notice">{noticia.title}</h1>
        <p className="text-zinc-400">{noticia.excerpt}</p>
        <div className="text-xs text-zinc-500 flex items-center gap-2 justify-center">
          {noticia.author?.avatar && (
            <img
              src={noticia.author.avatar}
              alt={noticia.author.name}
              className="w-6 h-6 rounded-full object-cover"
              loading="lazy"
            />
          )}

          <span>
            Por{" "}
            <span className="font-medium text-zinc-300">
              {typeof noticia.author === "string"
                ? noticia.author
                : noticia.author?.name}
            </span>
          </span>

          <span>·</span>
          <span>{noticia.date}</span>
        </div>

        <Link
          to={`/noticia/${noticia.slug}`}
          className="inline-block bg-fuchsia-600 px-4 py-2 rounded-lg text-sm hover:bg-fuchsia-700 transition"
        >
          Leer noticia →
        </Link>
      </div>
    </article>
  );
};

export default NoticiaPrincipal;
