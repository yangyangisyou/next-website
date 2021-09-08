import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import ButtonWrapper from '../../shared/styles/Button';

const ExamResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    width: 80%;
    margin: 20px auto;
    border-radius: 20px;
    border: 1px solid black;
    padding: 20px;
    font-size: 20px;
    line-height: 30px;
    img {
        margin: 0 auto;
    }
`;

const FooterWrapper = styled.div`
    margin: 20px auto;
`;

const ExamResult = ({
  questions, numOfCorrect, goToExamListPage,
}) => {
  const numOfQuestions = useMemo(() => (Array.isArray(questions) ? Math.max(questions.length, 1) : 1), [questions]);
  const score = useMemo(() => (numOfCorrect / numOfQuestions) * 100, [questions]);
  return (
    <ExamResultWrapper>
      結果
      <p>
        答對題數：
        {numOfCorrect}
        /
        {numOfQuestions}
      </p>
      <p>
        分數：
        {score}
        /100
      </p>
      <FooterWrapper>
        <ButtonWrapper onClick={goToExamListPage}>做更多題目</ButtonWrapper>
      </FooterWrapper>
    </ExamResultWrapper>
  );
};

export default ExamResult;
