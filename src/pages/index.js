import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Dots from '../components/Particles';
import HomeHero from '../components/HomeHero';
import HomeFeatures from '../components/HomeFeatures';
import CourseSlider from '../components/CoursesSlider';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonial';
import Contact from '../components/Contact';

export const HomeQuery = graphql`
  query {
    sanitySiteSettings {
      homeTitle
      homeSubtitle
      heroImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      featuresTitle
      featuresPoints {
        title
        subtitle
      }
      courseSectionTitle
      courseSectionSubtitle
      aboutSectionImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      aboutSectionSubtitle
      reviews {
        _key
        name
        comment
        image {
          asset {
            url
          }
        }
      }
    }
    allSanityCourses {
      edges {
        node {
          id
          slug {
            current
          }
          title
          Subtitle
          mainImage {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const home = data.sanitySiteSettings;
  const courses = data.allSanityCourses.edges;
  return (
    <Layout>
      <Seo title="Home" description="Welcome to Ramanujan Academy" />
      <HomeHero data={home} />
      <HomeFeatures data={home} />
      <CourseSlider data={courses} value={data} />
      <AboutSection data={home} />
      <Testimonials data={home} />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
