import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const Container = styled.div`
  .point {
    margin-top: 30px;
  }
  .text {
    margin: 30px 0 50px 0;
  }
  .test {
    margin-bottom: 50px;
  }
`;

const DetailsSection = ({ data }) => {
  return (
    <Container className="section">
      <div className="container">
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

        <h1 className="title is-3 has-text-primary is-spaced">Description</h1>
        <h1 className="subtitle is-4 test">
          <BlockContent blocks={data._rawDescription} />
        </h1>
        <h1 className="title is-3 has-text-primary">Requirements</h1>
        <ul>
          {data.requirements.map(item => (
            <li className="subtitle is-5">{item} </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default DetailsSection;
