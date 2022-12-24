import React from 'react';
import styled from 'styled-components';
import Link from '../components/Link';

interface IPinkButton {
  children: JSX.Element | JSX.Element[];
  href: string;
  width: string;
}

const PinkButton: React.FC<IPinkButton> = ({ children, href, width }) => {
  const StyledPinkButton = styled.button`
    height: 60px;
    width: ${width};
    padding: 10px;
    border-radius: 50px;
    background-color: #f53770;
    border: none;
    transition: background-color 0.2s ease;
    :hover {
      background-color: #e41e5a;
    }
  `;

  return (
    <StyledPinkButton>
      <Link href={`/${href}`}>{children}</Link>
    </StyledPinkButton>
  );
};

export default PinkButton;
