class GetUrlStatsUseCase {
  constructor(urlService) {
    this.urlService = urlService;
  }

  async execute(shortUrl) {
    return await this.urlService.getUrlStats(shortUrl);
  }
}

export default GetUrlStatsUseCase;