import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  background: black;
  padding: 72px;
  margin-left: 216px;

  .img {
    height: calc(72px * 10);
    min-width: 504px;
    border-radius: 6px 0px 0px 6px;
    overflow: hidden;
  }

  .text {
    padding: 72px;
    border-radius: 0px 6px 6px 6px;
    background: #1e1e1e;

    p {
      color: white;
      font-size: 24px;
      margin-bottom: 36px;
    }

    .italic {
      font-style: italic;
      margin-bottom: 72px;
    }

    a {
      display: inline-block;
      border-radius: 6px;
      padding: 22px 36px;
      background: white;
      color: black;
      text-decoration: none;
    }
  }
`;

const StoryBlock = () => (
  <Container>
    <div className="img">
      <img src="https://source.unsplash.com/800x800" alt="project" />
    </div>

    <div className="text">
      <p>Ruben Nijhuis is an Amsterdam based web developer.</p>
      <p>
        Currently building the agency Louder Minds by growing his expertise in
        branding, design and digital product development.
      </p>
      <p>
        Apart from creating unique digital experiences he focuses on learning
        more about art & culture by traveling to interesting places, documenting
        his travels with his trusty camera.
      </p>
      <p className="italic">Working with creatives — Developing the internet</p>
      <Link to={`/about`}>Read more about his story</Link>
    </div>
  </Container>
);

export default StoryBlock;
