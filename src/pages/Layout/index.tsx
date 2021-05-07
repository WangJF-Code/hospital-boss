import React from 'react';
import type { PageContainerProps } from '@ant-design/pro-layout';
import { PageContainer } from '@ant-design/pro-layout';

export default (props: PageContainerProps): React.ReactNode => {
  return (
    <PageContainer waterMarkProps={{ style: { fontSize: 0 } }}>{props.children}</PageContainer>
  );
};
