import React, { useState } from 'react';
import Link from './Link';

interface IBackButton {
  children: JSX.Element | JSX.Element[];
  href: string;
  width: string;
}

const BackButton: React.FC<IBackButton> = ({ children, href, width }) => {
  const [isHovering, setIsHovering] = useState(false);
  const toggle = () => setIsHovering((isHovering) => !isHovering);
  return (
    <button
      style={
        !isHovering
          ? { ...backButtonStyles, backgroundColor: '#FFFFFF', width: width }
          : { ...backButtonStyles, backgroundColor: '#D9D9D9', width: width }
      }
      onMouseEnter={toggle}
      onMouseLeave={toggle}
    >
      <Link href={`/${href}`}>{children}</Link>
    </button>
  );
};

const backButtonStyles: React.CSSProperties = {
  height: '60px',
  padding: '10px',
  borderRadius: '50px',
  border: 'none',
  transition: 'background-color 0.2s ease',
};

export default BackButton;
