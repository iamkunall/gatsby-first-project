import React from 'react';
import styled from 'styled-components';

import TeamCard from './TeamCard';

const Container = styled.div`
  .columns {
    margin-top: 3rem;
  }
`;

const Team = () => (
  <Container className="section">
    <div className="container">
      <h1 className="title is-2 has-text-centered">MEET THE TEAM</h1>
      <div className="columns  is-multiline ">
        <div className="column is-6">
          <TeamCard />
        </div>
        <div className="column is-6">
          <TeamCard />
        </div>
        <div className="column is-6">
          <TeamCard />
        </div>
        <div className="column is-6">
          <TeamCard />
        </div>
        <div className="column is-6">
          <TeamCard />
        </div>
        <div className="column is-6">
          <TeamCard />
        </div>
      </div>
    </div>
  </Container>
);

export default Team;
