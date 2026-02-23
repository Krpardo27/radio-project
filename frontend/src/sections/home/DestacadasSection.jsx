import HomeCardsGridLayout from "../../components/home-layouts/HomeCardsGridLayout";

const DestacadasSection = ({ items = [] }) => {
  if (items.length < 3) return null;

  return <HomeCardsGridLayout title="Destacadas" items={items} />;
};

export default DestacadasSection;
