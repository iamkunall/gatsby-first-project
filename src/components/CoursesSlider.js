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
    height: 35rem;
    width: auto;
  }
`;

const data = [
  {
    title: 'Class 11th Non-Medical',
    image: '/images/courses/maths.png',
  },
  {
    title: 'Class 11th Medical',
    image: '/images/courses/biolog-11.jpg',
  },
  {
    title: 'Class 12th Non-Medical',
    image: '/images/courses/maths-12.png',
  },
  {
    title: 'Class 12th Medical',
    image: '/images/courses/medical-12.png',
  },
  {
    title: '8th,9th,10th With foundation course of JEE and NEET',
    image: '/images/courses/study.png',
  },
  {
    title: 'Advance Courses for JEE and NEET',
    image: '/images/courses/jee.png',
  },
  {
    title: 'Other Entrance  Exams NTSC & NDA and others',
    image: '/images/courses/talent.png',
  },
];

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
            {data.map(items => (
              <CourseCard
                image={items.image}
                title={items.title}
                Subtitle={items.Subtitle}
              />
            ))}
          </Slider>
        </div>
      </Container>
    );
  }
}
