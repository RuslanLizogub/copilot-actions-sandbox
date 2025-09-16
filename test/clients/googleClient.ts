import superagent, { Response } from 'superagent';

const DEFAULT_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Accept-Language': 'en-US,en;q=0.9'
};

export class GoogleClient {
  async loadHomePage(): Promise<Response> {
    return superagent.get('https://www.google.com').set(DEFAULT_HEADERS);
  }

  async search(query: string): Promise<Response> {
    return superagent
      .get('https://www.google.com/search')
      .query({ q: query })
      .set(DEFAULT_HEADERS);
  }
}
