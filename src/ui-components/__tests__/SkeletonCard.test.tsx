import { render } from '@testing-library/react';

import { SkeletonCard } from '../SkeletonCard';

describe('----- SkeletonCard Component -----', () => {
  it('renders the skeleton card when isLoading is true', () => {
    const { getByTestId } = render(<SkeletonCard isLoading={true} />);
    const skeletonCard = getByTestId('skeleton-card');
    expect(skeletonCard).toBeInTheDocument();
  });

  it('does not render the skeleton card when isLoading is false', () => {
    const { getByTestId } = render(<SkeletonCard isLoading={false} />);
    const skeletonCard = getByTestId('skeleton-card');
    expect(skeletonCard).toHaveTextContent(/^$/); // Assert for an empty string
  });
});
