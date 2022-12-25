import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firestore from '../lib/firebase';
import { IStoryBlock, docToJSON } from '../lib/utils';
import Heart from '../components/Heart';
import Link from '../components/Link';
import NextImage from 'next/image';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfiniteScroll from 'react-infinite-scroll-component';

const LIMIT = 5;

export async function getServerSideProps() {
  const storiesQuery = firestore
    .collectionGroup('stories')
    .orderBy('date', 'desc')
    .limit(LIMIT);
  const stories = await storiesQuery
    .get()
    .then((snapshot) => snapshot.docs.map(docToJSON));
  return {
    props: { stories },
  };
}

export default function StoryBookPage(props) {
  const [storyBlocks, setStoryBlocks] = useState<JSX.Element[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const newStoryBlocks = props.stories.map((story: IStoryBlock) => (
    <StoryBlock
      key={story.date}
      date={story.date}
      point1={story.point1}
      point2={story.point2}
      point3={story.point3}
      path={story.path}
    />
  ));
  useEffect(() => {
    setStoryBlocks((storyBlocks) => [...storyBlocks, ...newStoryBlocks]);
  }, []);

  const getMorePosts = async () => {
    console.log('getting more posts...');
    if (storyBlocks.length < 1) return;
    const cursor = storyBlocks[storyBlocks.length - 1].props.path;
    const moreStoriesQuery = firestore
      .collectionGroup('stories')
      .orderBy('date', 'desc')
      .startAfter(new Date(cursor))
      .limit(LIMIT);
    const moreStories = await moreStoriesQuery
      .get()
      .then((snapshot) => snapshot.docs.map(docToJSON));
    if (moreStories.length < LIMIT) setHasMore(false);
    console.log('MORE:', moreStories);
    const moreStoryBlocks = moreStories.map((story) => (
      <StoryBlock
        key={story.date}
        date={story.date}
        point1={story.point1}
        point2={story.point2}
        point3={story.point3}
        path={story.path}
      />
    ));
    setStoryBlocks((storyBlocks) => [...storyBlocks, ...moreStoryBlocks]);
  };
  return (
    <StoryBook>
      <StoryBookTitle>📕 Storybook</StoryBookTitle>
      <StoryBlockContainer>
        <InfiniteScroll
          dataLength={storyBlocks.length}
          next={getMorePosts}
          hasMore={hasMore}
          loader={<InfiniteText>Loading...</InfiniteText>}
          endMessage={
            <InfiniteText>
              All stories seen! 🥂 to making new memories together 🥰
            </InfiniteText>
          }
        >
          {storyBlocks}
        </InfiniteScroll>
      </StoryBlockContainer>
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
      <DateStyled>{date}</DateStyled>
      <BodyContainer>
        <ListContainer>
          <Point>{point1}</Point>
          {point2 && <Point>{point2}</Point>}
          {point3 && <Point>{point3}</Point>}
          <HeartContainer>
            <Heart path={path} />
          </HeartContainer>
        </ListContainer>
        <ImageWrapper>
          <NextImage
            src='/snow.jpeg'
            alt='pic of the day'
            height={250}
            width={250}
          />
        </ImageWrapper>
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

  @media (max-width: 450px) {
    width: 90%;
  }
`;

const StoryBookTitle = styled.h1`
  font-size: 70px;
  font-family: Mont, Helvetica;
  font-weight: 900;

  @media (max-width: 450px) {
    font-size: 50px;
  }
`;

const StoryBlockContainer = styled.div`
  height: 60%;
  width: 75%;
  margin: 0 auto;

  @media (max-width: 450px) {
    height: 100%;
    width: 100%;
  }
`;

const StoryBlockDiv = styled.div`
  min-height: 290px;
  width: 90%;
  margin-bottom: 40px;
  border-radius: 30px;
  background-color: #dee7fa;
  padding: 45px;

  @media (max-width: 450px) {
    width: 80%;
    margin: 0 auto 40px;
    padding: 30px 30px;
  }
`;

const DateStyled = styled.h1`
  font-size: 35px;
  font-family: Mont, Helvetica;
  font-weight: 800;
  margin-top: 0;

  @media (max-width: 450px) {
    font-size: 22px;
  }
`;

const BodyContainer = styled.section`
  height: 70%;
  width: 102%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 450px) {
    height: 100%;
    flex-direction: column;
    justify-content: start;
  }
`;

const ListContainer = styled.section`
  min-height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 450px) {
    min-height: 40%;
    width: 100%;
  }
`;

const Point = styled.li`
  font-size: 24px;
  font-family: Mont, Helvetica;
  font-weight: 600;
  margin: 10px auto 0px 20px;

  @media (max-width: 450px) {
    font-size: 17px;
  }
`;

const HeartContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 20px;
  margin: -5% auto auto auto;
  overflow: hidden;

  @media (max-width: 450px) {
    height: 220px;
    width: 220px;
    margin: 30px auto 0px;
  }
`;

const InfiniteText = styled.h4`
  font-size: 20px;
  font-family: Mont, Helvetica;
  font-weight: 800;
  text-align: center;
  margin: 10px auto 20px;
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

  @media (max-width: 450px) {
    left: 300px;
    top: 730px;
    height: 70px;
    width: 70px;
  }
`;

const homeIconStyles: React.CSSProperties = {
  color: '#FFFFFF',
  fontSize: '40px',
};
