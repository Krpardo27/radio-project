import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
  },
  { _id: false },
);

const NewsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    excerpt: String,
    image: String,
    slug: { type: String, required: true, unique: true },

    category: String,

    type: {
      type: String,
      enum: ["hero", "loUltimo", "destacada", "tendencia", "espectaculo"],
      default: "loUltimo",
    },

    author: AuthorSchema,

    publishedAt: Date,
  },
  { timestamps: true },
);

export default mongoose.model("News", NewsSchema);
