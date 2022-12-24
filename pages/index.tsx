import React from 'react';
import styled from 'styled-components';
import AnimatedHandWave from '../components/AnimatedHandWave';
import ColoredText from '../components/ColoredText';
import Image from '../components/Image';
import PinkButton from '../components/PinkButton';

const Home: React.FC = () => {
  return (
    <LandingPage>
      <Pictures>
        <Image
          src='/patty.jpeg'
          alt='patty'
          height={120}
          width={100}
          borderRadius={10}
        />
        <Image
          src='/scotty.jpeg'
          alt='scotty'
          height={120}
          width={100}
          borderRadius={10}
        />
      </Pictures>
      <Title>
        <AnimatedHandWave /> <HiPatty>Hi Patty</HiPatty>
      </Title>
      <Subtitle>
        <Everyday>
          Everyday I&apos;ll note down at least one thing I&apos;m{' '}
          <ColoredText
            text='grateful'
            fontSize={'40px'}
            fontFamily={'Mont, Helvetica'}
            fontWeight={800}
          />{' '}
          to you for
        </Everyday>
      </Subtitle>
      <PinkButton href='today' width={'550px'}>
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
`;

const Pictures = styled.div`
  margin-top: 30px;
  margin-left: auto;
  margin-right: 0px;
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;

const Subtitle = styled.div`
  width: 90%;
  margin: 0px auto 60px;
`;

const Everyday = styled.h2`
  font-size: 40px;
  font-family: Mont, Helvetica;
  font-weight: 600;
  text-align: center;
  margin: 0px auto;
`;

const Appreciation = styled.h3`
  margin: 0px auto;
  font-size: 30px;
  font-family: Arial;
  font-weight: 500;
  color: #eaeaea;
`;

const DesignedBy = styled.p`
  font-size: 25px;
  font-family: Arial;
  font-weight: 400;
  margin-top: auto;
  margin-bottom: 70px;
`;

export default Home;
