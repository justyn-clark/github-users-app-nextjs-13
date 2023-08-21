import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../Header';

describe('----- Header Component -----', () => {
  it('renders the Header component', () => {
    render(<Header title="Home Page" />);
    const h1 = document.querySelector('h1');
    expect(h1).toBeInTheDocument();
  });
});
