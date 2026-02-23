import { Link } from "react-router-dom";

const getAuthor = (a) => (typeof a === "string" ? a : a?.name || "Redacción");

const HomeNewsCardGridSmall = ({ noticia, priority = false }) => {
  if (!noticia) return null;

  return (
    <article className="group space-y-2">
      <Link
        to={`/noticia/${noticia.slug}`}
        className="
          block relative overflow-hidden
          aspect-video
           bg-zinc-900
        "
      >
        <img
          src={noticia.image}
          alt={noticia.title}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="
            absolute inset-0 w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
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
          className="
            block font-semibold text-zinc-800
            leading-snug line-clamp-2
            hover:text-fuchsia-500 transition
          "
        >
          {noticia.title}
        </Link>

        {noticia.author && (
          <span className="text-xs text-zinc-400">
            Por {getAuthor(noticia.author)}
          </span>
        )}
      </div>
    </article>
  );
};

export default HomeNewsCardGridSmall;
