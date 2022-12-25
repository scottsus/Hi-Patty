import React from 'react';
import AppreciationList from '../components/AppreciationList';
import ColoredText from '../components/ColoredText';
import NextImage from 'next/image';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PinkButton from '../components/PinkButton';
import BackButton from '../components/BackButton';
import styled from 'styled-components';

const TodayPage: React.FC = () => {
  return (
    <Today>
      <MostGratefulContainer>
        <MostGrateful>
          Today I am <ColoredText text='most grateful' /> for:
        </MostGrateful>
      </MostGratefulContainer>
      <MainBody>
        <AppreciationList />
        <ImageWrapper>
          <NextImage
            src='/snow.jpeg'
            alt='random pic of the day'
            width={360}
            height={360}
          />
        </ImageWrapper>
      </MainBody>
      <Buttons>
        <BackButton href='' width='340px'>
          <FontAwesomeIcon
            icon={faLeftLong}
            style={{ fontSize: '28px' }}
            className='faLeft'
          />
          <BackTo> Back to Home</BackTo>
        </BackButton>
        <PinkButton href='storybook'>
          <Story>STORYBOOK</Story>
        </PinkButton>
      </Buttons>
    </Today>
  );
};

const Today = styled.div`
  height: 100%;
  width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 450px) {
    width: 90%;
  }
`;

const MostGratefulContainer = styled.div`
  margin: 100px auto 20px;

  @media (max-width: 450px) {
    margin: 35px auto 0px;
  }
`;

const MostGrateful = styled.h1`
  font-size: 60px;
  font-family: Mont, Helvetica;
  font-weight: 800;
  margin: 0 auto;

  @media (max-width: 450px) {
    font-size: 40px;
    text-align: center;
  }
`;

const MainBody = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 450px) {
    flex-direction: column;
    width: 95%;
    margin: 10px auto;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  height: 360px;
  width: 360px;
  border-radius: 20px;
  margin: 20px auto 0px;
  overflow: hidden;

  @media (max-width: 450px) {
    height: 270px;
    width: 270px;
  }
`;

const Buttons = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 450px) {
    margin-top: 20px;
    width: 90%;
  }
`;

const BackTo = styled.h2`
  font-size: 30px;
  font-family: Mont, Helvetica;
  font-weight: 700;
  display: inline;

  @media (max-width: 450px) {
    font-size: 17px;
  }
`;

const Story = styled.h2`
  margin: 0 auto;
  font-size: 30px;
  font-family: Arial;
  font-weight: 500;
  color: #eaeaea;

  @media (max-width: 450px) {
    font-size: 17px;
  }
`;

export default TodayPage;
