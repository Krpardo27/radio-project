import NewsCardLarge from "../news/NewsCardLarge";
import NewsCardMedium from "../news/NewsCardMedium";

const HomeSplitTwoCol = ({ items = [], title }) => {
  if (!items.length) return null;

  const [main, second] = items;

  return (
    <section className="space-y-8">
      <h2 className="text-center font-title text-3xl md:text-4xl text-purple-700">
        {title}
      </h2>

      <div className="grid gap-8 lg:grid-cols-3 items-stretch">
        {main && (
          <div className="lg:col-span-2">
            <NewsCardLarge noticia={main} />
          </div>
        )}

        <div className="flex flex-col gap-8 h-full">
          {second && (
            <div className="h-full">
              <NewsCardMedium noticia={second} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeSplitTwoCol;
