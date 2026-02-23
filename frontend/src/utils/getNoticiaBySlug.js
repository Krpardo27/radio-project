import { homeSections } from "../data/homeSections";

export const getNoticiaBySlug = (slug) => {
  for (const section of Object.values(homeSections)) {
    const found = section.find((n) => n.slug === slug);
    if (found) return found;
  }
  return null;
};
