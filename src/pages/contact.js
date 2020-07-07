import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Section = styled.div`
  p {
    margin-bottom: 1rem;
  }
  .image {
    width: 500px;
    height: auto;
    margin: 0 auto;
    object-position: center;
  }
  .button {
    margin-top: 2rem;
  }
  .column.is-8 {
    margin-top: 2rem;
  }
`;

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-two-fifths">
            <h2 className="title is-1 has-text-weight-bold">Address</h2>
            <p className="title is-5 has-text-weight-bold">
              We’re as accessible as your good neighbour. Feel free to give us a
              shout.
            </p>
            <p className="title is-5 has-text-weight-bold">
              <span role="img" aria-label="Round Pushpin">
                📍
              </span>{' '}
              {config.location}
            </p>
            <p className="title is-5 has-text-weight-bold">
              <span role="img" aria-label="e-mail">
                📧
              </span>{' '}
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </p>
            <p className="title is-5 has-text-weight-bold">
              <span role="img" aria-label="telephone">
                ☎️
              </span>{' '}
              <a href={`tel:${config.telephone}`}>{config.telephone}</a>
            </p>
          </div>
          <div className="column is-two-fifths">
            <img className="image" src="/images/contact.svg" alt="contact us" />
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default Contact;
