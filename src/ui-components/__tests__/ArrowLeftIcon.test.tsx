import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ArrowLeftIcon } from '../ArrowLeftIcon';

describe('----- ArrowLeftIcon Component -----', () => {
  it('renders the ArrowLeftIcon component', () => {
    render(<ArrowLeftIcon />);
    const svgElement = document.querySelector('svg');

    expect(svgElement).toBeInTheDocument();
  });
});
