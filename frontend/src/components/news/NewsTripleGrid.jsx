import { Link } from "react-router-dom";
import { getHomeTripleGridImage } from "../../utils/getHomeTripleGridImage";

const NewsCard = ({ story, priority }) => {
  const img = getHomeTripleGridImage(story.image, { priority });

  return (
    <article className="space-y-4 text-center flex flex-col items-center">
      <Link to={`/noticia/${story.slug}`}>
        <div className="overflow-hidden">
          <img
            {...img}
            alt={story.title}
            className="w-full h-[200px] object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </Link>

      <Link to={`/noticia/${story.slug}`}>
        <h3 className="text-lg font-bold leading-snug text-slate-600 transition">
          {story.title}
        </h3>
      </Link>

      <p className="text-sm text-zinc-500 max-w-sm mx-auto">{story.excerpt}</p>

      <span className="text-xs uppercase tracking-wide text-zinc-400">
        Por {story.author?.name}
      </span>
    </article>
  );
};

const NewsTripleGrid = ({ stories = [] }) => {
  if (stories.length < 3) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {stories.slice(0, 3).map((story, i) => (
          <NewsCard key={story._id} story={story} priority={i === 0} />
        ))}
      </div>

      {/* línea FM Dos */}
      <div className="h-[3px] w-40 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full mx-auto" />
    </section>
  );
};

export default NewsTripleGrid;
