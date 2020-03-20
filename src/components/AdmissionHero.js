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
                Lorem ipsum dolor sit amet, mi ut praesent nonummy erat, lacus
                eu accumsan semper Lorem ipsum dolor sit
              </li>
              <li className="subtitle">
                Lorem ipsum dolor sit amet, mi ut praesent nonummy erat, lacus
                eu accumsan semper Lorem ipsum dolor sit
              </li>
              <li className="subtitle">
                Lorem ipsum dolor sit amet, mi ut praesent nonummy erat, lacus
                eu accumsan semper Lorem ipsum dolor sit
              </li>
            </ol>
            <div className="has-text-centered">
              <button type="button" className="button is-info is-medium">
                APPLY ONLINE
              </button>
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
                Lorem ipsum dolor sit amet, mi ut praesent nonummy erat, lacus
                eu accumsan semper Lorem ipsum dolor sit
              </li>
              <li className="subtitle">
                Lorem ipsum dolor sit amet, mi ut praesent nonummy erat, lacus
                eu accumsan semper Lorem ipsum dolor sit
              </li>
            </ol>
            <div className="has-text-centered">
              <Link to="/contact" className="button is-warning is-medium">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Container>
);

export default AdmissionHero;
