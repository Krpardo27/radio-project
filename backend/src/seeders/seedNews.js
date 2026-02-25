import dotenv from "dotenv";
import News from "../models/News.js";
import { connectDB } from "../config/db.js";
import { homeSections } from "../../../frontend/src/data/homeSections.js";

dotenv.config();

const mapNews = (items, type) =>
  items.map((item) => ({
    title: item.title,
    slug: item.slug,
    image: item.image,
    excerpt: item.excerpt,
    category: item.category,
    type,
    author: item.author
      ? { name: item.author.name, avatar: item.author.avatar }
      : undefined,
    publishedAt: new Date(),
  }));

const seedNews = async () => {
  try {
    await connectDB();

    await News.deleteMany();

    const data = [
      ...mapNews(homeSections.hero, "hero"),
      ...mapNews(homeSections.loUltimo, "loUltimo"),
      ...mapNews(homeSections.tendencias, "tendencia"),
      ...mapNews(homeSections.espectaculos, "espectaculo"),
      ...mapNews(homeSections.destacadas, "destacada"),
    ];

    await News.insertMany(data);

    console.log(`✅ Seeded ${data.length} news`);
    process.exit();
  } catch (error) {
    console.error("Seeder error:", error);
    process.exit(1);
  }
};

seedNews();
