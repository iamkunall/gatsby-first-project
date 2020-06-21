import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

const Wrapper = styled.div`
  .particles {
    position: absolute;
    height: 100vh;
    width: 100%;
  }
`;

const particlesoptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300', '#E86363'],
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#b6b2b2',
      },
    },
    opacity: {
      value: 0.5211089197812949,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8.017060304327615,
      random: true,
      anim: {
        enable: true,
        speed: 12.181158184520175,
        size_min: 0.1,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#808080',
      opacity: 0.4,
      width: 1,
    },
  },
  retina_detect: true,
};

const Dots = ({ children }) => {
  return (
    <Wrapper>
      <Particles className="particles" params={particlesoptions} />
    </Wrapper>
  );
};

export default Dots;
