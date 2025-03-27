import express from "express";
import UrlController from "../controllers/UrlController.js";

const router = express.Router();

router.get("/", UrlController.loadHomePage); // Load homepage
router.post("/shorten", UrlController.shortenUrl); // Shorten URL
router.get("/:shortUrl", UrlController.redirectUrl); // Redirect to original URL
router.get("/stats/:shortUrl", UrlController.getUrlStats); // Get stats

export default router;
