import React from 'react';

interface IPinkButton {
  text: string;
  width: string;
}

const PinkButton: React.FC<IPinkButton> = ({ text, width }) => {
  return (
    <button style={pinkButtonStyles}>
      <h1 style={{ ...textStyles, width: width }}>{text}</h1>
    </button>
  );
};

const pinkButtonStyles: React.CSSProperties = {
  height: '80px',
  borderRadius: '50px',
  backgroundColor: '#F53770',
  border: 'none',
};

const textStyles: React.CSSProperties = {
  fontSize: '30px',
  fontFamily: 'Arial',
  fontWeight: 500,
  color: '#EAEAEA',
};

export default PinkButton;
