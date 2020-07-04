import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  ol {
    list-style: decimal;
    padding-left: 4rem;
  }
  ol li {
    margin-top: 0.5rem;
  }
  .button {
    margin: 3rem 0rem;
  }
`;

const AdmissionHero = () => (
  <Container className="section">
    <div className="container">
      <h1 className="title is-2 has-text-centered">How TO APPLY ONLINE</h1>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-4 is-spaced">STEPS</h1>
            <ol>
              <li className="subtitle">
                Click on APPLY ONLINE to Register yourself.
              </li>
              <li className="subtitle">
                Fill the Online Application Form and submit as prescribed.
              </li>
              <li className="subtitle">
                We will get back to you as Soon as Possible
              </li>
            </ol>
            <div className="has-text-centered">
              <a
                type="button"
                className="button is-info is-medium"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfFuV3HzJfP11F6ueMZA_fHxEaXRe5VVPXsv68ZrXgV0ZgWjQ/viewform?usp=sf_link"
                target="blank"
              >
                APPLY ONLINE
              </a>
            </div>
          </div>
        </div>
      </section>
      <h1 className="title is-2 offline has-text-centered">
        HOW TO APPLY OFFLINE
      </h1>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-4 is-spaced">STEPS</h1>
            <ol>
              <li className="subtitle">
                You can visit our academy to register yourself with our latest
                Courses.
              </li>
            </ol>
            <div className="has-text-centered">
              <a
                href="https://www.google.com/maps/search/ramanujan+academy+jalandhar/@31.3169217,75.624686,20z"
                className="button is-warning is-medium"
                target="_blank"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Container>
);

export default AdmissionHero;
