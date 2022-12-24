import React from 'react';
import NextImage from 'next/image';

interface IImage {
  src: string;
  alt: string;
  height: number;
  width: number;
  borderRadius: number;
  borderWidth?: number;
}

const Image: React.FC<IImage> = ({
  src,
  alt,
  height,
  width,
  borderRadius,
  borderWidth,
}) => {
  return (
    <div
      style={{
        height: height,
        width: width,
        borderRadius: `${borderRadius}px`,
        border: `${borderWidth ? borderWidth : 0}px solid #000000`,
        overflow: 'hidden',
      }}
    >
      <NextImage src={src} alt={alt} height={height} width={width} />
    </div>
  );
};

export default Image;
