import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../../shared/containers/Page';
import CardList from '../../shared/containers/CardList';
import { loadExamList } from '../../redux/actions/category';
import GoogleLogin from '../../shared/components/oauth/GoogleLogin';

const Page = ({ router }) => {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category);
  return (
    <PageContainer>
      <h1>登入系統</h1>
      <GoogleLogin />
    </PageContainer>
  );
};

export default Page;