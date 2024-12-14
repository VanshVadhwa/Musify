import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware";
import { createSong } from "../controllers/admin.controller";

const router = Router();

router.get("/songs", protectRoute, requireAdmin, createSong);

export default router;