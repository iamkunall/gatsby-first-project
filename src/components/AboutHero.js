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
          <h2 className="subtitle is-4">
            Lorem ipsum dolor sit amet, vel pulvinar. Pellentesque viverra, sed
            tincidunt risus, adipiscing sed iaculis. Quam nascetur molestie ut
            lectus odio, dis amet diam inventore, erat eros sollicitudin
            excepturi eleifend in vitae, non mauris pellentesque sed tempus, leo
            imperdiet. Orci mi mauris. Eu dignissim, diam a metus arcu, rutrum
            eu lectus sem taciti illo iaculis, elit massa accumsan. Tristique a
            ut a sed vehicula donec. Nulla donec viverra bibendum in amet, urna
            placerat turpis suscipit blandit. Non augue sodales vehicula.
            Aliquam amet. Amet urna vulputate, cursus hendrerit, etiam blandit.
          </h2>
        </div>
      </div>
    </div>
  </Container>
);

export default AboutHero;
