import Station from "../models/Station.js";

export const getStations = async (req, res) => {
  try {
    const stations = await Station.find({ isLive: true }).sort({ order: 1 });

    res.json(stations);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
