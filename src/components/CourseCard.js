import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const CardStyled = styled.div`
  width: 100%;
  border-radius: 1rem;
  margin: 1rem;
  transition: all 0.5s;
  img {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  :hover {
    transform: scale(1.1);
  }
  .card-content {
    height: 15rem;
    @media only screen and (max-width: 600px) {
      height: auto;
    }
  }
`;

const CourseCard = ({ data }) => (
  <CardStyled className="card">
    <div className="card-image">
      <figure className="image is-5by4">
        <img src={data.mainImage.asset.url} alt="ramanujan" />
      </figure>
    </div>
    <div className="card-content">
      <div className="content has-text-centered">
        <h4 className="title is-4 is-spaced">{data.title}</h4>
        <h5 className="subtitle is-5 has-text-weight-light">{data.Subtitle}</h5>
        <Link to={`/course/${data.slug.current}`} className="button is-primary">
          About this Course
        </Link>
      </div>
    </div>
  </CardStyled>
);

export default CourseCard;
