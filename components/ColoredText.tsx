import React from 'react';
import styled from 'styled-components';

interface IColoredText {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: number;
}

const ColoredText: React.FC<IColoredText> = ({
  text,
  fontSize,
  fontFamily,
  fontWeight,
}) => {
  return (
    <ColoredTextContainer
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
    >
      {text}
    </ColoredTextContainer>
  );
};

interface IFonts {
  fontSize: string;
  fontFamily: string;
  fontWeight: number;
}

const ColoredTextContainer = styled.span<IFonts>`
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  display: inline;
  background: linear-gradient(
    92.11deg,
    #ff0149 33.79%,
    #da46df 42.35%,
    #9a4aff 52.97%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export default ColoredText;
