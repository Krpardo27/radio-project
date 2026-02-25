import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

import stationRoutes from "./routes/StationRoutes.js";
import homeRoutes from "./routes/HomeRoutes.js";

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const allowedOrigins = [
  "http://localhost:5173",
  "https://radio-project-lemon.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("❌ CORS blocked: " + origin));
      }
    },
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.json({ ok: true, msg: "Radio API running 🚀" });
});

app.use("/api/stations", stationRoutes);
app.use("/api/home", homeRoutes);

export default app;
