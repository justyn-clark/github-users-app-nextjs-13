import { render, screen } from '@testing-library/react';

import UserList from '../UserList';

describe('----- UserList Component -----', () => {
  const mockUsers = [
    {
      id: 1,
      login: 'user1',
      avatar_url: 'https://example.com/avatar1.jpg',
    },
    {
      id: 2,
      login: 'user2',
      avatar_url: 'https://example.com/avatar2.jpg',
    },
  ];

  const getLinkByText = (text: string) => screen.getByRole('link', { name: new RegExp(text, 'i') });

  it('renders a list of users', () => {
    render(<UserList users={mockUsers} />);
    const userListItems = screen.getAllByRole('listitem');

    expect(userListItems).toHaveLength(mockUsers.length);
  });

  it('displays the correct user names', () => {
    render(<UserList users={mockUsers} />);
    mockUsers.forEach((user) => {
      const userName = screen.getByText(user.login);
      expect(userName).toBeInTheDocument();
    });
  });

  it('contains a link for each user', () => {
    render(<UserList users={mockUsers} />);
    mockUsers.forEach((user) => {
      const userLink = getLinkByText(user.login);
      expect(userLink).toHaveAttribute('href', `/user/${user.login}`);
    });
  });

  it('displays the user avatars', () => {
    render(<UserList users={mockUsers} />);
    mockUsers.forEach((user) => {
      const userAvatars = screen.queryAllByRole('img', { name: `Avatar for ${user.login}` });
      expect(userAvatars).toHaveLength(1);
    });
  });
});
