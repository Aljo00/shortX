import { nanoid } from "nanoid";

class ShortUrlGeneratorService {
  static generateShortUrl() {
    return nanoid(6); // Generates a random string of 6 characters
  }
}

export default ShortUrlGeneratorService;