import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2.5rem;
  img {
    border-radius: 100%;
    z-index: 1;
    height: 5rem;
  }
  .card {
    z-index: -1;
    margin-top: -2rem;
    padding-top: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const TestimonialsCard = ({ data }) => (
  <Wrapper className="column is-4 has-text-centered">
    <img src={data.image.asset.url} alt={data.name} />
    <div className="card">
      <div className="card-content">
        <p className="title is-5">{data.comment}</p>
        <p className="subtitle">{data.name}</p>
      </div>
    </div>
  </Wrapper>
);

export default TestimonialsCard;
