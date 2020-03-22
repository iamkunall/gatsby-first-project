import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledFooter = styled.footer`
  background: #f2f2f2;
  img {
    height: 10rem;
  }
  .icon {
    font-size: 2rem;
    margin-right: 1.75rem;
    color: ${props => props.theme.mainBrandColor};
    border-radius: 1rem;
  }
  .right {
    margin-right: 0rem;
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
        <img src="/images/footer-logo.png" alt="site logo" />
      </Link>
      <div className="icon ">
        <i className="fab fa-facebook-square" />
      </div>
      <div className="icon">
        <i className="fab fa-twitter-square" />
      </div>
      <div className="icon right">
        <i className="fab fa-linkedin" />
      </div>
      <div className="columns is-mobile is-centered">
        <div className="column is-8">
          <div className="columns">
            <div className="column">
              <Link to="/" className="title is-5">
                Scholarship Test
              </Link>
            </div>
            <div className="column">
              <Link to="/" className="title is-5">
                Courses we Offered
              </Link>
            </div>
            <div className="column">
              <Link to="/" className="title is-5">
                Join us
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
