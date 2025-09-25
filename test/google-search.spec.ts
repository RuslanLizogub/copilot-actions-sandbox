import { expect } from 'chai';
import { GoogleClient } from './clients/googleClient';

const google = new GoogleClient();

describe('Google GPT Codex search and BANANA', () => {
  it('loads the Google home page', async () => {
    try {
      const res = await google.loadHomePage();
      expect(res.status).to.equal(200);
      expect(res.text).to.include('<title>Google</title>');
    } catch (err) {
      expect.fail(`Failed to load Google home page: ${err instanceof Error ? err.message : String(err)}`);
    }
  });

  it('returns results for GPT Codex', async () => {
    try {
      const res = await google.search('GPT Codex');
      expect(res.status).to.equal(200);
      expect(res.text.toLowerCase()).to.include('codex');
    } catch (err) {
      expect.fail(`Failed to fetch search results: ${err instanceof Error ? err.message : String(err)}`);
    }
  });
});
