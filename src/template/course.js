import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import CoursesHero from '../components/CoursesHero';
import DetailsSection from '../components/DetailsSection';

export const CourseQuery = graphql`
  query course($slug: String) {
    sanityCourses(slug: { current: { eq: $slug } }) {
      id
      title
      Subtitle
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      points
      requirements
      _rawBody
      _rawDescription
    }
  }
`;

const CoursePage = ({ data }) => {
  const course = data.sanityCourses;
  return (
    <Layout>
      <Seo title="course" description="Welcome to Ramanujan Academy" />
      <CoursesHero data={course} />
      <DetailsSection data={course} />
    </Layout>
  );
};

export default CoursePage;
