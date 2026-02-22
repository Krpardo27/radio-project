import LatestNewsSkeleton from "../components/LatestNewsSkeleton";
import NewsCardLarge from "../components/news/NewsCardLarge";
import { useNoticiasHome } from "../hooks/useNoticiasHome";
import LatestNewsSection from "../sections/home/LatestNewsSection";

const Home = () => {
  const { data = [], isLoading } = useNoticiasHome();

  if (isLoading) return <LatestNewsSkeleton />;

  const [hero, ...latest] = data;

  return (
    <div className="space-y-10">
      <NewsCardLarge noticia={hero} />
      <LatestNewsSection noticiasLoUltimo={latest} />
    </div>
  );
};

export default Home;
