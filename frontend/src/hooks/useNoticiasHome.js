import { useQuery } from "@tanstack/react-query";
import { noticiasHome } from "../data/noticiasHome";

export const useNoticiasHome = () =>
  useQuery({
    queryKey: ["home"],
    queryFn: async () => noticiasHome,
  });
