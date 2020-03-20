import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .columns {
    margin-top: 3rem;
  }
`;

const CoursesHero = () => (
  <Container className="section">
    <div className="container">
      <h1 className="title is-2 has-text-centered">Course Title</h1>
      <div className="columns is-multiline ">
        <div className="column is-5">
          <figure className="image is-5by4">
            <img src="https://bulma.io/images/placeholders/256x256.png" />
          </figure>
        </div>
        <div className="column is-7">
          <h2 className="subtitle is-4">
            Lorem ipsum dolor sit amet, purus suspendisse malesuada enim cum
            commodo vivamus, mauris vel fusce lectus enim luctus, nec dui
            sodales ligula. Posuere elit, do per convallis venenatis, mollis
            metus, dolor convallis donec. Nulla ac nulla enim consectetuer vel,
            non sapien consectetuer ultrices risus ullamcorper ac, vel magnis
            quam, ultricies quisque suscipit purus porta. Consectetuer maecenas
            mattis non rhoncus, duis mollis mollis felis, vitae metus dui fusce
            feugiat. Ipsum commodo egestas vitae, nibh erat accumsan porta eget
            risus.
          </h2>
        </div>
        <div className="column is-5">
          <figure className="image is-5by4">
            <img src="https://bulma.io/images/placeholders/256x256.png" />
          </figure>
        </div>
        <div className="column is-7">
          <h2 className="subtitle is-4">
            Lorem ipsum dolor sit amet, purus suspendisse malesuada enim cum
            commodo vivamus, mauris vel fusce lectus enim luctus, nec dui
            sodales ligula. Posuere elit, do per convallis venenatis, mollis
            metus, dolor convallis donec. Nulla ac nulla enim consectetuer vel,
            non sapien consectetuer ultrices risus ullamcorper ac, vel magnis
            quam, ultricies quisque suscipit purus porta. Consectetuer maecenas
            mattis non rhoncus, duis mollis mollis felis, vitae metus dui fusce
            feugiat. Ipsum commodo egestas vitae, nibh erat accumsan porta eget
            risus.
          </h2>
        </div>
      </div>
    </div>
  </Container>
);

export default CoursesHero;
