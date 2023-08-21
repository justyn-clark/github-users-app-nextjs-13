import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../page';

jest.mock('@/ui-components/UserList', () => () => <div data-testid="user-list">User List</div>);

jest.mock('@/utils/api', () => ({
  getUsers: jest.fn().mockResolvedValue([
    { login: 'user1', followers: 100, id: 12345 },
    { login: 'user2', followers: 200, id: 67890 },
  ]),
}));

describe('HomePage', () => {
  it('should render the header and the UserList component', async () => {
    await act(async () => {
      render(await HomePage());
    });

    const header = screen.getByRole('heading', {
      name: /Github Users/i,
    });
    expect(header).toBeInTheDocument();

    const userList = screen.getByTestId('user-list');
    expect(userList).toBeInTheDocument();
  });
});
