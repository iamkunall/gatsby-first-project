import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';

export const CoursesQuery = graphql`
  query {
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

const CoursesPage = ({ data }) => {
  const courses = data.allSanityCourses.edges;
  console.log(courses);
  return (
    <Layout>
      <Seo title="Courses" description="Welcome to Ramanujan Academy" />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {courses.map(item => (
              <div className="column is-4 is-flex">
                <CourseCard data={item.node} key={item.node.id} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoursesPage;
