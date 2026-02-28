import mongoose from "mongoose";

const normalizeUrl = (url) => {
  if (!url) return url;

  let fixed = url.trim();

  // typos comunes
  fixed = fixed.replace(/^hhttps/, "https");
  fixed = fixed.replace(/\n/g, "");

  return fixed;
};

const isValidStream = (url) => {
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
};

const stationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    description: String,

    streamUrl: {
      type: String,
      required: true,
      set: normalizeUrl, // 👈 limpia antes de guardar
      validate: {
        validator: isValidStream,
        message: "Stream URL inválida",
      },
    },

    streamType: {
      type: String,
      enum: ["mp3", "aac", "hls", "other"],
      default: "mp3",
    },

    bitrate: {
      type: Number,
      default: 128,
      min: 32,
      max: 320,
    },

    isLive: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },

    genre: { type: String, default: "Pop" },
    country: { type: String, default: "CL" },

    logo: {
      url: String,
      publicId: String,
    },

    stats: {
      totalPlays: { type: Number, default: 0 },
      likes: { type: Number, default: 0 },
    },
  },
  { timestamps: true },
);

// índices útiles para Home y panel admin
stationSchema.index({ order: 1 });
stationSchema.index({ featured: 1, order: 1 });
stationSchema.index({ genre: 1 });

export default mongoose.model("Station", stationSchema);
