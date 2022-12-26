import React from 'react';
import styled from 'styled-components';
import Heart from './Heart';

interface IAppreciationList {
  point1?: string;
  point2?: string;
  point3?: string;
}

const AppreciationList: React.FC<IAppreciationList> = ({
  point1,
  point2,
  point3,
}) => {
  const path = new Date().toISOString().split('T')[0];
  if (!point1 && !point2 && !point3)
    return (
      <EmptyContainer>
        <Nothing>🙊 Nothing yet for today, stay tuned!</Nothing>
      </EmptyContainer>
    );
  return (
    <AppreciationContainer>
      <List>
        {point1 && <Item>{point1}</Item>}
        {point2 && <Item>{point2}</Item>}
        {point3 && <Item>{point3}</Item>}
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

const EmptyContainer = styled.div`
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

const Nothing = styled.h2`
  font-size: 30px;
  font-family: Mont, Helvetica;
  font-weight: 800;
  text-align: center;
  margin: 0;
`;

export default AppreciationList;
