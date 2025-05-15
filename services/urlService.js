const Url = require("../models/Url ");
const generateShortCode = require("../utils/generateCode");

async function createShortUrl(originalUrl) {
  let shortCode = generateShortCode();

  // Ensure unique shortCode
  while (await Url.findOne({ shortCode })) {
    shortCode = generateShortCode();
  }

  const newUrl = new Url({ originalUrl, shortCode });
  await newUrl.save();

  return newUrl;
}

async function getOriginalUrl(shortCode) {
  return await Url.findOne({ shortCode });
}

module.exports = {
  createShortUrl,
  getOriginalUrl,
};
