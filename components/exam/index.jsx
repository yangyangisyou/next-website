import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ExamCardWrapper = styled.div`
    box-sizing: border-box;
    height: 400px;
    width: 80%;
    margin: 20px auto;
    border-radius: 20px;
    border: 1px solid black;
    padding: 20px;
    font-size: 20px;
    line-height: 30px;
`;

const ExamDescWrapper = styled.div`
    
`;

const StartButtonWrapper = styled.button(
  (props) => (
    {
      width: '80px',
      height: '30px',
      borderRadius: '20px',
      backgroundColor: props.disabled ? '#cccccc' : '#16b9b3',
      color: 'white',
      fontWeight: 'normal',
      cursor: 'pointer',
    }
  ),
);

const Exam = ({ question, onSubmit }) => {
  console.log('question: ', question);
  const { no, options, desc } = question;
  return (
    <ExamCardWrapper>
      <ExamDescWrapper>
        <span>
          {no}
          {'. '}
          {desc}
        </span>
      </ExamDescWrapper>
      {options.map((option, index) => (
        <p key={option}>
          {String.fromCharCode(65 + index)}
          .
          {option}
        </p>
      ))}
      <StartButtonWrapper
        type="button"
        onClick={onSubmit}
        disabled={!question}
      >
        下一題
      </StartButtonWrapper>
    </ExamCardWrapper>
  );
};

export default Exam;
