import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

const Container = styled.div`
  .columns {
    margin-top: 3rem;
  }
  .subtitle {
    p {
      margin-top: 1.5rem;
    }
    ul {
      list-style: disc;
    }
    li {
      margin-left: 2rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const CoursesHero = ({ data }) => (
  <Container className="section">
    <div className="container">
      <h1 className="title is-2 has-text-centered">{data.title}</h1>
      <div className="columns is-multiline ">
        <div className="column is-7">
          <div className="subtitle is-4">
            <BlockContent blocks={data._rawBody} />
          </div>
        </div>
        <div className="column is-5">
          <figure className="image is-5by4">
            <img src={data.mainImage.asset.url} alt="sramanujan academy" />
          </figure>
        </div>
      </div>
    </div>
  </Container>
);

export default CoursesHero;
