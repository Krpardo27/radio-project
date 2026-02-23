import { useParams, Link } from "react-router-dom";
import { useNoticia } from "../../hooks/useNoticia";

const NoticiaDetail = () => {
  const { slug } = useParams();
  const { data: noticia, isLoading } = useNoticia(slug);

  if (isLoading)
    return <p className="text-center py-20">Cargando noticia...</p>;

  if (!noticia)
    return <p className="text-center py-20">Noticia no encontrada</p>;

  return (
    <article className="max-w-4xl mx-auto lg:p-4 p-1 space-y-8">
      {/* CATEGORY */}
      {noticia.category && (
        <Link
          to={`/categoria/${noticia.category}`}
          className="text-xs uppercase tracking-widest text-fuchsia-600 font-semibold"
        >
          {noticia.category}
        </Link>
      )}

      {/* TITLE */}
      <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-zinc-900">
        {noticia.title}
      </h1>

      {/* EXCERPT */}
      {noticia.excerpt && (
        <p className="text-lg text-zinc-600 max-w-2xl">{noticia.excerpt}</p>
      )}

      {/* HERO IMAGE */}
      <img
        src={noticia.image}
        alt={noticia.title}
        className="w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />

      {/* META */}
      <div className="flex items-center gap-3 text-sm text-zinc-500">
        {noticia.author?.avatar && (
          <img
            src={noticia.author.avatar}
            alt={noticia.author.name}
            className="w-8 h-8 rounded-full object-cover"
          />
        )}

        {noticia.author?.name && (
          <span className="font-medium text-zinc-700">
            {noticia.author.name}
          </span>
        )}

        {noticia.date && <span>· {noticia.date}</span>}
      </div>

      {/* CONTENT */}
      <div className="prose max-w-none text-zinc-800">
        {noticia.content ? (
          <div dangerouslySetInnerHTML={{ __html: noticia.content }} />
        ) : (
          <p>{noticia.excerpt}</p>
        )}
      </div>

      {/* SHARE */}
      <div className="pt-6 border-t flex gap-4 text-sm text-zinc-600">
        <span>Compartir:</span>

        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            noticia.title,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fuchsia-600"
        >
          Twitter
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fuchsia-600"
        >
          Facebook
        </a>
      </div>
    </article>
  );
};

export default NoticiaDetail;
