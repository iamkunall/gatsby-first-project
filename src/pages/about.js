import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import AboutHero from '../components/AboutHero';
import Team from '../components/Team';

export default class about extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="about" description="Welcome to SRamanujan Academy" />
        <AboutHero />
        {/* <Team /> */}
      </Layout>
    );
  }
}
