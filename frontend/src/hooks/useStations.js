import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useStations = () =>
  useQuery({
    queryKey: ["stations"], // 👈 plural y consistente
    queryFn: async () => {
      const res = await api.get("/api/stations"); // 👈 OJO: /stations (plural)
      // A prueba de errores:
      return Array.isArray(res.data) ? res.data : [];
    },
    staleTime: 1000 * 60 * 5,
  });