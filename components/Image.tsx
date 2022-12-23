import React from 'react';
import NextImage from 'next/image';

interface IImage {
  src: string;
  alt: string;
  height: number;
  width: number;
  borderRadius: number;
}

const Image: React.FC<IImage> = ({ src, alt, height, width, borderRadius }) => {
  return (
    <div style={{ borderRadius: `${borderRadius}px`, overflow: 'hidden' }}>
      <NextImage src={src} alt={alt} height={height} width={width} />
    </div>
  );
};

export default Image;
