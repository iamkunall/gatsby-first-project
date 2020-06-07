import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const CardStyled = styled.div`
  width: 100%;
  border-radius: 1rem;
  margin: 1rem;
  transition: all 0.5s;
  background-color: #07c5a180 !important;
  box-shadow: 2px 2px 5px 5px #3c40c650;
  img {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  :hover {
    transform: scale(1.1);
  }
  .content {
    height: 8rem;
    @media only screen and (max-width: 600px) {
      height: auto;
    }
  }
  .button {
    border-radius: 15px;
  }
  .button.is-warning {
    background-color: #3c40c6 !important;
  }
`;

const CourseCard = ({ data }) => (
  <CardStyled className="card">
    <div className="card-image">
      <figure className="image is-5by4">
        <img src={data.mainImage.asset.url} alt="ramanujan" />
      </figure>
    </div>
    <div className="card-content has-text-centered">
      <div className="content">
        <h4 className="title is-4 has-text-black is-spaced">{data.title}</h4>
        <h5 className="subtitle is-5  has-text-black has-text-weight-light">
          {data.Subtitle}
        </h5>
      </div>
      <Link
        to={`/course/${data.slug.current}`}
        className="button is-warning has-text-white"
      >
        About this Course
      </Link>
    </div>
  </CardStyled>
);

export default CourseCard;
