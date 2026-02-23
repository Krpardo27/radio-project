import { useQuery } from "@tanstack/react-query";
import { homeSections } from "../data/homeSections";

export const useHomeSections = () =>
  useQuery({
    queryKey: ["home", "sections"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      return homeSections;
    },
    staleTime: 1000 * 60 * 5,
  });
