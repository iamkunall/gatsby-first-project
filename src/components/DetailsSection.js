import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .point {
    margin-top: 30px;
  }
  .text {
    margin: 30px 0 50px 0;
  }
  .test {
    margin-bottom: 50px;
  }
`;

const points = [
  {
    id: 1,
    value:
      'Understand how investment banking firms work and what they can do to help your business.',
  },
  {
    id: 2,
    value:
      'Understand how investment banking firms work and what they can do to help your business.',
  },
  {
    id: 3,
    value:
      'Understand how investment banking firms work and what they can do to help your business.',
  },
  {
    id: 4,
    value:
      'Understand how investment banking firms work and what they can do to help your business.',
  },
];

const DetailsSection = () => {
  return (
    <Container className="section">
      <div className="container">
        <h1 className="title is-3 has-text-primary">What you'll learn</h1>
        <div className="columns">
          <div className="column">
            {points.map(data => (
              <div className="point">
                <span className="icon has-text-info is-inline-block">
                  <i className="fas fa-check-circle" />
                </span>
                <p className="subtitle is-4 is-inline">{data.value}</p>
              </div>
            ))}
          </div>
          <div className="column">
            {points.map(data => (
              <div className="point">
                <span className="icon has-text-info is-inline-block">
                  <i className="fas fa-check-circle" />
                </span>
                <p className="subtitle is-4 is-inline">{data.value}</p>
              </div>
            ))}
          </div>
        </div>
        <h1 className="title is-3 has-text-primary is-spaced">Description</h1>
        <h1 className="subtitle is-4 test">
          S Ramanujan Academy is renowned for Post. Sr. Sec. Coaching Classes
          for Medical & Engineering Streams. Every Year more then 1 Lac of
          students from all over India join various institute for the coaching.
          S Ramanujan Academy Jalandhar Started in March-2008, has a tradition
          of excellence in research and teaching, we build on the past but are
          not constrained by it
        </h1>
        <h1 className="title is-3 has-text-primary">Requirements</h1>
        <ul>
          <li>Nothing except a positive attitude! : ) </li>
        </ul>
      </div>
    </Container>
  );
};

export default DetailsSection;
