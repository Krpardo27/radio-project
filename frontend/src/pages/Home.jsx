import LoUltimoSection from "../sections/home/LoUltimoSection";
import { useHomeSections } from "../hooks/useHomeSections";
import HeroSection from "../sections/home/HeroSection";
import HomeHeroSkeleton from "../components/home-layouts/skeletons/HomeHeroSkeleton";
import HomeSplitTwoColSkeleton from "../components/home-layouts/skeletons/HomeSplitTwoColSkeleton";
import HomeHeroNewsTendenciasSkeleton from "../components/home-layouts/skeletons/HomeHeroNewsTendenciasSkeleton";
import TendenciasSection from "../sections/home/TendenciasSection";
import EspectaculosSection from "../sections/home/EspectaculosSection";
import DestacadasSection from "../sections/home/DestacadasSection";

const Home = () => {
  const { data, isLoading } = useHomeSections();

  if (isLoading)
    return (
      <div className="space-y-12">
        <HomeHeroSkeleton />
        <HomeSplitTwoColSkeleton />
        <HomeHeroNewsTendenciasSkeleton />
      </div>
    );

  console.log("HOME DATA:", data);
  console.log("loUltimo:", data?.loUltimo);

  return (
    <div className="space-y-12">
      <HeroSection items={data?.hero ?? []} />
      {(data?.loUltimo ?? []).length >= 1 && (
        <LoUltimoSection items={data.loUltimo} />
      )}
      <DestacadasSection items={data?.destacadas ?? []} />
      {(data?.tendencias ?? []).length >= 3 && (
        <TendenciasSection items={data.tendencias} />
      )}
      <EspectaculosSection items={data?.espectaculos ?? []} />
    </div>
  );
};

export default Home;
