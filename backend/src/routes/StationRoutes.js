import express from "express";
import Station from "../models/Station.js";
import { getStations } from "../controllers/getStations.js";

const router = express.Router();

// =======================================
// GET station (solo 1 estación FMDOS)
// =======================================
router.get("/", getStations);

// =======================================
// POST crear estación inicial
// SOLO una vez (después admin panel)
// =======================================
router.post("/", async (req, res) => {
  try {
    const exists = await Station.findOne();

    if (exists) {
      return res.status(400).json({
        ok: false,
        message: "La estación ya existe",
      });
    }

    const station = await Station.create(req.body);

    res.status(201).json({ ok: true, station });
  } catch (error) {
    console.error("POST station error:", error);
    res.status(500).json({ ok: false });
  }
});

// =======================================
// PATCH editar estación
// (admin panel después con Auth0)
// =======================================
router.patch("/", async (req, res) => {
  try {
    const station = await Station.findOne();

    if (!station) return res.status(404).json({ ok: false });

    Object.assign(station, req.body);
    await station.save();

    res.json({ ok: true, station });
  } catch (error) {
    console.error("PATCH station error:", error);
    res.status(500).json({ ok: false });
  }
});

export default router;
