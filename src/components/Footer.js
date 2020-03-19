import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledFooter = styled.footer`
  img {
    height: 10rem;
  }
  .icon {
    font-size: 2rem;
    margin-right: 1.75rem;
    color: ${props => props.theme.mainBrandColor};
    border-radius: 1rem;
    :last-child {
      margin-right: 0rem;
    }
  }
  p {
    margin-top: 2rem;
  }
  .columns.is-mobile {
    margin-top: 2rem;
  }
`;

const Footer = () => (
  <StyledFooter className="footer">
    <div className="content has-text-centered">
      <Link to="/" className="is-block">
        <img src="/images/logo.jpg" alt="site logo" />
      </Link>
      <div className="icon ">
        <i className="fab fa-facebook-square" />
      </div>
      <div className="icon">
        <i className="fab fa-twitter-square" />
      </div>
      <div className="icon">
        <i className="fab fa-linkedin" />
      </div>
      <div className="columns is-mobile is-centered">
        <div className="column is-8">
          <div className="columns">
            <div className="column">
              <Link to="/" className="title is-5">
                scholarship Test
              </Link>
            </div>
            <div className="column">
              <Link to="/" className="title is-5">
                Courses we Offered
              </Link>
            </div>
            <div className="column">
              <Link to="/" className="title is-5">
                About us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p>
        © 2020 Ramanujan academy | Made with ❤️ in Punjab, India, and on the
        Internet.
      </p>
    </div>
  </StyledFooter>
);

export default Footer;
