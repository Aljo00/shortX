import UrlSchema from "../database/UrlSchema.js";
import UrlRepository from "../../domain/repositories/UrlRepository.js";

class UrlRepositoryImpl extends UrlRepository {
  async createUrl(originalUrl, shortUrl) {
    return await UrlSchema.create({
      originalUrl,
      shortUrl,
    });
  }

  async getUrl(shortUrl) {
    return await UrlSchema.findOne({ shortUrl });
  }

  async increaseClickCount(shortUrl) {
    return await UrlSchema.findOneAndUpdate(
      { shortUrl },
      { $inc: { clicks: 1 } },
      { new: true }
    );
  }
}

export default UrlRepositoryImpl;
