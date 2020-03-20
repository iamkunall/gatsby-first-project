import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.div`
  background: #eaf0f1;
`;

const AboutSection = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <figure className="image is-5by4">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
        </div>
        <div className="column is-8">
          <h1 className="title is-spaced">About us</h1>
          <h2 className="subtitle">
            A simple container to divide your page into{' '}
            <strong>sections</strong>, like the one you're currently reading A
            simple container to divide your page into <strong>sections</strong>,
            like the one you're currently reading
          </h2>
          <Link to="/about" className="button is-primary">
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  </Section>
);

export default AboutSection;
