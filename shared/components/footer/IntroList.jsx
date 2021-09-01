import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const IntroListWrapper = styled.div`
  margin: 0 10px;
  
  h2 {
      margin-bottom: 10px;
  }
  ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
  }
  li {
    cursor: pointer;
    margin: 8px 0;
    font-size: 14px;
  }
`;

const IntroList = ({ title, list }) => {
  return (
    <IntroListWrapper>
      <h2>{title}</h2>
      <ul>
        {list.map((value) => (
          <Link key={value.name} href={value.link}>
            <li>
              {value.name}
            </li>
          </Link>
        ))}
      </ul>
    </IntroListWrapper>
  );
};

export default IntroList;
