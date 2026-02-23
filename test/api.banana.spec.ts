import { expect } from 'chai';
import { JsonPlaceholderClient } from './clients/jsonPlaceholderClient';

const jsonPlaceholder = new JsonPlaceholderClient();

describe('User CRUD and banana', () => {
  it('should create a user', async () => {
    try {
      const res = await jsonPlaceholder.createUser({ name: 'Test User' });
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property('name', 'Test User');
      expect(res.body).to.have.property('id').that.is.a('number');
    } catch (err) {
      expect.fail(`Network or API error: ${err instanceof Error ? err.message : String(err)}`);
    }
  });
});

describe('Document CRUD and BANANA', () => {
  it('should get a document', async () => {
    const res = await jsonPlaceholder.getPost(1);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', 1);
  });
});
