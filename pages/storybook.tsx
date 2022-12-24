import React from 'react';
import styled from 'styled-components';

const StoryBook: React.FC = () => {
  const arr = [];
  const stories = arr.map((story) => <StoryPage />);
  return (
    <div id='storybook'>
      <h1 id='storybook-title'>Storybook</h1>
    </div>
  );
};

const StoryPage: React.FC = () => {
  return <div></div>;
};

export default StoryBook;
