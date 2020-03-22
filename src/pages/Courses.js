import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';

const data = [
  {
    title: 'Class 11th Non-Medical',
    image: '/images/courses/maths.png',
  },
  {
    title: 'Class 11th Medical',
    image: '/images/courses/biolog-11.jpg',
  },
  {
    title: 'Class 12th Non-Medical',
    image: '/images/courses/maths-12.png',
  },
  {
    title: 'Class 12th Medical',
    image: '/images/courses/medical-12.png',
  },
  {
    title: '8th,9th,10th With foundation course of JEE and NEET',
    image: '/images/courses/study.png',
  },
  {
    title: 'Advance Courses for JEE and NEET',
    image: '/images/courses/jee.png',
  },
  {
    title: 'Other Entrance  Exams NTSC & NDA and others',
    image: '/images/courses/talent.png',
  },
];

export default class Courses extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Courses" description="Welcome to Courses" />
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {data.map(items => (
                <div className="column is-4 is-flex">
                  <CourseCard
                    image={items.image}
                    title={items.title}
                    Subtitle={items.Subtitle}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
