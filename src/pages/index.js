import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import HomeFeatures from '../components/HomeFeatures';
import CourseSlider from '../components/CoursesSlider';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonial';
import Contact from '../components/Contact';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HomeHero />
        <HomeFeatures />
        <CourseSlider />
        <AboutSection />
        <Testimonials />
        <Contact />
      </Layout>
    );
  }
}
