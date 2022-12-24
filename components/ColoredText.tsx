import React from 'react';
import styled from 'styled-components';

interface IColoredText {
  text: string;
}

const ColoredText: React.FC<IColoredText> = ({ text }) => {
  return <ColoredTextContainer>{text}</ColoredTextContainer>;
};

const ColoredTextContainer = styled.span`
  font-weight: 900;
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
