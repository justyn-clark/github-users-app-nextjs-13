import { render, screen } from '@testing-library/react';

import UserPage from '../page';

jest.mock('@/utils/api', () => ({
  getUser: jest.fn().mockResolvedValue({ login: 'testuser', followers: 100, id: 12345 }),
  getFollowers: jest.fn().mockResolvedValue([
    { id: 1, avatar_url: 'https://example.com/avatar1.jpg', login: 'follower1' },
    { id: 2, avatar_url: 'https://example.com/avatar2.jpg', login: 'follower2' },
    { id: 3, avatar_url: 'https://example.com/avatar3.jpg', login: 'follower3' },
  ]),
  getOrganizations: jest.fn().mockResolvedValue([]),
  getRepos: jest.fn().mockResolvedValue([]),
}));

describe('UserPage', () => {
  it('renders user page correctly', async () => {
    render(await UserPage({ params: { username: 'testuser' } }));

    const userPageElement = await screen.findByTestId('user-page');
    expect(userPageElement).toBeInTheDocument();
  });
});
