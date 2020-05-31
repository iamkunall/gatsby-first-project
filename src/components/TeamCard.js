import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .card {
    margin-top: 3rem;
  }
`;

const TeamCard = () => (
  <Container>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
        </div>
      </div>
    </div>
  </Container>
);

export default TeamCard;
