import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import PageContainer from '../../shared/containers/Page';
import CardList from '../../shared/containers/CardList';

const Page = ({ router, SEOConfig }) => {
  const { t, lang } = useTranslation('common');
  const example = t('example', { count: 42 });
  return (
    <PageContainer>
      {/* {example} */}
      <h1>找測驗</h1>
      <CardList />
    </PageContainer>
  );
};

export default Page;
