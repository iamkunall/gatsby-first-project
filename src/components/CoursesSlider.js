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
            <CourseCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg55f5ZQMzrnRRozjJl9TUZgPj8sgiN7cjuPtm4XUDRswPY51g"
              title="WEB Development "
              Subtitle="your text "
            />
            <CourseCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNgH4KSVgac1tvU04IUBljT_peJC6DBgycSV2npX6bPhRkGjU"
              title="APP Development "
              Subtitle="your text "
            />
            <CourseCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VHK6uG5diWQVBQnZlV74to0Uyq0rmghnh_PDgm3IzNw2xXGppQ "
              title="Airthmatics"
              Subtitle="your text "
            />
            <CourseCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsoyV66dxk_Om-VPmIMwkXfnjRq7C8ObQ3HIPlVA3ykzRcLqm9Q"
              title="Web Designs"
              Subtitle="your text "
            />
          </Slider>
        </div>
      </Container>
    );
  }
}
