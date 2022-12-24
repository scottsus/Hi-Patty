import React, { useState } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Heart: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <button
      onClick={() => setIsLiked((isLiked) => !isLiked)}
      style={heartContainerStyles}
    >
      <FontAwesomeIcon
        icon={faHeart}
        style={
          !isLiked
            ? { ...heartStyles, color: '#FFFFFF' }
            : { ...heartStyles, color: '#FF0000' }
        }
      />
    </button>
  );
};

const heartContainerStyles: React.CSSProperties = {
  background: 'none',
  border: 'none',
};

const heartStyles: React.CSSProperties = {
  fontSize: '30px',
  stroke: '#000000',
  strokeWidth: '50px',
  cursor: 'pointer',
};

export default Heart;
