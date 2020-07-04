import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .columns {
    margin-top: 3rem;
  }
`;

const AboutHero = () => (
  <Container className="section">
    <div className="container">
      <h1 className="title is-2 has-text-centered">ABOUT ACADEMY</h1>
      <div className="columns is-centered has-text-centered">
        <div className="column is-10">
          <h2 className="subtitle is-4 has-text-weight-medium">
            S.Ramanujan Academy provides excellent infrastructure & facilities
            to create an ideal ambience for effective learning with caring and
            comitted management and administration. Students are made to sit in
            the classroom in order of the ascending sequence of their ranks to
            enthuse the students, batches are reshuffeled on the basis of their
            performace in periodic test. This creates a sense of competition and
            energised mind among the students.
          </h2>
        </div>
      </div>
    </div>
  </Container>
);

export default AboutHero;
