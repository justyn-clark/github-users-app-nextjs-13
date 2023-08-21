import { render, screen } from '@testing-library/react';
import Repos from '../Repos';

const mockRepos = [
  {
    id: 1,
    full_name: 'user/repo1',
    html_url: 'https://github.com/user/repo1',
    description: 'Test repo 1',
    stargazers_count: 10,
    forks: 5,
  },
  {
    id: 2,
    full_name: 'user/repo2',
    html_url: 'https://github.com/user/repo2',
    description: 'Test repo 2',
    stargazers_count: 15,
    forks: 8,
  },
];

describe('----- Repos Component -----', () => {
  it('renders the repos correctly', () => {
    render(<Repos repos={mockRepos} />);

    const headingElement = screen.getByText('Repositories');
    expect(headingElement).toBeInTheDocument();

    const repoNames = screen.getAllByText(/user\/repo/i);
    expect(repoNames).toHaveLength(mockRepos.length);

    const repoDescriptions = screen.getAllByText(/Test repo/i);
    expect(repoDescriptions).toHaveLength(mockRepos.length);

    const stars = screen.getAllByTestId('test-stars');
    expect(stars).toHaveLength(mockRepos.length);
    mockRepos.forEach((repo, index) => {
      expect(stars[index]).toHaveTextContent(repo.stargazers_count.toString());
    });

    const forks = screen.getAllByText(/Forks/i);
    expect(forks).toHaveLength(mockRepos.length);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mockRepos.length);
    mockRepos.forEach((repo, index) => {
      expect(links[index]).toHaveAttribute('href', repo.html_url);
    });
  });

  it('displays "No repos available" when there are no repos', () => {
    render(<Repos repos={[]} />);

    const noReposText = screen.getByText('No repos available');
    expect(noReposText).toBeInTheDocument();
  });
});
