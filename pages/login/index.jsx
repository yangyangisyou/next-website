import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../../shared/containers/Page';
import CardList from '../../shared/containers/CardList';
import { loadExamList } from '../../redux/actions/firebase';
import GoogleLogin from '../../shared/components/oauth/GoogleLogin';

const Page = ({ router }) => {
  const dispatch = useDispatch();
  // const categoryState = useSelector((state) => state.firebase);
  return (
    <PageContainer>
      {/* 暫時不開發 */}
      <h1>登入系統</h1>
      <GoogleLogin />
    </PageContainer>
  );
};

export default Page;
