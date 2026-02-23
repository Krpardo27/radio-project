import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { fetchNoticia } from "./services/noticiasApi";

const NewsCardLarge = ({ noticia, showExtra = true }) => {
  const queryClient = useQueryClient();
  if (!noticia) return null;

  const prefetch = () => {
    queryClient.prefetchQuery({
      queryKey: ["noticia", noticia.slug],
      queryFn: () => fetchNoticia(noticia.slug),
      staleTime: 1000 * 60 * 5,
    });
  };

  return (
    <Link
      to={`/noticia/${noticia.slug}`}
      onMouseEnter={prefetch}
      className="block space-y-4 group focus:outline-none"
    >
      {/* IMAGEN */}
      <div className="relative aspect-video overflow-hidden bg-zinc-900 rounded-xl">
        <img
          src={noticia.image}
          alt={noticia.title}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

        {/* categoria */}
        {noticia.category && (
          <span className="absolute top-3 left-3 bg-black/60 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest text-white rounded-full">
            {noticia.category}
          </span>
        )}
      </div>

      <div className="space-y-2 px-1">
        {/* TITULO */}
        <h3 className="font-title text-xl md:text-2xl font-bold leading-tight text-zinc-900 group-hover:text-fuchsia-600 transition">
          {noticia.title}
        </h3>

        {/* EXCERPT corto */}
        {noticia.excerpt && (
          <p className="text-zinc-600 line-clamp-2">{noticia.excerpt}</p>
        )}

        {/* META */}
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          {noticia.author?.avatar && (
            <img
              src={noticia.author.avatar}
              alt={noticia.author.name}
              className="w-5 h-5 rounded-full object-cover"
              loading="lazy"
            />
          )}

          {noticia.author?.name && (
            <span className="font-medium text-zinc-700">
              {noticia.author.name}
            </span>
          )}

          {noticia.author && noticia.date && <span>·</span>}
          {noticia.date && <span>{noticia.date}</span>}
        </div>
      </div>
    </Link>
  );
};

export default NewsCardLarge;
