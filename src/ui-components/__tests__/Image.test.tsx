import { render, screen } from '@testing-library/react';
import type { ImageProps } from 'next/image';

import Image from '../Image';

jest.mock('next/image', () => ({ src, alt }: ImageProps) => <img src={src as string} alt={alt} />);

describe('----- Image Component -----', () => {
  it('should display an Image', () => {
    render(<Image alt="Avatar" src="/image.jpg" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/image.jpg');
    expect(img).toHaveAttribute('alt', 'Avatar');
  });
});
