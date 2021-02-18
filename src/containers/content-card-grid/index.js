import React from 'react';
import styled from 'styled-components';
import ContentCard from 'components/content-card';
import { magicNumber } from 'constants/theme';

const GridContainer = styled.div`
    padding: 0px calc(${magicNumber} / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: ${magicNumber};
    grid-row-gap: ${magicNumber};

    margin-bottom: ${magicNumber};
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
                it={i}
                key={i}
            />
        ))}
    </GridContainer>
);

export default ContentCardGrid;
