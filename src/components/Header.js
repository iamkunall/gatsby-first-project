/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  font-family: ${props => props.theme.secondaryFontFamily};
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 9rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-weight: 700;
    font-size: 1.2rem;
    :hover {
      color: ${props => props.theme.mainBrandColor};
      background-color: transparent !important;
    }
  }
  .navbar-burger {
    background-color: ${props => props.theme.mainBrandColor};
    color: #000000;
    opacity: 0.6;
    border-radius: 4px;
    margin-top: 3rem;
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
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src="/images/logo.png" alt="sramanujan academy" />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-start">
                <Link to="/" className="navbar-item">
                  Home
                </Link>
                <Link to="/courses" className="navbar-item">
                  Courses
                </Link>
                <Link to="/admission" className="navbar-item">
                  Admission
                </Link>
                <Link to="/about" className="navbar-item">
                  About us
                </Link>
                {/* <Link to="/contact" className="navbar-item">
                  Blogs
                </Link> */}
                <Link to="/contact" className="navbar-item">
                  Contact us
                </Link>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
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
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
