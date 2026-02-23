import { homeSections } from "../../../data/homeSections";

export const fetchNoticiasHome = async () => {
  await new Promise((r) => setTimeout(r, 300));
  return homeSections;
};

export const fetchNoticia = async (slug) => {
  const all = Object.values(homeSections).flat();
  return all.find((n) => n.slug === slug);
};
