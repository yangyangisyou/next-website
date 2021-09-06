import React from 'react';
import styled from '@emotion/styled';
import Card from '../components/card';
import SKELETON_LIST from '../../mocks/list/skeletonlist.json';

const CardListWrapper = styled.div`
    width: 100%;
`;

const CardList = ({ list, isLoading }) => {
  console.log('isLoading ', isLoading);
  return (
    <CardListWrapper>
      { list.map((data) => <Card key={data.id} data={data} />) }
      { isLoading && SKELETON_LIST.map((data) => <Card key={data.id} data={data} isLoading={isLoading} />) }
    </CardListWrapper>
  );
};

export default CardList;
