import React, { useState } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Heart: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Button onClick={() => setIsLiked((isLiked) => !isLiked)}>
      <FontAwesomeIcon
        icon={faHeart}
        style={
          !isLiked
            ? { ...heartStyles, color: '#FFFFFF' }
            : { ...heartStyles, color: '#FF0000' }
        }
      />
    </Button>
  );
};

const Button = styled.button`
  background: none;
  border: none;
`;

const heartStyles: React.CSSProperties = {
  fontSize: '30px',
  stroke: '#000000',
  strokeWidth: '50px',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
};

export default Heart;
