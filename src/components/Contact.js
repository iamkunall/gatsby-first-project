import React from 'react';
import styled from 'styled-components';

import ContactForm from './ContactForm';

const Section = styled.div`
  .container {
    margin-top: 4rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .first {
    margin-top: 2rem;
  }
  .title.is-4 {
    margin-top: 1rem;
  }
`;

const Contact = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-6 first">
          <h1 className="title is-2">
            {' '}
            <h2 className="title is-2">Address</h2>
            <h1 className="title is-4 is-spaced">
              We’re as accessible as your good neighbour. Feel free to give us a
              shout.
            </h1>
            <p className="subtitle is-4">
              <span role="img" aria-label="Round Pushpin">
                📍
              </span>{' '}
              Hno. 12-A street no.3, Professor Colony ,Joginder Nagar ,Rama
              Mandi Jalandhar ,Punjab
            </p>
            <p className="subtitle is-4">
              <span role="img" aria-label="e-mail">
                📧
              </span>{' '}
              <a href="mailto:sramanujanedu@gmail.com">
                sramanujanedu@gmail.com
              </a>
            </p>
            <p className="subtitle is-4">
              <span role="img" aria-label="telephone">
                ☎️
              </span>{' '}
              <a href="tel:+91 90412 64429">+91 90412 64429</a>
            </p>
          </h1>
        </div>
        <div className="column is-6">
          <ContactForm />
        </div>
      </div>
    </div>
  </Section>
);

export default Contact;
