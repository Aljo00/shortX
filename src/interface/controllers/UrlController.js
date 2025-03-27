import ShortenUrlUseCase from "../../application/use-cases/ShortenUrlUseCase.js";
import RedirectUrlUseCase from "../../application/use-cases/RedirectUrlUseCase.js";
import GetUrlStatsUseCase from "../../application/use-cases/GetUrlStatsUseCase.js"; // ✅ Added
import UrlService from "../../domain/services/UrlService.js";
import UrlRepositoryImpl from "../../infrastructure/repositories/UrlRepositoryImpl.js";
import ShortUrlGeneratorService from "../../infrastructure/services/ShortUrlGeneratorService.js";

// ✅ Properly Instantiate the Repository and Services
const urlRepository = new UrlRepositoryImpl();
const urlService = new UrlService(urlRepository);
const shortUrlGenerator = new ShortUrlGeneratorService(urlService);
const shortenUrlUseCase = new ShortenUrlUseCase(urlService);
const redirectUrlUseCase = new RedirectUrlUseCase(urlService);
const getUrlStatsUseCase = new GetUrlStatsUseCase(urlService); // ✅ Added

class UrlController {
  static async shortenUrl(req, res) {
    const { originalUrl } = req.body;
    const shortened = await shortenUrlUseCase.execute(
      originalUrl,
      shortUrlGenerator // ✅ Pass an instance, not a class
    );
    res.render("result", {
      shortUrl: `${req.protocol}://${req.get("host")}/${shortened.shortUrl}`,
    });
  }

  static async redirectUrl(req, res) {
    const { shortUrl } = req.params;
    const originalUrl = await redirectUrlUseCase.execute(shortUrl);
    if (originalUrl) {
      res.redirect(originalUrl);
    } else {
      res.status(404).json({ error: "URL Not Found" });
    }
  }

  static async getUrlStats(req, res) {
    const { shortUrl } = req.params;
    const urlData = await getUrlStatsUseCase.execute(shortUrl); // ✅ Fixed
    if (urlData) {
      res.json({ originalUrl: urlData.originalUrl, clicks: urlData.clicks });
    } else {
      res.status(404).json({ error: "URL Not Found" });
    }
  }

  static async loadHomePage(req, res) {
    res.render("home");
  }
}

export default UrlController;
