import NewsCardLarge from "../news/NewsCardLarge";
import NewsCardMedium from "../news/NewsCardMedium";
import NewsCardText from "../news/NewsCardText";

const HomeHeroNewsTextLayout = ({ items = [], title }) => {
  if (items.length < 3) return null;

  const [main, second, third ] = items;

  return (
    <section className="space-y-8">
      {title && (
        <h2 className="
          text-center font-title text-3xl md:text-4xl
          bg-gradient-to-r from-fuchsia-500 to-purple-600
          bg-clip-text text-transparent
        ">
          {title}
        </h2>
      )}

      <div className="grid gap-8 lg:grid-cols-3">

        {/* Hero con imagen */}
        <div className="lg:col-span-2">
          <NewsCardLarge noticia={main} />
        </div>

        {/* Lista texto */}
        <div className="flex flex-col gap-6">
          <NewsCardText noticia={second} />
          <NewsCardMedium noticia={third} compact/>
        </div>

      </div>
    </section>
  );
};

export default HomeHeroNewsTextLayout;