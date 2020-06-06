import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import CourseCard from './CourseCard';

const Container = styled.div`
  .wrapper {
    padding-bottom: 1rem;
    margin-bottom: 5%;
  }
  .slick-initialized .slick-slide {
    outline: none !important;
  }
  .slick-list {
    padding-bottom: 2rem;
  }
  .card {
    width: auto;
  }
`;

export default class CourseSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      autoplaySpeed: 6000,
      cssEase: 'linear',
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            autoplay: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          },
        },
      ],
    };
    const { data, value } = this.props;
    return (
      <Container className="section">
        <div className="container has-text-centered">
          <div className="wrapper">
            <h1 className="title is-2 is-spaced">Popular Courses</h1>
            <h5 className="subtitle is-5">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia, id?
              </span>
            </h5>
          </div>
          <Slider {...settings}>
            {data.map(items => (
              <CourseCard key={items.node.id} data={items.node} />
            ))}
          </Slider>
        </div>
      </Container>
    );
  }
}
