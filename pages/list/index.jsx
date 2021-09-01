import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import PageContainer from '../../shared/containers/Page';

const BodyWrapper = styled.div`
  background-color: #f5f5f5;
`;

const Page = ({ router, SEOConfig }) => {
  const { t, lang } = useTranslation('common');
  const example = t('example', { count: 42 });
  return (
    <PageContainer>
      {example}
    </PageContainer>
  );
};

export default Page;
