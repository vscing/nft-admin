import React from 'react';
import { Alert } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

const Nested: React.FC = () => {
  return (
    <PageContainer>
      <Alert message="menu2" type="info" />
    </PageContainer>
  )
}

export default Nested;
