import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GitHubOrganization } from '../../types/GitHubOrganization';

import Organizations from '../Organizations';

describe('----- Organizations Component -----', () => {
  it('renders the Organizations component with correct titles and images', () => {
    const mockOrgs = [
      {
        id: 1,
        avatar_url: 'https://example.com/org1.jpg',
      },
      {
        id: 2,
        avatar_url: 'https://example.com/org2.jpg',
      },
      {
        id: 3,
        avatar_url: 'https://example.com/org3.jpg',
      },
      {
        id: 4,
        avatar_url: 'https://example.com/org4.jpg',
      },
      {
        id: 5,
        avatar_url: 'https://example.com/org5.jpg',
      },
    ];

    render(<Organizations orgs={mockOrgs} />);

    const titleElement = screen.getByText(/Organizations/i);
    expect(titleElement).toBeInTheDocument();

    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(5);
    imageElements.forEach((imageElement, index) => {
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', mockOrgs[index].avatar_url);
      expect(imageElement).toHaveAttribute('alt', 'follower avatar image');
    });
  });

  it('renders "No orgs available" when there are no organizations', () => {
    const emptyOrgs: GitHubOrganization[] = [];

    render(<Organizations orgs={emptyOrgs} />);

    const noOrgsElement = screen.getByText(/No orgs available/i);
    expect(noOrgsElement).toBeInTheDocument();
  });
});
