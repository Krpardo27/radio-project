import mongoose from "mongoose";

console.log("🔗 Conectando a MongoDB...", process.env.MONGO_URI);

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Mongo conectado");
  } catch (err) {
    console.error("❌ Mongo error", err);
    process.exit(1);
  }
};
