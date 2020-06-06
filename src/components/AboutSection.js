import React from 'react';
import Img from 'gatsby-image';
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
          <Img fluid={data.aboutSectionImage.asset.fluid} alt="ramanujan" />
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
