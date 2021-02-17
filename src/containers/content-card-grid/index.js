import React from 'react';

import styled from 'styled-components';
import ContentCard from 'components/content-card';

const GridContainer = styled.div`
  padding: 0px 36px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 72px;
  grid-row-gap: 72px;

  padding-left: 216px;
`;

const ContentCardGrid = ({ projects }) => (
  <GridContainer>
    {projects.map(({ title, tagline, img, subjects, type, full }, i) => (
      <ContentCard
        title={title}
        tagline={tagline}
        img={img}
        subjects={subjects}
        type={type}
        full={full}
        key={i}
      />
    ))}
  </GridContainer>
);

export default ContentCardGrid;
