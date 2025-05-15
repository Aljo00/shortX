const urlService = require("../services/urlService");

async function shortenUrl(req, res) {
  const originalUrl = req.body.originalUrl; // from form input

  if (!originalUrl) {
    return res.status(400).send("Original URL is required");
  }

  try {
    const newUrl = await urlService.createShortUrl(originalUrl);
    res.render("result", {
      originalUrl: newUrl.originalUrl,
      shortUrl: `http://localhost:${process.env.PORT}/${newUrl.shortCode}`,
    });
  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).send("Internal server error");
  }
}

async function redirectToOriginal(req, res) {
  const { code } = req.params;

  try {
    const urlData = await urlService.getOriginalUrl(code);
    if (!urlData) return res.status(404).send("URL not found");

    res.redirect(urlData.originalUrl);
  } catch (error) {
    console.error("Error redirecting:", error);
    res.status(500).send("Internal server error");
  }
}

module.exports = {
  shortenUrl,
  redirectToOriginal,
};
