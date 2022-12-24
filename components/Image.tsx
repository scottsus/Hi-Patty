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
  margin?: string;
}

const Image: React.FC<IImage> = ({
  src,
  alt,
  height,
  width,
  borderRadius,
  borderWidth,
  margin,
}) => {
  return (
    <ImageContainer
      height={height}
      width={width}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      margin={margin}
    >
      <NextImage src={src} alt={alt} height={height} width={width} />
    </ImageContainer>
  );
};

interface IImageContainer {
  height: number;
  width: number;
  borderRadius: number;
  borderWidth?: number;
  margin?: string;
}

const ImageContainer = styled.div<IImageContainer>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: ${(props) => props.borderRadius}px;
  border: ${(props) => (props.borderWidth ? props.borderWidth : 0)}px solid
    #000000;
  margin: ${(props) => props.margin};
  overflow: hidden;
`;

export default Image;
