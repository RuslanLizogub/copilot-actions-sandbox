import superagent from 'superagent';
import { expect } from 'chai';

describe('User CRUD and banana', () => {
  it('should create a user', async () => {
    // Example of user creation request
    try {
      const res = await superagent.post('https://jsonplaceholder.typicode.com/users')
        .send({ name: 'Test User' });
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property('name', 'Test User');
    } catch (err) {
      expect.fail(`Network or API error: ${err.message || err}`);
    }
  });
});

describe('Document CRUD and BANANA', () => {
  it('should get a document', async () => {
    // Example of document retrieval request
    const res = await superagent.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', 1);
  });
});
