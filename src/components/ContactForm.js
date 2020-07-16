import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as yup from 'yup';

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
  .feedback {
    margin-top: 10px;
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const ContactForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <Section>
      <h1 className="title is-2 has-text-centered">Contact Us</h1>
      <form data-netlify="true" name="contact" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
            />
            {errors.name && touched.name && (
              <div className="feedback has-text-danger">{errors.name}</div>
            )}
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
                  placeholder="Contact Number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contactNumber}
                  name="contactNumber"
                />
                {errors.contactNumber && touched.contactNumber && (
                  <div className="feedback has-text-danger">
                    {errors.contactNumber}
                  </div>
                )}
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
                <input
                  className="input"
                  type="email"
                  placeholder="Your Email Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                />
                {errors.email && touched.email && (
                  <div className="feedback has-text-danger">{errors.email}</div>
                )}
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
      </form>
    </Section>
  );
};

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ name: '', contactNumber: '', email: '' }),

  // Custom sync validation
  validationSchema: yup.object().shape({
    name: yup.string().required('Name is required.'),
    email: yup
      .string()
      .email('Must be valid email.')
      .required('Email address is required.'),
    contactNumber: yup
      .string()
      .matches(phoneRegex, 'Invalid Contact Number')
      .required('Contact Number is required'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    const handleFormSubmit = e => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      })
        .then(() => alert('We Contact You Soon!'))
        .catch(error => console.log(error));

      e.preventDefault();
    };
    handleFormSubmit(values);
    props.setSubmitting(false);
  },

  displayName: 'ContactForm',
});

export default MyEnhancedForm(ContactForm);
