import React from 'react';
import Heart from './Heart';

const AppreciationList: React.FC = () => {
  return (
    <div id='appreciation-list' style={appreciationListStyles}>
      <ul style={ulStyles}>
        <li style={liStyles}>📕 Patty and Scotty&apos;s mems v2022</li>
        <li style={liStyles}>🍽 chill dinner w ur fam @ Spago</li>
        <li style={liStyles}>👫 fun times at Pepperdine and the Grove</li>
      </ul>
      <div style={heartContainerStyles}>
        <Heart />
      </div>
    </div>
  );
};

const appreciationListStyles: React.CSSProperties = {
  height: '320px',
  width: '480px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const ulStyles: React.CSSProperties = {
  fontSize: '30px',
  fontFamily: 'Mont',
  fontWeight: 700,
};

const liStyles: React.CSSProperties = {
  margin: '15px 0px',
};

const heartContainerStyles: React.CSSProperties = {
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
};

export default AppreciationList;
