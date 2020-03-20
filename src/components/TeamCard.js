import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .card {
    margin-top: 3rem;
    border: 2px solid ${props => props.theme.mainBrandColor};
  }
`;

const TeamCard = () => (
  <Container>
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-128x128">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
            <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default TeamCard;
