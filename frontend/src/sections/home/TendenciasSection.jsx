import HomeHeroNewsTextLayout from "../../components/home-layouts/HomeHeroNewsTextLayout";

const TendenciasSection = ({ items = [] }) => {
  if (items.length < 3) return null;

  return <HomeHeroNewsTextLayout title="Tendencias" items={items} />;
};

export default TendenciasSection;
