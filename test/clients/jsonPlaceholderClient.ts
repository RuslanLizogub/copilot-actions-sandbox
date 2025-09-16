import superagent, { Response } from 'superagent';

type CreateUserPayload = {
  name: string;
};

export class JsonPlaceholderClient {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  async createUser(payload: CreateUserPayload): Promise<Response> {
    return superagent.post(`${this.baseUrl}/users`).send(payload);
  }

  async getPost(id: number): Promise<Response> {
    return superagent.get(`${this.baseUrl}/posts/${id}`);
  }
}
