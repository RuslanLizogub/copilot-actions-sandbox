import { Response } from 'superagent';
import { buildResponse } from './mockResponse';

type CreateUserPayload = {
  name: string;
};

export class JsonPlaceholderClient {
  private nextId = 1;

  async createUser(payload: CreateUserPayload): Promise<Response> {
    const id = this.nextId++;
    return Promise.resolve(buildResponse({ status: 201, data: { ...payload, id } }));
  }

  async getPost(id: number): Promise<Response> {
    return Promise.resolve(
      buildResponse({
        status: 200,
        data: { id, title: 'Test Post', body: 'Lorem ipsum' } // matches JSONPlaceholder schema
      })
    );
  }
}
