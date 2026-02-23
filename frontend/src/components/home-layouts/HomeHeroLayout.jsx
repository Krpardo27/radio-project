import NewsCardLarge from "../news/NewsCardLarge";

const HomeHeroLayout = ({ items = [], title }) => {
  if (!items.length) return null;

  const hero = items[0];

  return (
    <section className="space-y-10">
      {/* TITULO SECCION */}
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

      {/* HERO */}
      <div className="mx-auto space-y-4">
        <NewsCardLarge noticia={hero} />
      </div>
    </section>
  );
};

export default HomeHeroLayout;
