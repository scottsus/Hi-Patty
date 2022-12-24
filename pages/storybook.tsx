import React from 'react';
import styled from 'styled-components';
import firestore from '../lib/firebase';
import { IStoryBlock, docToJSON } from '../lib/utils';
import Heart from '../components/Heart';
import Image from '../components/Image';
import Link from '../components/Link';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export async function getServerSideProps() {
  const storiesQuery = firestore.collectionGroup('stories').limit(2);
  const stories = await storiesQuery
    .get()
    .then((snapshot) => snapshot.docs.map(docToJSON));
  return {
    props: { stories },
  };
}

export default function StoryBookPage(props) {
  const storyBlocks = props.stories.map((story) => (
    <StoryBlock
      key={story.date}
      date={story.date}
      point1={story.point1}
      point2={story.point2}
      point3={story.point3}
      path={story.path}
    />
  ));
  return (
    <StoryBook>
      <StoryBookTitle>📕 Storybook</StoryBookTitle>
      <StoryBlockContainer>{storyBlocks}</StoryBlockContainer>
      <HomeButton>
        <Link href='/'>
          <FontAwesomeIcon icon={faHome} style={homeIconStyles} />
        </Link>
      </HomeButton>
    </StoryBook>
  );
}

const StoryBlock: React.FC<IStoryBlock> = ({
  date,
  point1,
  point2,
  point3,
  path,
}) => {
  return (
    <StoryBlockDiv>
      <Date>{date}</Date>
      <BodyContainer>
        <ListContainer>
          <Point>{point1}</Point>
          {point2 && <Point>{point2}</Point>}
          {point3 && <Point>{point3}</Point>}
          <HeartContainer>
            <Heart path={path} />
          </HeartContainer>
        </ListContainer>
        <Image
          src='/snow.jpeg'
          alt='pic of the day'
          height={250}
          width={250}
          borderRadius={20}
          margin='-5% auto auto auto'
        />
      </BodyContainer>
    </StoryBlockDiv>
  );
};

const StoryBook = styled.div`
  height: 98%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const StoryBookTitle = styled.h1`
  font-size: 70px;
  font-family: Mont, Helvetica;
  font-weight: 900;
`;

const StoryBlockContainer = styled.div`
  height: 60%;
  width: 75%;
  margin: 0 auto;
`;

const StoryBlockDiv = styled.div`
  height: 290px;
  width: 90%;
  margin-bottom: 40px;
  border-radius: 30px;
  background-color: #dee7fa;
  padding: 45px;
`;

const BodyContainer = styled.section`
  height: 70%;
  width: 102%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ListContainer = styled.section`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Date = styled.h1`
  font-size: 35px;
  font-family: Mont, Helvetica;
  font-weight: 800;
  margin-top: 0;
`;

const Point = styled.li`
  font-size: 24px;
  font-family: Mont, Helvetica;
  font-weight: 600;
  margin: 10px auto 0px 20px;
`;

const HeartContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const HomeButton = styled.button`
  left: 1190px;
  top: 650px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: none;
  background-color: #000000;
  position: fixed;
  :hover {
    background-color: #555555;
  }
`;

const homeIconStyles: React.CSSProperties = {
  color: '#FFFFFF',
  fontSize: '40px',
};
