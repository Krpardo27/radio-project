import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

import stationRoutes from "./routes/StationRoutes.js";
import homeRoutes from "./routes/HomeRoutes.js";

const allowedOrigins = [
  "http://localhost:5173",
  "https://radio-project-lemon.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin) || origin?.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      console.warn("❌ CORS blocked:", origin);
      return callback(null, false);
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.json({ ok: true, msg: "Radio API running 🚀" });
});
app.use("/api/stations", stationRoutes);
app.use("/api/home", homeRoutes);

export default app;
