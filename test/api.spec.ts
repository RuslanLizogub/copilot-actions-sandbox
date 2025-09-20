import { expect } from 'chai';
import { JsonPlaceholderClient } from './clients/jsonPlaceholderClient';

const jsonPlaceholder = new JsonPlaceholderClient();

describe('User CRUD', () => {
  it('should create a user', async () => {
    const res = await jsonPlaceholder.createUser({ name: 'Test User' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('name', 'Test User');
  });
});

describe('Document CRUD', () => {
  it('should get a document', async () => {
    const res = await jsonPlaceholder.getPost(1);
    expect(res.status).to.equal(200);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', 1);
  });
});
