import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.div`
  .title {
    margin-top: 5rem;
  }

  .subtitle {
    text-align: justify;
  }
`;

const AboutSection = ({ data }) => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-6">
          <figure className="image is-5by4">
            <img src="/images/about.png" />
          </figure>
        </div>
        <div className="column is-6">
          <h1 className="title is-spaced">About us</h1>
          <h2 className="subtitle">{data.aboutSectionSubtitle}</h2>
          <Link to="/about" className="button is-primary">
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  </Section>
);

export default AboutSection;
