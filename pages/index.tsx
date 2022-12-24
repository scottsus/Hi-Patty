import React from 'react';
import styled from 'styled-components';
import AnimatedHandWave from '../components/AnimatedHandWave';
import ColoredText from '../components/ColoredText';
import NextImage from 'next/image';
import PinkButton from '../components/PinkButton';

const Home: React.FC = () => {
  return (
    <LandingPage>
      <Pictures>
        <ImageWrapper>
          <NextImage src='/snow.jpeg' alt='patty' width={120} height={120} />
        </ImageWrapper>
        <ImageWrapper>
          <NextImage src='/snow.jpeg' alt='scotty' width={120} height={120} />
        </ImageWrapper>
      </Pictures>
      <Title>
        <AnimatedHandWave /> <HiPatty>Hi Patty</HiPatty>
      </Title>
      <Subtitle>
        <Everyday>
          Everyday I&apos;ll note down at least one thing I&apos;m{' '}
          <ColoredText text='grateful' /> to you for
        </Everyday>
      </Subtitle>
      <PinkButton href='today'>
        <Appreciation>APPRECIATION OF THE DAY</Appreciation>
      </PinkButton>
      <DesignedBy>© Designed and Built by Scotty Sus</DesignedBy>
    </LandingPage>
  );
};

const LandingPage = styled.div`
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

const Pictures = styled.div`
  margin-top: 30px;
  margin-left: auto;
  margin-right: 0px;
  width: 260px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 450px) {
    width: 170px;
  }
`;

const ImageWrapper = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 450px) {
    height: 80px;
    width: 80px;
  }
`;

const Title = styled.div`
  margin: 50px auto 20px;
`;

const HiPatty = styled.h1`
  display: inline;
  font-size: 70px;
  font-family: Mont, Helvetica;
  font-weight: 900;
  margin-left: 20px;

  @media (max-width: 450px) {
    font-size: 50px;
  }
`;

const Subtitle = styled.div`
  width: 90%;
  margin: 0px auto 60px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const Everyday = styled.h2`
  font-size: 40px;
  font-family: Mont, Helvetica;
  font-weight: 600;
  text-align: center;
  margin: 0px auto;

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

const Appreciation = styled.h3`
  margin: 0px auto;
  font-size: 30px;
  font-family: Arial;
  font-weight: 500;
  color: #eaeaea;

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

const DesignedBy = styled.p`
  font-size: 25px;
  font-family: Arial;
  font-weight: 400;
  margin-top: auto;
  margin-bottom: 70px;

  @media (max-width: 450px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export default Home;
