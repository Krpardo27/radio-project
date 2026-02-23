import { noticiasHome } from "../../../data/noticiasHome";

export const fetchNoticiasHome = async () => {
  await new Promise((r) => setTimeout(r, 300));
  return noticiasHome;
};
