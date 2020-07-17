import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0rem 5rem;
  .carousel .slide {
    background: #ffff !important;
  }
`;

const HomeHeroSlider = () => {
  return (
    <Container>
      <Carousel
        showStatus={false}
        autoPlay
        infiniteLoop
        stopOnHover
        interval={3000}
        showThumbs
        transitionTime={400}
      >
        <div>
          <div className="columns">
            <div className="column">
              <img src="/images/students/first.jpg" alt="sramanujan academy" />
            </div>
            <div className="column">
              <img src="/images/students/second.jpg" alt="sramanujan academy" />
            </div>
          </div>
        </div>
        <div>
          <div className="columns">
            <div className="column">
              <img src="/images/students/third.jpg" alt="sramanujan academy" />
            </div>
            <div className="column">
              <img src="/images/students/fourth.jpg" alt="sramanujan academy" />
            </div>
          </div>
        </div>
        <div>
          <div className="columns">
            <div className="column">
              <img src="/images/students/fifth.jpg" alt="sramanujan academy" />
            </div>
            <div className="column">
              <img src="/images/students/six.jpg" alt="sramanujan academy" />
            </div>
          </div>
        </div>
      </Carousel>
    </Container>
  );
};

export default HomeHeroSlider;
