import NewsCardLarge from "../../components/news/NewsCardLarge";
import NewsCardMedium from "../../components/news/NewsCardMedium";

const LatestNewsSection = ({ noticiasLoUltimo = [] }) => {
  if (!noticiasLoUltimo.length) return null;

  const [main, second, third] = noticiasLoUltimo;

  return (
    <section className="space-y-8">
      <h2 className="text-center font-title text-3xl md:text-4xl text-purple-700">
        Lo último
      </h2>

      <div className="grid gap-8 lg:grid-cols-3">
        {main && (
          <div className="lg:col-span-2">
            <NewsCardLarge noticia={main} />
          </div>
        )}

        <div className="flex flex-col gap-8">
          {second && <NewsCardMedium noticia={second} />}
          {third && <NewsCardMedium noticia={third} />}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
