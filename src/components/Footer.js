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
    margin-right: 1rem;
    transition: all 0.25s;
    :hover {
      font-size: 2.5rem;
    }
  }
  .insta {
    color: #8a3ab9;
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
        <img src="/images/footer-logo.png" alt="sramanujan academy" />
      </Link>
      <a
        href="https://www.instagram.com/invites/contact/?i=14szat4i221q3&utm_content=es1jb54"
        target="_blank"
        className="icon insta"
      >
        <i className="fab fa-instagram" />
      </a>
      <a
        href="https://www.facebook.com/s.ramanujan.77715"
        target="_blank"
        className="icon has-text-link"
      >
        <i className="fab fa-facebook-square" />
      </a>
      <a
        href="https://twitter.com/sramanujanacad1/status/1277323791186591744?s=12"
        target="_blank"
        className="icon has-text-info"
      >
        <i className="fab fa-twitter-square" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCKZdAXaY_A_QWn85l3lkZzQ"
        target="_blank"
        className="icon has-text-danger"
      >
        <i className="fab fa-youtube" />
      </a>
      <div className="columns is-mobile is-centered">
        <div className="column is-8">
          <div className="columns">
            <div className="column">
              <a
                href="https://forms.gle/obPg1chSSeu5RwRR9"
                target="_blank"
                className="title is-5"
              >
                Scholarship Test
              </a>
            </div>
            <div className="column">
              <Link to="/courses" className="title is-5">
                Courses Offered
              </Link>
            </div>
            <div className="column">
              <Link to="/about" className="title is-5">
                Join us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p>© 2020 S Ramanujan Academy</p>
    </div>
  </StyledFooter>
);

export default Footer;
