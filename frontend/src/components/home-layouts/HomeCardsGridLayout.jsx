import HomeNewsCardGridSmall from "./skeletons/HomeNewsCardGridSmall";

const HomeCardsGridLayout = ({ items = [], title }) => {
  if (items.length < 3) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 space-y-10">
      {title && (
        <h2
          className="
          text-center font-title text-3xl md:text-4xl
          bg-gradient-to-r from-fuchsia-500 to-purple-600
          bg-clip-text text-transparent
        "
        >
          {title}
        </h2>
      )}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((n, i) => (
          <HomeNewsCardGridSmall
            key={n.id || n.slug}
            noticia={n}
            priority={i === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeCardsGridLayout;
