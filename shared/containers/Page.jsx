import React from "react";
import styled from "@emotion/styled";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  padding: 20px;
  min-height: 100vh;

  h1 {
    font-size: 26px;
    font-weight: 500;
    margin: 10px auto;
  }
`;

const PageContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageContainer;
