import React from 'react';
import AnimatedHandWave from '../components/AnimatedHandWave';
import ColoredText from '../components/ColoredText';
import Image from '../components/Image';
import PinkButton from '../components/PinkButton';

const Home: React.FC = () => {
  return (
    <div id='landing-page' style={landingPageStyles}>
      <div id='pictures' style={picturesStyles}>
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
      </div>
      <div id='title' style={titleStyles}>
        <AnimatedHandWave />{' '}
        <h1 id='hi-patty' style={hiPattyStyles}>
          Hi Patty
        </h1>
      </div>
      <div id='subtitle' style={subtitleStyles}>
        <h2 style={h2Styles}>
          Everyday I'll note down at least one thing I'm{' '}
          <ColoredText
            text='grateful'
            fontSize={'40px'}
            fontFamily={'Mont'}
            fontWeight={800}
          />{' '}
          to you for
        </h2>
      </div>
      <PinkButton text='APPRECIATION OF THE DAY' width={'550px'} />
      <p style={designedByStyles}>© Designed and Built by Scotty Sus</p>
    </div>
  );
};

const landingPageStyles: React.CSSProperties = {
  height: '100%',
  width: '65%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const picturesStyles: React.CSSProperties = {
  marginTop: '30px',
  marginLeft: 'auto',
  marginRight: 0,
  width: '220px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const titleStyles: React.CSSProperties = {
  margin: '50px auto 20px',
};

const hiPattyStyles: React.CSSProperties = {
  display: 'inline',
  fontSize: '70px',
  fontFamily: 'Mont',
  fontWeight: 800,
  marginLeft: '20px',
};

const subtitleStyles: React.CSSProperties = {
  width: '90%',
  margin: '0px auto 60px',
};

const h2Styles: React.CSSProperties = {
  fontSize: '40px',
  fontFamily: 'Mont',
  fontWeight: 600,
  textAlign: 'center',
  margin: '0px auto',
};

const designedByStyles: React.CSSProperties = {
  fontSize: '25px',
  fontFamily: 'Arial',
  fontWeight: 400,
  marginTop: 'auto',
  marginBottom: '70px',
};

export default Home;
