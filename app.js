import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import UrlRoutes from "./src/interface/routes/UrlRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Static file serving - fix for CSS and JS files
app.use("/css", express.static(path.join(__dirname, "src/public/css")));
app.use("/scripts", express.static(path.join(__dirname, "src/public/scripts")));
app.use(express.static(path.join(__dirname, "src/public")));

// Routes
app.use("/api/url", UrlRoutes);
app.use("/", UrlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,"0.0.0.0", () => console.log(`🚀 Server running on port ${PORT}`));
