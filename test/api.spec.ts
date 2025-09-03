import superagent from 'superagent';
import { expect } from 'chai';

describe('User CRUD', () => {
  it('should create a user', async () => {
    // Example of user creation request
    const res = await superagent.post('https://jsonplaceholder.typicode.com/users')
      .send({ name: 'Test User' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('name', 'Test User');
  });
});

describe('Document CRUD', () => {
  it('should get a document', async () => {
    // Example of document retrieval request
    const res = await superagent.get('https://jsonplaceholder.typicode.com/posts/1');
    // expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', 1);
  });
});
