import mongoose from "mongoose";

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
    },

    description: String,

    streamUrl: {
      type: String,
      required: true,
    },

    bitrate: {
      type: Number,
      default: 128,
    },

    isLive: {
      type: Boolean,
      default: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    order: {
      type: Number,
      default: 0,
    },

    genre: {
      type: String,
      default: "Pop",
    },

    country: {
      type: String,
      default: "CL",
    },

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

stationSchema.index({ order: 1 });

export default mongoose.model("Station", stationSchema);
