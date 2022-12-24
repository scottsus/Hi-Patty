import React, { useEffect, useState } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

interface IHeart {
  isLikedInitially?: boolean;
}

const Heart: React.FC<IHeart> = ({ isLikedInitially }) => {
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    if (isLikedInitially) setIsLiked((isLiked) => true);
  }, [isLikedInitially]);
  return (
    <Button onClick={() => setIsLiked((isLiked) => !isLiked)}>
      <FontAwesomeIcon
        icon={faHeart}
        style={
          !isLiked
            ? { ...heartStyles, color: 'transparent' }
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
