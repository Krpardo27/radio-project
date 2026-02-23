import HomeTripleWithImageLayout from "../../components/home-layouts/HomeTripleWithImageLayout";

const EspectaculosSection = ({ items = [] }) => {
  if (items.length < 3) return null;

  return <HomeTripleWithImageLayout title="Espectáculos" items={items} />;
};

export default EspectaculosSection;
