import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';

export default class Courses extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Courses" description="Welcome to Courses" />
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-4 is-flex">
                <CourseCard
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg55f5ZQMzrnRRozjJl9TUZgPj8sgiN7cjuPtm4XUDRswPY51g"
                  title="Medical / Non-Medical 11th and 12th "
                  Subtitle="your text"
                />
              </div>
              <div className="column is-4 is-flex">
                <CourseCard
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg55f5ZQMzrnRRozjJl9TUZgPj8sgiN7cjuPtm4XUDRswPY51g"
                  title="8th,9th,10th With foundation course of JEE and NEET"
                  Subtitle="your text "
                />
              </div>
              <div className="column is-4 is-flex">
                <CourseCard
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg55f5ZQMzrnRRozjJl9TUZgPj8sgiN7cjuPtm4XUDRswPY51g"
                  title="Advance Courses for JEE and NEET"
                  Subtitle="your text"
                />
              </div>
              <div className="column is-4 is-flex">
                <CourseCard
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg55f5ZQMzrnRRozjJl9TUZgPj8sgiN7cjuPtm4XUDRswPY51g"
                  title="Other Entrance  Exams NTSC & NDA and others "
                  Subtitle="your text "
                />
              </div>
              <div className="column is-4 is-flex">
                <CourseCard
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg55f5ZQMzrnRRozjJl9TUZgPj8sgiN7cjuPtm4XUDRswPY51g"
                  title="Other Entrance  Exams NTSC & NDA and others "
                  Subtitle="your text "
                />
              </div>
              <div className="column is-4 is-flex">
                <CourseCard
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg55f5ZQMzrnRRozjJl9TUZgPj8sgiN7cjuPtm4XUDRswPY51g"
                  title="Other Entrance  Exams NTSC & NDA and others "
                  Subtitle="your text "
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
