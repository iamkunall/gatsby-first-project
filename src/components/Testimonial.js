import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import TestimonialsCard from './TestimonialsCard';

const Section = styled.div`
  .container {
    margin-top: 4rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .first {
    margin-top: 2rem;
  }
  .title.is-4 {
    margin-top: 1rem;
  }
`;

const Testimonials = () => (
  <Section className="section">
    <div className="container">
      <h1 className="title is-2 has-text-centered">OUR STARS</h1>
      <div className="columns is-multiline">
        <div className="column is-4">
          <TestimonialsCard />
        </div>
        <div className="column is-4">
          <TestimonialsCard />
        </div>
        <div className="column is-4">
          <TestimonialsCard />
        </div>
      </div>
    </div>
  </Section>
);

export default Testimonials;
