import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  padding: 0px 36px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 72px;
  grid-row-gap: 72px;

  // For testing purposes (nav-left)
  padding-left: 188px;
`;

const Container = styled.div`
  width: 100%;

  &:hover {
    cursor: pointer;

    .img {
      img {
        transform: scale(1.025);
      }
    }
  }

  .img {
    height: 432px;
    position: relative;
    border-radius: 6px;
    overflow: hidden;

    img {
      width: 100%;
      transition: transform 0.25s ease-in-out;
      transform: scale(1);
    }

    .subjects {
      position: absolute;
      bottom: 36px;
      left: 36px;

      display: flex;
      justify-content: start;

      li {
        color: white;
        margin-right: 18px;
        border-radius: 100px;
        background: black;
        padding: 9px 18px;
        font-size: 13px;
        text-align: center;
      }
    }
  }

  .text {
    width: 100%;
    max-width: 100%;

    h2 {
      margin-top: 18px;
      color: #e1e1e1;
      font-size: 24px;
    }

    h1 {
      color: black;
      margin-top: 9px;
      font-size: 24px;
    }
  }
`;

const ContentCard = ({
  title = 'Studio Kffein',
  tagline = 'Pinnacle overcome decieve marvelous decieve eternal-return.',
  img = '',
  subjects = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
  type = 'Project',
}) => (
  <GridContainer>
    <Container>
      <div className="img">
        <img src="https://source.unsplash.com/800x800" alt="project" />
        <ul className="subjects">
          {subjects.map((subject, i) => (
            <li key={i}>{subject}</li>
          ))}
        </ul>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <h1>{tagline}</h1>
      </div>
    </Container>

    <Container>
      <div className="img">
        <img src="https://source.unsplash.com/400x400" alt="project" />
        <ul className="subjects">
          {subjects.map((subject, i) => (
            <li key={i}>{subject}</li>
          ))}
        </ul>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <h1>{tagline}</h1>
      </div>
    </Container>

    <Container>
      <div className="img">
        <img src="https://source.unsplash.com/400x400" alt="project" />
        <ul className="subjects">
          {subjects.map((subject, i) => (
            <li key={i}>{subject}</li>
          ))}
        </ul>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <h1>{tagline}</h1>
      </div>
    </Container>

    <Container>
      <div className="img">
        <img src="https://source.unsplash.com/400x400" alt="project" />
        <ul className="subjects">
          {subjects.map((subject, i) => (
            <li key={i}>{subject}</li>
          ))}
        </ul>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <h1>{tagline}</h1>
      </div>
    </Container>
  </GridContainer>
);

export default ContentCard;
