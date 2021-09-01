import React from 'react';
import styled from '@emotion/styled';
import Card from '../components/card';

const CardListWrapper = styled.div`
    width: 100%;
`;

const CardList = ({ list = [{}, {}, {}] }) => {
  return (
    <CardListWrapper>
      {
            list.map((data) => <Card data={data} />)
        }
    </CardListWrapper>
  );
};

export default CardList;
