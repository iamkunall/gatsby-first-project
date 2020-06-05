import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import HomeFeatures from '../components/HomeFeatures';
import CourseSlider from '../components/CoursesSlider';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonial';
import Contact from '../components/Contact';

export const Homequery = graphql`
  query {
    sanitySiteSettings {
      homeTitle
      homeSubtitle
    }
  }
`;

const IndexPage = ({ data }) => {
  const home = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo title="Home" description="Welcome to GatsbyJs v1" />
      <HomeHero data={home} />
      <HomeFeatures />
      <CourseSlider />
      <AboutSection />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
