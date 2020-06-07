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
    background-color: #07c5a1;
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
    border-bottom: 27.71px solid #07c5a1;
  }

  .hexagon:after {
    top: 100%;
    width: 0;
    border-top: 27.71px solid #07c5a1;
  }
  .card {
    margin-top: -3rem;
    z-index: -1;
    padding: 4.5rem 1rem 3rem 1rem;
    height: 19rem;
    border-radius: 1rem;
    box-shadow: 2px 2px 5px 3px #07c5a150;
  }
`;

const HomeFeatures = ({ data }) => (
  <Container className="section">
    <div className="container has-text-centered">
      <h1 className="title is-2">{data.featuresTitle}</h1>
      <div className="columns is-mobile is-centered">
        <div className="column is-11">
          <div className="columns is-multiline">
            {data.featuresPoints.map(items => (
              <div className="column is-4">
                <span className="icon hexagon">
                  <i className="fas fa-graduation-cap" />
                </span>
                <div className="card">
                  <h1 className="title is-5 has-text-weight-bold">
                    {items.title}
                  </h1>
                  <p className="subtitle is-5">{items.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default HomeFeatures;
