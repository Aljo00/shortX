const express = require("express");
const router = express.Router();

const urlController = require("../controllers/urlController");

router.get("/", (req, res) => {
  res.render("index");
});

// Route to create short URL (POST /shorten)
router.post("/shorten", urlController.shortenUrl);

// Route to redirect short code (GET /:code)
router.get("/:code", urlController.redirectToOriginal);

module.exports = router;
