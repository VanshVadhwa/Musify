import express from "express";
import dotenv from "dotenv";
import path from "path";
import fileUpload from "express-fileupload"
import { clerkMiddleware } from '@clerk/express'
import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stat.route.js";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(clerkMiddleware()); // this will allow us to access (req.auth.userId and others...)
app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:path.join(__dirname, "tmp"),
  createParentPath:true,
  limits:{
    fileSize: 10*1024*1024, // 10 MB
    
  }
}));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at http://localhost:${PORT}`);
});
