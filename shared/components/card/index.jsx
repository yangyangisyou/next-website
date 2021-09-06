import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';

const CardWrapper = styled.div`
    width: 80%;
    border: 1px #aaaaaa solid;
    border-radius: 20px;
    padding: 20px;
    margin: 20px auto;
  .skeleton {
    opacity: .7;
    animation: skeleton-loading 1s linear infinite alternate;
  }

  .skeleton-text {
    width: 100%;
    height: .5rem;
    margin-bottom: .25rem;
    border-radius: .125rem;
  }

  .skeleton-text:last-child {
    margin-bottom: 0;
    width: 80%;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 1rem;
  }

  .card {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    padding: 16px;
    border-radius: 4px;
  }
`;

const HeaderWrapper = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    .header-img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 100%;
        margin-right: 1rem;
        flex-shrink: 0;
    }

    .title {
        font-weight: bold;
        font-size: 1.25rem;
        text-transform: capitalize;
        word-wrap: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        flex-grow: 1;
    }
`;

const BodyWrapper = styled.div`
`;

const Card = ({ data, isLoading }) => {
  const {
    title, desc, image, id,
  } = data;
  if (isLoading) {
    return (
      <CardWrapper>
        <HeaderWrapper>
          <div className="header-img skeleton" />
          <div className="title">
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-text" />
          </div>
        </HeaderWrapper>
        <BodyWrapper>
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text" />
        </BodyWrapper>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper>
      <HeaderWrapper>
        <img className="header-img" src={image} alt={id} />
        <div className="title">
          <div>{title}</div>
        </div>
        <div className="action">
          <div>收藏</div>
        </div>
      </HeaderWrapper>
      <BodyWrapper>
        <div>{desc}</div>
      </BodyWrapper>
    </CardWrapper>
  );
};

export default Card;
