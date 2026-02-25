import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useHomeSections = () =>
  useQuery({
    queryKey: ["home-sections"],
    queryFn: async () => {
      const { data } = await api.get("/api/home");
      return data;
    },
  });
