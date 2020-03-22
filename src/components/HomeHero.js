import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .title {
    margin-top: 3rem;
  }
`;

const HomeHero = () => (
  <Container className="section">
    <div className="container">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-5 is-flex">
                <img src="/images/image-two.png" />
              </div>
              <div className="column">
                <h1 className="title is-3 is-spaced">S Ramanujan Academy</h1>
                <h1 className="subtitle is-4">
                  S Ramanujan Academy is renowned for Post. Sr. Sec. Coaching
                  Classes for Medical & Engineering Streams. Every Year more
                  then 1 Lac of students from all over India join various
                  institute for the coaching. S Ramanujan Academy Jalandhar
                  Started in March-2008, has a tradition of excellence in
                  research and teaching, we build on the past but are not
                  constrained by it
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Container>
);

export default HomeHero;
