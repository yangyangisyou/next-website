import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import toast from 'react-hot-toast';
import ButtonWrapper from '../../shared/styles/Button';

const ExamCardWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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

const ExamDescWrapper = styled.div`
    /* margin: 10px 0; */
`;

const OptionListWrapper = styled.div`
    margin-top: 20px;
`;

const FooterWrapper = styled.div`
    margin: 20px auto;
`;

const OptionWrapper = styled.div`
    [type="radio"]:checked,
    [type="radio"]:not(:checked) {
        display: none;
    }
    [type="radio"]:checked + span,
    [type="radio"]:not(:checked) + span
    {
        position: relative;
        padding-left: 28px;
        cursor: pointer;
        line-height: 20px;
        display: inline-block;
        color: #666;
    }
    [type="radio"]:checked + span:before,
    [type="radio"]:not(:checked) + span:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #ddd;
        border-radius: 100%;
        background: #fff;
    }
    [type="radio"]:checked + span:after,
    [type="radio"]:not(:checked) + span:after {
        content: '';
        width: 12px;
        height: 12px;
        background: #F87DA9;
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
    [type="radio"]:not(:checked) + span:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    [type="radio"]:checked + span:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`;

const Exam = ({
  question, onSubmit, isLastExam, isLoadingExam, setIsFinished,
}) => {
  const [selectedOption, setSelectedOption] = useState('');
  useEffect(() => {
    if (!isLoadingExam) {
      const warning = setTimeout(() => {
        toast('已經超過建議作答時間了', { icon: '😱' });
      }, 30000);
      return () => clearTimeout(warning);
    }
  }, [isLoadingExam]);
  if (isLoadingExam) {
    return (
      <ExamCardWrapper>
        <img
          src="https://media1.giphy.com/media/BCI6CWVkNUefm/giphy.gif?cid=ecf05e473xigafj7ondwaedmbna2kvxp9afvreudzrnzarj3&rid=giphy.gif&ct=g"
          alt="loading"
        />
        <p style={{ margin: '0 auto' }}>等我一下唷</p>
      </ExamCardWrapper>
    );
  }
  const { no, options, desc } = question;
  return (
    <ExamCardWrapper onSubmit={(event) => {
      event.preventDefault();
      onSubmit(selectedOption);
    }}
    >
      <ExamDescWrapper>
        <p>
          {no}
          {'. '}
          {desc}
        </p>
      </ExamDescWrapper>
      <OptionListWrapper>
        {options.map((option, index) => (
          <OptionWrapper
            key={option}
            onClick={() => setSelectedOption(String.fromCharCode(65 + index))}
          >
            <label
              htmlFor={String.fromCharCode(65 + index)}
            >
              <input
                type="radio"
                checked={selectedOption === String.fromCharCode(65 + index)}
                readOnly
              />
              <span>
                {String.fromCharCode(65 + index)}
                {'. '}
                {option}
              </span>
            </label>
          </OptionWrapper>
        ))}
      </OptionListWrapper>
      <FooterWrapper>
        {
          isLastExam ? (
            <ButtonWrapper
              htmlType="submit"
              onClick={() => {
                setIsFinished(true);
              }}
            >
              結束測驗
            </ButtonWrapper>
          ) : (
            <ButtonWrapper
              htmlType="submit"
              disabled={!question || isLastExam || !selectedOption}
              tabIndex={0}
            >
              下一題
            </ButtonWrapper>
          )
        }
      </FooterWrapper>
    </ExamCardWrapper>
  );
};

export default Exam;
