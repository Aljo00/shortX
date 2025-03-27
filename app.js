import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import UrlRoutes from "./src/interface/routes/UrlRoutes.js";
import path from "path";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src/views"));

app.use(express.urlencoded({ extended: true }));

app.use("/api/url", UrlRoutes);
app.use("/", UrlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
