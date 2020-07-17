import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const Container = styled.section`
  padding-top: 0rem !important;
  .title {
    margin: 25px 0px;
  }
  .has-text-centered {
    margin-top: 50px;
  }
`;

const Content = styled(BlockContent)`
  margin-bottom: 60px;
  p {
    margin: 10px 0px;
  }
`;

const DetailsSection = ({ data }) => {
  return (
    <Container className="section">
      <div className="container">
        <h1 className="title is-3 has-text-primary is-spaced">Description</h1>
        <h1 className="subtitle is-4 text">
          <Content blocks={data._rawDescription} />
        </h1>
        <h1 className="title is-3 has-text-primary">What you'll learn</h1>
        <div className="columns is-multiline">
          {data.points.map(item => (
            <div className="column is-half">
              <div className="point">
                <span className="icon has-text-info is-inline-block">
                  <i className="fas fa-check-circle" />
                </span>
                <p className="subtitle is-4 is-inline">{item}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="title is-3 has-text-primary">Requirements</h1>
        <ul>
          {data.requirements.map(item => (
            <li className="subtitle is-5">{item} </li>
          ))}
        </ul>
        <div className="has-text-centered">
          <a
            type="button"
            className="button is-info is-medium"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfFuV3HzJfP11F6ueMZA_fHxEaXRe5VVPXsv68ZrXgV0ZgWjQ/viewform?usp=sf_link"
            target="blank"
          >
            APPLY ONLINE
          </a>
        </div>
      </div>
    </Container>
  );
};

export default DetailsSection;
