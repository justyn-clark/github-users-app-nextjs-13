import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { GitHubUser } from '../../types/GitHubUser';
import { Follower } from '../../types/Follower';

import Followers from '../Followers';

const copy = {
  heading: 'Followers',
  noResultsText: 'No followers available',
};

const server = setupServer(
  rest.get('/api/followers/:username', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          avatar_url: 'https://example.com/avatar1.jpg',
        },
        {
          id: 2,
          avatar_url: 'https://example.com/avatar2.jpg',
        },
        {
          id: 3,
          avatar_url: 'https://example.com/avatar3.jpg',
        },
        {
          id: 4,
          avatar_url: 'https://example.com/avatar4.jpg',
        },
        {
          id: 5,
          avatar_url: 'https://example.com/avatar5.jpg',
        },
      ]),
    );
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('----- Renders the user followers and follower avatars correctly -----', async () => {
  const mockUser: GitHubUser = {
    login: 'testuser',
    followers: 100,
    id: 12345,
  };

  const mockFollowers: Follower[] = [
    {
      id: 1,
      avatar_url: 'https://example.com/avatar1.jpg',
      login: 'follower1',
    },
    {
      id: 2,
      avatar_url: 'https://example.com/avatar2.jpg',
      login: 'follower2',
    },
    {
      id: 3,
      avatar_url: 'https://example.com/avatar3.jpg',
      login: 'follower3',
    },
    {
      id: 4,
      avatar_url: 'https://example.com/avatar4.jpg',
      login: 'follower4',
    },
    {
      id: 5,
      avatar_url: 'https://example.com/avatar5.jpg',
      login: 'follower5',
    },
  ];

  render(<Followers user={mockUser} followers={mockFollowers} />);

  const followersElement = screen.getByText(/100/i);
  expect(followersElement).toBeInTheDocument();

  const avatarElements = screen.getAllByRole('img');
  expect(avatarElements).toHaveLength(5);

  await waitFor(() => {
    avatarElements.forEach((avatarElement, index) => {
      expect(avatarElement).toBeInTheDocument();
      expect(avatarElement).toHaveAttribute('src', mockFollowers[index].avatar_url);
      expect(avatarElement).toHaveAttribute('alt', 'follower avatar image');
    });
  });

  const emptyFollowers: Follower[] = [];
  render(<Followers user={mockUser} followers={emptyFollowers} />);
  const noFollowersMessage = screen.queryAllByText(copy.noResultsText);
  expect(noFollowersMessage).toHaveLength(0);
});
