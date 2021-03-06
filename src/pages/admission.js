import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import AdmissionHero from '../components/AdmissionHero';

export default class admission extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="admission" description="Welcome to SRamanujan Academy" />
        <AdmissionHero />
      </Layout>
    );
  }
}
