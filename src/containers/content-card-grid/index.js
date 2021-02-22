import React from 'react';
import styled from 'styled-components';
import ContentCard from 'components/content-card';
import { magicNumber } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

const GridContainer = styled.div`
    padding: calc(${magicNumber} / 4);
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: ${magicNumber};
    margin-bottom: 72px;

    ${MEDIA.MIN_OLD_HD`
        padding: calc(${magicNumber} / 2);
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: ${magicNumber};
    `}
`;

const ContentCardGrid = ({ cards, full, type, amount }) => (
    <GridContainer>
        {cards.edges.map(({ node }, i) => {
            const { title, tagline, backgroundImg, subjects } = node;
            const makeFull = i === 0 && full === true ? true : false;

            if (amount === 'full') {
                return (
                    <ContentCard
                        title={title}
                        tagline={tagline}
                        img={backgroundImg}
                        subjects={subjects}
                        full={makeFull}
                        it={i}
                        key={i}
                        type={type}
                    />
                );
            } else {
                if (amount > i) {
                    return (
                        <ContentCard
                            title={title}
                            tagline={tagline}
                            img={backgroundImg}
                            subjects={subjects}
                            full={makeFull}
                            it={i}
                            key={i}
                            type={type}
                        />
                    );
                }
            }
        })}
    </GridContainer>
);

export default ContentCardGrid;
