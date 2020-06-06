import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 0.5rem !important;
  .title {
    margin-top: 3rem;
  }
  .hero-body {
    padding-top: 0.5rem !important;
  }
  .subtitle {
    text-align: justify !important;
  }
`;

const HomeHero = ({ data }) => {
  return (
    <Container className="section">
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-5">
                  <Img fluid={data.heroImage.asset.fluid} alt="ramanujan" />
                </div>
                <div className="column">
                  <h1 className="title is-3 is-spaced">{data.homeTitle}</h1>
                  <h1 className="subtitle is-4">{data.homeSubtitle}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default HomeHero;
