import React from 'react';
import AppreciationList from '../components/AppreciationList';
import ColoredText from '../components/ColoredText';
import Image from '../components/Image';
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
        <Image
          src='/snow.jpeg'
          alt='random pic of the day'
          width={360}
          height={360}
          borderRadius={20}
          margin='20px auto 0px'
        />
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
  margin: 110px auto 60px;

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

const Buttons = styled.div`
  margin-top: 70px;
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
