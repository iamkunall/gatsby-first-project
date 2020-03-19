import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeSlider from '../components/HomeSlider';
import HomeHero from '../components/HomeHero';
import CourseSlider from '../components/CoursesSlider';
import AboutSection from '../components/AboutSection';
import Contact from '../components/Contact';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HomeSlider />
        <HomeHero />
        <CourseSlider />
        <AboutSection />
        <Contact />
      </Layout>
    );
  }
}
