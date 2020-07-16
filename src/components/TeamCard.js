import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .card {
    margin-top: 3rem;
    border-radius: 20px;
    height: 28rem;
  }
  img {
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
`;

const TeamCard = ({ data }) => (
  <Container>
    <div className="card">
      <div className="card-image">
        <figure className="image is-square">
          <img src={data.pik} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content has-text-centered">
          <h1 className="title is-4 is-spaced">{data.name}</h1>
          <h1 className="subtitle is-5 has-text-weight-light">
            {data.subjects}
          </h1>
        </div>
      </div>
    </div>
  </Container>
);

export default TeamCard;
