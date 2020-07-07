import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  box-shadow: -1px 7px 24px -8px rgba(46, 74, 117, 1);
  padding: 1rem;
  border-radius: 1rem;
  .title {
    margin-bottom: 1.75rem;
  }
  .field {
    margin-top: 1rem;
  }
  .label {
    margin-bottom: 1rem;
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const ContactForm = () => (
  <Section>
    <h1 className="title is-2 has-text-centered">Contact Us</h1>
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input className="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div className="columns">
      <div className="column">
        <div className="field">
          <label className="label">Conatct Number</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="Number"
              placeholder="Conatct Number"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email input" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="field is-grouped has-text-centred">
      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
    </div>
  </Section>
);

export default ContactForm;
