import React from 'react';
import styled from 'styled-components';
import Link from '../components/Link';

interface IPinkButton {
  children: JSX.Element | JSX.Element[];
  href: string;
  width: string;
}

const PinkButton: React.FC<IPinkButton> = ({ children, href, width }) => {
  return (
    <StyledPinkButton width={width}>
      <Link href={`/${href}`}>{children}</Link>
    </StyledPinkButton>
  );
};

interface IStyledPinkButton {
  width: string;
}

const StyledPinkButton = styled.button<IStyledPinkButton>`
  height: 60px;
  width: ${(props) => props.width};
  padding: 10px;
  border-radius: 50px;
  background-color: #f53770;
  border: none;
  transition: background-color 0.2s ease;
  :hover {
    background-color: #e41e5a;
  }
`;

export default PinkButton;
