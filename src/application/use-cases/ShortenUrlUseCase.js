class ShortenUrlUseCase {
  constructor(urlService) {
    this.urlService = urlService;
  }

  async execute(originalUrl, shortUrlGenerator) {
    const shortUrl = shortUrlGenerator.generateShortUrl();
    return await this.urlService.shortenUrl(originalUrl, shortUrl);
  }
}

export default ShortenUrlUseCase;