import express from "express";
import { getHomeSections } from "../controllers/getHomeSections.js";

const router = express.Router();

router.get("/", getHomeSections);

export default router;