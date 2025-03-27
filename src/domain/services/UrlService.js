class UrlService {
  constructor(urlRepository) {
    this.urlRepository = urlRepository;
  }

  async shortenUrl(originalUrl, shortUrl) {
    return await this.urlRepository.createUrl(originalUrl, shortUrl);
  }

  async getOriginalUrl(shortUrl) {
    const url = await this.urlRepository.getUrl(shortUrl);
    if (url) {
      await this.urlRepository.increaseClickCount(shortUrl);
      return url.originalUrl;
    }
    return null;
  }
}

export default UrlService;