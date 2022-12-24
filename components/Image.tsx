import React from 'react';
import NextImage from 'next/image';
import styled from 'styled-components';

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
  const ImageContainer = styled.div`
    height: ${height}px;
    width: ${width}px;
    border-radius: ${borderRadius}px;
    border: ${borderWidth ? borderWidth : 0}px solid #000000;
    overflow: hidden;
  `;

  return (
    <ImageContainer>
      <NextImage src={src} alt={alt} height={height} width={width} />
    </ImageContainer>
  );
};

export default Image;
