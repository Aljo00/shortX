class RedirectUrlUseCase {
  constructor(urlService) {
    this.urlService = urlService;
  }

  async execute(shortUrl){
    return await this.urlService.getOriginalUrl(shortUrl);
  }
}

export default RedirectUrlUseCase;