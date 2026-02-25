import dotenv from "dotenv";
import Station from "../models/Station.js";
import { connectDB } from "../config/db.js";
import mongoose from "mongoose";

dotenv.config();

const stations = [
  {
    name: "FM Dos",
    slug: "fm-dos",
    description: "La radio del amor ❤️",
    streamUrl: "https://icecast.radiofrance.fr/fip-midfi.mp3",
    genre: "Pop",
    country: "CL",
    featured: true,
    order: 1,
    logo: {
      url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      publicId: "radio/fmdos-logo",
    },
  },

  {
    name: "Radio Disney",
    slug: "radio-disney",
    description: "Solo hits Disney",
    streamUrl: "https://us4.internet-radio.com/proxy/977music/stream",
    genre: "Pop",
    country: "US",
    order: 2,
    logo: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Radio_Disney_Logo.svg/512px-Radio_Disney_Logo.svg.png",
    },
  },

  {
    name: "Los40 Chile",
    slug: "los40-chile",
    description: "Éxitos del momento",
    streamUrl:
      "https://playerservices.streamtheworld.com/api/livestream-redirect/LOS40_CHILEAAC.aac",
    genre: "Urbano",
    country: "CL",
    order: 3,
    logo: {
      url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Los40_logo.svg",
    },
  },

  {
    name: "Rock FM",
    slug: "rock-fm",
    description: "Rock clásico 24/7",
    streamUrl: "https://stream.revma.ihrhls.com/zc739",
    genre: "Rock",
    country: "US",
    order: 4,
  },
];

const seedStations = async () => {
  try {
    await connectDB();

    console.log("📡 Seeding stations...");

    console.log("DB NAME:", mongoose.connection.name);
    console.log(
      "COLLECTIONS:",
      await mongoose.connection.db.listCollections().toArray(),
    );

    for (const s of stations) {
      await Station.updateOne({ slug: s.slug }, { $set: s }, { upsert: true });
      console.log("✔", s.name);
    }

    const count = await Station.countDocuments();
    console.log("✅ Total estaciones:", count);

    process.exit();
  } catch (err) {
    console.error("❌ Seeder error", err);
    process.exit(1);
  }
};

seedStations();
