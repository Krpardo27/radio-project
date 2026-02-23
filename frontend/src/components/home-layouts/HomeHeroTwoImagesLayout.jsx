import NewsCardLarge from "../news/NewsCardLarge";
import NewsCardSmall from "../news/NewsCardSmall"; // 👈 nuevo
import NewsCardText from "../news/NewsCardText";

const HomeHeroTwoImagesLayout = ({ items = [], title }) => {
  if (items.length < 4) return null;

  const [main, img2, text1, text2] = items;

  return (
    <section className="space-y-8">
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

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewsCardLarge noticia={main} />
        </div>

        <div className="flex flex-col gap-6">
          <NewsCardText noticia={text1} />
          <NewsCardSmall noticia={img2} />
          <NewsCardText noticia={text2} />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroTwoImagesLayout;
