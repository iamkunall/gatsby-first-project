import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .title {
    margin-bottom: 3rem;
  }
  .icon {
    color: white;
    font-size: 4rem;
    z-index: 1;
  }
  .hexagon {
    position: relative;
    width: 96px;
    height: 55.43px;
    background-color: ${props => props.theme.mainBrandColor};
    margin: 27.71px 0;
  }

  .hexagon:before,
  .hexagon:after {
    content: '';
    position: absolute;
    width: 0;
    border-left: 48px solid transparent;
    border-right: 48px solid transparent;
  }

  .hexagon:before {
    bottom: 100%;
    border-bottom: 27.71px solid ${props => props.theme.mainBrandColor};
  }

  .hexagon:after {
    top: 100%;
    width: 0;
    border-top: 27.71px solid ${props => props.theme.mainBrandColor};
  }
  .card {
    margin-top: -3rem;
    z-index: -1;
    padding: 4.5rem 1rem 3rem 1rem;
    height: 15rem;
    border-radius: 1rem;
  }
`;

const data = [
  {
    title: 'Personalize Learning',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit',
    icon: 'fas fa-graduation-cap',
  },
  {
    title: 'Personalize Learning',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit',
    icon: 'fas fa-university',
  },
  {
    title: 'Personalize Learning',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit',
    icon: 'fas fa-pencil-ruler',
  },
];

const HomeFeatures = () => (
  <Container className="section">
    <div className="container has-text-centered">
      <div>
        <h1 className="title is-2">What we Provide</h1>
        <div className="columns">
          {data.map(items => (
            <div className="column">
              <span className="icon hexagon">
                <i className={items.icon} />
              </span>

              <div className="card">
                <h1 className="title is-5 has-text-weight-semibold">
                  {items.title}
                </h1>
                <p>{items.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
);

export default HomeFeatures;
