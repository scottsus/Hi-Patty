import React from 'react';
import styled from 'styled-components';
import Heart from './Heart';

const AppreciationList: React.FC = () => {
  const path = new Date().toISOString().split('T')[0];
  return (
    <AppreciationContainer>
      <List>
        <Item>
          🎄 sorry we couldn&apos;t spend our first xmas together but... MERRY
          XMAS PATTY!!
        </Item>
        <Item>👧 calling me and showing ur kiddy hair</Item>
        <Item>🎁 showing me ur unboxing vid</Item>
      </List>
      <HeartContainer>
        <Heart path={path} />
      </HeartContainer>
    </AppreciationContainer>
  );
};

const AppreciationContainer = styled.div`
  min-height: 320px;
  width: 460px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;

  @media (max-width: 450px) {
    min-height: 350px;
    width: 100%;
    margin-right: 0;
  }
`;

const List = styled.ul`
  font-size: 30px;
  font-family: Mont, Helvetica;
  font-weight: 700;

  @media (max-width: 450px) {
    font-size: 25px;
  }
`;

const Item = styled.li`
  margin: 15px 0px;
`;

const HeartContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export default AppreciationList;
