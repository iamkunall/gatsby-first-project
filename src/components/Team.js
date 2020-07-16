import React from 'react';
import styled from 'styled-components';

import TeamCard from './TeamCard';

const Container = styled.div`
  .columns {
    margin-top: 3rem;
  }
`;

const teamData = [
  {
    id: 1,
    name: 'Nishikant',
    subjects:
      'Specialization in Mathematics  Physics and Chemistry with 12 years experience',
    pik: require('../../static/images/team/nishi-sir.jpg'),
  },
  {
    id: 2,
    name: 'Ankit Rana',
    subjects: 'Specialization in Mathematics with 2 years experience',
    pik: require('../../static/images/team/ankit.jpg'),
  },
  {
    id: 3,
    name: 'Jagdeep Singh',
    subjects: 'Specialization in Physics',
    pik: require('../../static/images/team/jagdeep.jpg'),
  },
  {
    id: 4,
    name: 'Pearl',
    subjects: 'Specialization in  Biology & Chemistry',
    pik: require('../../static/images/team/pearl.jpg'),
  },
  {
    id: 5,
    name: 'Manpreet',
    subjects: 'specialization in Mathematics',
    pik: require('../../static/images/team/manpreet.jpg'),
  },
  {
    id: 5,
    name: 'kunal',
    subjects: 'Web Developer',
    pik: require('../../static/images/team/kunal.jpg'),
  },
];

const Team = () => (
  <Container className="section">
    <div className="container">
      <h1 className="title is-2 has-text-centered">MEET THE TEAM</h1>
      <div className="columns  is-multiline">
        {teamData.map(data => (
          <div className="column is-3">
            <TeamCard key={data.id} data={data} />
          </div>
        ))}
      </div>
    </div>
  </Container>
);

export default Team;
