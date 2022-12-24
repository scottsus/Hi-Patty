import React, { useState } from 'react';
import Link from '../components/Link';

interface IPinkButton {
  children: JSX.Element | JSX.Element[];
  href: string;
  width: string;
}

const PinkButton: React.FC<IPinkButton> = ({ children, href, width }) => {
  const [isHovering, setIsHovering] = useState(false);
  const toggle = () => setIsHovering((isHovering) => !isHovering);
  return (
    <button
      style={
        !isHovering
          ? { ...pinkButtonStyles, backgroundColor: '#F53770', width: width }
          : { ...pinkButtonStyles, backgroundColor: '#E41E5A', width: width }
      }
      onMouseEnter={toggle}
      onMouseLeave={toggle}
    >
      <Link href={`/${href}`}>{children}</Link>
    </button>
  );
};

const pinkButtonStyles: React.CSSProperties = {
  height: '60px',
  padding: '10px',
  borderRadius: '50px',
  backgroundColor: '#F53770',
  border: 'none',
  transition: 'background-color 0.2s ease',
};

export default PinkButton;
