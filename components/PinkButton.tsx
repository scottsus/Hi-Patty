import React from 'react';
import styled from 'styled-components';
import Link from '../components/Link';

interface IPinkButton {
  children: JSX.Element | JSX.Element[];
  href: string;
}

const PinkButton: React.FC<IPinkButton> = ({ children, href }) => {
  return (
    <StyledPinkButton>
      <Link href={`/${href}`}>{children}</Link>
    </StyledPinkButton>
  );
};

const StyledPinkButton = styled.button`
  height: 60px;
  padding: 10px 50px;
  border-radius: 50px;
  background-color: #f53770;
  border: none;
  transition: background-color 0.2s ease;
  :hover {
    background-color: #e41e5a;
  }

  @media (max-width: 450px) {
    height: 50px;
    padding: 10px 30px;
  }
`;

export default PinkButton;
