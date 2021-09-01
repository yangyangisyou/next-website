import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../../shared/containers/Page';
import CardList from '../../shared/containers/CardList';
import { loadExamList } from '../../redux/actions/category';

const Page = ({ router }) => {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category);
  const { t, lang } = useTranslation('common');
  const example = t('example', { count: 42 });
  useEffect(() => {
    if (router.isReady) {
      dispatch(loadExamList(1));
    }
  }, [router.query]);
  return (
    <PageContainer>
      {/* {example} */}
      <h1>找測驗</h1>
      <CardList
        list={categoryState.examlist}
        isLoading={categoryState.isLoading.examlist}
      />
    </PageContainer>
  );
};

export default Page;
