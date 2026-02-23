import { Link } from "react-router-dom";

const NewsCardText = ({ noticia }) => {
  if (!noticia) return null;

  return (
    <article className="space-y-2 border-b border-zinc-200 pb-4">
      <Link to={`/noticia/${noticia.slug}`}>
        <h3 className="font-bold text-lg hover:text-fuchsia-500 text-zinc-800 transition">
          {noticia.title}
        </h3>
      </Link>

      <p className="text-sm text-zinc-500 line-clamp-2">{noticia.excerpt}</p>

      <span className="text-xs uppercase tracking-wide text-zinc-400">
        Por {noticia.author?.name}
      </span>
    </article>
  );
};

export default NewsCardText;
