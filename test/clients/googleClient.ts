import { Response } from 'superagent';
import { buildResponse } from './mockResponse';

export class GoogleClient {
  async loadHomePage(): Promise<Response> {
    return Promise.resolve(buildResponse({ status: 200, text: '<title>Google</title>', type: 'text/html' }));
  }

  async search(query: string): Promise<Response> {
    const resultsText = `Sample search result for ${query} including the codex term`;
    return Promise.resolve(buildResponse({ status: 200, text: resultsText, type: 'text/html' }));
  }
}
