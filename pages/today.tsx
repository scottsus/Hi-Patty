import React from 'react';
import AppreciationList from '../components/AppreciationList';
import ColoredText from '../components/ColoredText';
import Image from '../components/Image';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PinkButton from '../components/PinkButton';
import Link from '../components/Link';
import BackButton from '../components/BackButton';

const Today: React.FC = () => {
  return (
    <div id='today' style={todayStyles}>
      <div id='most-grateful' style={mostGratefulStyles}>
        <h2 style={h2Styles}>
          Today I am{' '}
          <ColoredText
            text='most grateful'
            fontSize='60px'
            fontFamily='Mont'
            fontWeight={900}
          />{' '}
          for:
        </h2>
      </div>
      <div id='today-main-body' style={mainBodyStyles}>
        <AppreciationList />
        <Image
          src='/snow.jpeg'
          alt='random pic of the day'
          width={360}
          height={360}
          borderRadius={20}
        />
      </div>
      <div id='buttons' style={buttonsStyles}>
        <BackButton href='' width='340px'>
          <FontAwesomeIcon icon={faLeftLong} style={{ fontSize: '28px' }} />
          <h3 style={backToHomeStyles}> Back to Home</h3>
        </BackButton>
        <PinkButton href='storybook' width='300px'>
          <h1 style={pinkButtonTextStyles}>STORYBOOK</h1>
        </PinkButton>
      </div>
    </div>
  );
};

const todayStyles: React.CSSProperties = {
  height: '100%',
  width: '65%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const mostGratefulStyles: React.CSSProperties = {
  margin: '110px auto 60px',
};

const h2Styles: React.CSSProperties = {
  fontSize: '60px',
  fontFamily: 'Mont',
  fontWeight: 800,
  margin: '0 auto',
};

const mainBodyStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
};

const buttonsStyles: React.CSSProperties = {
  marginTop: '70px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
};

const pinkButtonTextStyles: React.CSSProperties = {
  margin: '0px auto',
  fontSize: '30px',
  fontFamily: 'Arial',
  fontWeight: 500,
  color: '#EAEAEA',
};

const backButtonStyles: React.CSSProperties = {
  background: 'none',
  border: 'none',
};

const backToHomeStyles: React.CSSProperties = {
  fontSize: '30px',
  fontFamily: 'Mont',
  fontWeight: 700,
  display: 'inline',
};

export default Today;
