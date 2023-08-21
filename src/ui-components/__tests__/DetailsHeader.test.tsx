import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DetailsHeader from '../DetailsHeader';

const mockUser = {
  name: 'P Funk',
  avatar_url: 'https://example.com/avatar.jpg',
  id: 1,
  login: 'coolDevPF',
  alt: 'Avatar for',
};

describe('----- DetailsHeader Component -----', () => {
  it('renders the user name and image correctly', () => {
    render(<DetailsHeader user={mockUser} />);

    const userNameElement = document.querySelector('h1');
    expect(userNameElement).toBeInTheDocument();
    expect(userNameElement).toHaveTextContent(mockUser.name);

    const imageElement = document.querySelector('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockUser.avatar_url);
    expect(imageElement).toHaveAttribute('alt', `${mockUser.alt} ${mockUser.login}`);
    expect(imageElement).toHaveAttribute('height', '460');
    expect(imageElement).toHaveAttribute('width', '460');
    expect(imageElement).toHaveAttribute('priority', 'true');
  });
});
