import News from "../models/News.js";

export const getHomeSections = async (req, res) => {
  try {
    const hero = await News.find({ type: "hero" }).limit(5);

    const loUltimo = await News.find({ type: "loUltimo" })
      .sort({ createdAt: -1 })
      .limit(10);

    const destacadas = await News.find({ type: "destacada" }).limit(6);
    const tendencias = await News.find({ type: "tendencia" }).limit(6);
    const espectaculos = await News.find({ type: "espectaculo" }).limit(6);

    res.json({
      hero,
      loUltimo,
      destacadas,
      tendencias,
      espectaculos,
    });
  } catch (error) {
    console.error("HOME ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
};
