import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2.5rem;
  img {
    border-radius: 100%;
    z-index: 1;
  }
  .card {
    z-index: -1;
    margin-top: -2rem;
    padding-top: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const TestimonialsCard = () => (
  <Wrapper className="has-text-centered">
    <img src="https://bulma.io/images/placeholders/128x128.png" />
    <div className="card">
      <div className="card-content">
        <p className="title is-5">
          “There are two hard things in computer science: cache invalidation,
          naming things, and off-by-one errors.”
        </p>
        <p className="subtitle">Jeff Atwood</p>
      </div>
    </div>
  </Wrapper>
);

export default TestimonialsCard;
