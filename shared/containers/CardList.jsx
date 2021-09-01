import React from 'react';
import styled from '@emotion/styled';
import Card from '../components/card';

const CardListWrapper = styled.div`
    width: 100%;
`;

const CardList = ({ list, isLoading }) => {
  return (
    <CardListWrapper>
      {
            list.map((data) => <Card key={data.id} data={data} isLoading={isLoading} />)
        }
    </CardListWrapper>
  );
};

export default CardList;
