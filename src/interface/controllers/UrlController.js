import ShortenUrlUseCase from "../../application/use-cases/ShortenUrlUseCase.js";
import RedirectUrlUseCase from "../../application/use-cases/RedirectUrlUseCase.js";
import UrlService from "../../domain/services/UrlService.js";
import UrlRepositoryImpl from "../../infrastructure/repositories/UrlRepositoryImpl.js";
import ShortUrlGeneratorService from "../../infrastructure/services/ShortUrlGeneratorService.js";

const urlService = new UrlService(UrlRepositoryImpl);
const shortUrlGenerator = new ShortUrlGeneratorService(urlService);
const shortenUrlUseCase = new ShortenUrlUseCase(urlService);
const redirectUrlUseCase = new RedirectUrlUseCase(urlService);

class UrlController {
  static async shortenUrl(req, res) {
    const { originalUrl } = req.body;
    const shortened = await shortenUrlUseCase.execute(
      originalUrl,
      ShortUrlGeneratorService
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
    const urlData = await getUrlStatsUseCase.execute(shortUrl);
    if (urlData) {
      res.json({ originalUrl: urlData.originalUrl, clicks: urlData.clicks });
    } else {
      res.status(404).json({ error: "URL Not Found" });
    }
  }

  static async loadHomePage(req, res) {
    res.render("index");
  }
}

export default UrlController;