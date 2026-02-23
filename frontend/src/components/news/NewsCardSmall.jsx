import { Link } from "react-router-dom";

const NewsCardSmall = ({ noticia }) => {
  if (!noticia) return null;

  return (
    <article className="space-y-2 group">
      <Link
        to={`/noticia/${noticia.slug}`}
        className="block relative h-28 overflow-hidden rounded-lg bg-zinc-900"
      >
        <img
          src={noticia.image}
          alt={noticia.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </Link>

      <Link
        to={`/noticia/${noticia.slug}`}
        className="font-semibold text-sm leading-snug hover:text-fuchsia-500"
      >
        {noticia.title}
      </Link>
    </article>
  );
};

export default NewsCardSmall;
