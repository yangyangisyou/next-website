import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import PageContainer from "../shared/containers/Page";

const DescWrapper = styled.p`
  color: #86868b;
  margin-top: 6px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) => {
    if (props.margin) {
      return css`
        margin-top: ${props.margin}px;
      `;
    }
  }}
`;

const ButtonWrapper = styled.div`
  padding: 8px 16px;
  border-radius: 980px;
  ${(props) => {
    if (props.type === "ghost") {
      return css`
        color: #0066cc;
      `;
    }
    return css`
      background-color: ${props.color || "#0071e3"};
      color: white;
    `;
  }}
`;

const BannerImage = styled.img`
  margin-top: 20px;
  max-width: 80vw;
`;

const Home = () => {
  return (
    <PageContainer>
      <h1>就。很。Meow。</h1>
      <DescWrapper>喵學搶先測試中，功能逐漸新增，敬請期待。</DescWrapper>
      <FlexWrapper margin={6}>
        <ButtonWrapper type="normal">馬上使用</ButtonWrapper>
        <ButtonWrapper type="ghost">
          逛一下商店
          {" >"}
        </ButtonWrapper>
      </FlexWrapper>
      <BannerImage src="/catRead.jpeg" alt="cat-read" />
    </PageContainer>
  );
};

export default Home;
