import React from 'react';
import styled from 'styled-components';
import Link from './Link';

interface IBackButton {
  children: JSX.Element | JSX.Element[];
  href: string;
  width: string;
}

const BackButton: React.FC<IBackButton> = ({ children, href, width }) => {
  const Button = styled.button`
    height: 60px;
    width: ${width};
    padding: 10px;
    border-radius: 50px;
    border: none;
    background-color: #ffffff;
    transition: background-color 0.2s ease;
    :hover {
      background-color: #d9d9d9;
    }

    @media (max-width: 450px) {
      height: 50px;
      width: 50%;
      font-size: 17px;
      .faLeft {
        font-size: 17px !important;
      }
    }
  `;

  return (
    <Button>
      <Link href={`/${href}`}>{children}</Link>
    </Button>
  );
};

export default BackButton;
