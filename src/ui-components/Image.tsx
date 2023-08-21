import React from 'react';
import NextImage from 'next/image';
import type { ImageProps } from 'next/image';

const Image = ({
  src = '',
  width,
  height,
  className,
  alt = '',
  fill,
  loading,
  quality,
  priority,
  title,
  onClick,
}: ImageProps) => {
  return (
    <NextImage
      src={src}
      width={width}
      height={height}
      className={className}
      alt={alt}
      fill={fill}
      loading={loading}
      quality={quality}
      priority={priority}
      title={title}
      onClick={onClick}
    />
  );
};

export default React.memo(Image);
