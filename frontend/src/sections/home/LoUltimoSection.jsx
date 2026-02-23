import HomeSplitTwoCol from "../../components/home-layouts/HomeSplitTwoCol";

const LoUltimoSection = ({ items = [] }) => {
  if (items.length < 2) return null;

  return <HomeSplitTwoCol title="Lo último" items={items} />;
};

export default LoUltimoSection;
