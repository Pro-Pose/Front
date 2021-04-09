import React from 'react';
import Layout from 'components/Layout';
import HomeContainer from 'containers/Home';
import dynamic from 'next/dynamic';

console.log('page download');

const DynamicComponent = dynamic(() => import('containers/Test/Push'), {
  ssr: false,
});

const IndexPage = () => {
  return (
    <Layout title="KICKIT | WIP">
      {console.log('page render')}
      <HomeContainer />
    </Layout>
  );
};

export default IndexPage;
