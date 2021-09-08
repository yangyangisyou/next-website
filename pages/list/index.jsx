import React, { useEffect, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../../shared/containers/Page';
import CardList from '../../shared/containers/CardList';
import { loadExamList } from '../../redux/actions/firebase';

const ListPage = ({ router }) => {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category);
  const [numOPage, setNumOPage] = useState(1);
  const [isFetchingList, setIsFetchingList] = useState(false);
  const { t, lang } = useTranslation('common');
  const example = t('example', { count: 42 });
  const scrollEvent = useCallback(() => {
    const scrolledHeight = window.innerHeight + document.documentElement.scrollTop;
    const websiteHeight = document.documentElement.offsetHeight;
    const isLoadData = scrolledHeight > websiteHeight * 0.95;
    if (isLoadData) {
      setNumOPage((prevNumOPage) => prevNumOPage + 1);
      setIsFetchingList(true);
    }
  }, []);

  useEffect(() => {
    if (router.isReady) {
      dispatch(loadExamList(numOPage));
    }
  }, [router.query]);

  useEffect(() => {
    if (isFetchingList) {
      dispatch(loadExamList(numOPage));
      setIsFetchingList(false);
    }
  }, [isFetchingList]);

  useEffect(() => {
    document.addEventListener('scroll', scrollEvent);
    return () => {
      document.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

  return (
    <PageContainer>
      {/* {example} */}
      <h1>測驗列表</h1>
      <CardList
        list={categoryState.examlist}
        isLoading={categoryState.isLoading.examlist}
      />
    </PageContainer>
  );
};

export default ListPage;
