import { useQuery } from "@tanstack/react-query";
import { getNoticiaBySlug } from "../utils/getNoticiaBySlug";

export const useNoticia = (slug) =>
  useQuery({
    queryKey: ["noticia", slug],
    queryFn: () => Promise.resolve(getNoticiaBySlug(slug)),
    enabled: !!slug,
  });
