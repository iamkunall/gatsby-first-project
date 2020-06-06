import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

const Container = styled.div`
  .columns {
    margin-top: 3rem;
  }
`;

const CoursesHero = ({ data }) => (
  <Container className="section">
    <div className="container">
      <h1 className="title is-2 has-text-centered">{data.title}</h1>
      <div className="columns is-multiline ">
        <div className="column is-7">
          <h2 className="subtitle is-4 has-text-justified">
            <BlockContent blocks={data._rawBody} />
          </h2>
        </div>
        <div className="column is-5">
          <figure className="image is-5by4">
            <img src={data.mainImage.asset.url} alt="ramanujan" />
          </figure>
        </div>
      </div>
    </div>
  </Container>
);

export default CoursesHero;
