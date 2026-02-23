export const getHomeTripleGridImage = (imagen, { priority = false } = {}) => {
  if (!imagen) return {};

  // Caso WordPress CMS
  if (typeof imagen === "object") {
    return {
      src: imagen.src,
      srcSet: imagen.srcSet,
      sizes: imagen.sizes || "(max-width:768px) 100vw, 33vw",
      loading: priority ? "eager" : "lazy",
      fetchPriority: priority ? "high" : "auto",
      decoding: "async",
      width: imagen.width || 768,
      height: imagen.height || 432,
    };
  }

  // Caso URL simple
  if (typeof imagen === "string") {
    return {
      src: imagen,
      sizes: "(max-width:768px) 100vw, 33vw",
      loading: priority ? "eager" : "lazy",
      fetchPriority: priority ? "high" : "auto",
      decoding: "async",
      width: 768,
      height: 432,
    };
  }

  return {};
};
