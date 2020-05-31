import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import CoursesHero from '../components/CoursesHero';
import DetailsSection from '../components/DetailsSection.js';

export default class Individual extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <CoursesHero />
        <DetailsSection />
      </Layout>
    );
  }
}
