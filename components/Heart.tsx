import React, { useEffect, useState } from 'react';
import firestore from '../lib/firebase';
import styled from 'styled-components';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IHeart {
  path: string;
}

const Heart: React.FC<IHeart> = ({ path }) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLiked = async () => {
    const docRef = firestore.collection('stories').doc(path);
    docRef.update({ liked: !isLiked });
    setIsLiked((isLiked) => !isLiked);
  };

  useEffect(() => {
    const docRef = firestore.collection('stories').doc(path);
    docRef
      .get()
      .then((doc) => doc.data())
      .then((data) => setIsLiked((isLiked) => data!.liked));
  });

  return (
    <Button onClick={toggleLiked}>
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
