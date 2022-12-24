import React from 'react';
import NextLink from 'next/link';

interface ILink {
  href: string;
  children: JSX.Element | JSX.Element[];
}

const Link: React.FC<ILink> = ({ href, children }) => {
  return (
    <NextLink href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      {children}
    </NextLink>
  );
};

export default Link;
