import { useQuery } from "@tanstack/react-query";
import { noticiasLoUltimo } from "../data/loUltimo";

export const useNoticiasHome = () => {
  return useQuery({
    queryKey: ["noticias-home"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      return noticiasLoUltimo;
    },
  });
};
