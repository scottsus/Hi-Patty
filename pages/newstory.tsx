import React, { useState } from 'react';
import { Timestamp } from 'firebase/firestore';
import styled from 'styled-components';
import PinkButton from '../components/PinkButton';
import firestore from '../lib/firebase';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewStoryPage: React.FC = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const date = new Date();
  const today = date.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const createStory = async (event) => {
    event.preventDefault();
    const path = date.toISOString().split('T')[0];
    const docRef = firestore.collection('stories').doc(path);
    const data = {
      date: Timestamp.fromDate(date),
      point1: event.target.point1.value,
      point2: event.target.point2.value,
      point3: event.target.point3.value,
      liked: false,
    };
    await docRef.set(data);
    setHasSubmitted(true);
  };
  return (
    <NewStory>
      <Title>✏️ New Story</Title>
      {!hasSubmitted ? (
        <Form onSubmit={createStory}>
          <DateStyled>{today}</DateStyled>
          <Input
            placeholder='Point 1'
            name='point1'
            id='point1'
            value={text1}
            onChange={(e) => setText1(e.target.value)}
          />
          <Input
            placeholder='Point 2'
            name='point2'
            id='point2'
            value={text2}
            onChange={(e) => setText2(e.target.value)}
          />
          <Input
            placeholder='Point 3'
            name='point3'
            id='point3'
            value={text3}
            onChange={(e) => setText3(e.target.value)}
          />
          <SubmitButton type='submit'>
            <Submit>SUBMIT</Submit>
          </SubmitButton>
        </Form>
      ) : (
        <Submitted>
          <DateStyled>{today}</DateStyled>
          <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '100px' }} />
        </Submitted>
      )}
      <PinkButton href='storybook'>
        <Story>STORYBOOK</Story>
      </PinkButton>
    </NewStory>
  );
};

const NewStory = styled.div`
  height: 85%;
  width: 80%;
  margin: 7% auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-family: Mont, Helvetica;
  font-weight: 900;
  margin: 20px auto 10px;
`;

const Form = styled.form`
  height: 470px;
  width: 330px;
  border-radius: 15px;
  background-color: #c4efbd;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
`;

const DateStyled = styled.h2`
  font-size: 25px;
  font-family: Mont, Helvetica;
  font-weight: 700;
  margin: 30px 0px;
`;

const Input = styled.input`
  height: 45px;
  width: 90%;
  border-radius: 30px;
  background-color: #ffffff;
  border: none;
  margin: 15px auto;
  padding: 5px 25px;
  font-size: 22px;
  font-family: Mont, Helvetica;
  font-weight: 600;
  color: ##9e9e9e;
`;

const SubmitButton = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 30px;
  border: none;
  background-color: #000000;
  margin: auto auto 40px;
  padding: 5px 15px;
`;

const Submit = styled.h2`
  font-size: 22px;
  font-family: Mont, Helvetica;
  font-weight: 800;
  color: #eaeaea;
  text-align: center;
  margin: 0;
`;

const Story = styled.h2`
  margin: 0 auto;
  font-size: 30px;
  font-family: Arial;
  font-weight: 800;
  padding: 5px 15px;
  color: #eaeaea;

  @media (max-width: 450px) {
    font-size: 17px;
  }
`;

const Submitted = styled.div`
  height: 240px;
  width: 335px;
  border-radius: 15px;
  background-color: #c4efbd;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
`;

export default NewStoryPage;
