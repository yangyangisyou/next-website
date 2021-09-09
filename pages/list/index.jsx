import React, {
  useEffect, useCallback, useState, useMemo,
} from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../../shared/containers/Page';
import CardList from '../../shared/containers/CardList';
import { loadExamList, cleanExamList } from '../../redux/actions/firebase';

const ListPage = ({ router }) => {
  const dispatch = useDispatch();
  const listState = useSelector((state) => state.firebase);
  const [numOPage, setNumOPage] = useState(0);
  const hasNextList = useMemo(() => listState.hasNextList, [listState.hasNextList]);
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
    return () => {
      dispatch(cleanExamList());
    };
  }, [router.query]);

  useEffect(() => {
    if (hasNextList && isFetchingList) {
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
      <h1>測驗列表</h1>
      <CardList
        list={listState.examlist}
        isLoading={listState.isLoading.examlist}
      />
      {hasNextList ? '⬇️ 還有更多 ─=≡Σ((( つ•̀ω•́)つ ⬇️' : '沒有更多資料了。･ﾟ･(つд`ﾟ)･ﾟ･'}
    </PageContainer>
  );
};

export default ListPage;
