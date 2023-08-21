import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { GitHubUser } from '../../types/GitHubUser';
import { getUsers } from '../api';
import { API_URL } from '../../constants';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('API Helper Functions', () => {
  it('should fetch users', async () => {
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
    server.use(rest.get(`${API_URL}/users`, (_, res, ctx) => res(ctx.json(users))));

    const result = await getUsers<GitHubUser[]>('/users');
    expect(result).toEqual(users);
  });

  it('should handle fetch errors', async () => {
    const path = '/users';
    server.use(rest.get(`${API_URL}${path}`, (_, res, ctx) => res(ctx.status(500))));

    await expect(getUsers<GitHubUser[]>(path)).rejects.toThrow('Failed to fetch data');
  });
});
