import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeSlider from '../components/HomeSlider';
import HomeHero from '../components/HomeHero';
import CrouseSlider from '../components/CoursesSlider';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HomeSlider />
        <HomeHero />
        <CrouseSlider />
      </Layout>
    );
  }
}
