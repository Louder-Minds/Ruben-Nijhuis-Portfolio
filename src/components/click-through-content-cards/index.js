import React from 'react';
import styled from 'styled-components';
import ContentCard from 'components/content-card';
import { magicNumber, bodyLarge } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled.div`
    padding: 0px calc(${magicNumber} / 4);
    margin-bottom: calc(${magicNumber} * 2);

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: calc(${magicNumber});

    .subtitle {
        margin-bottom: calc(${magicNumber} / 3);
        font-size: ${bodyLarge};
        font-weight: 700;
    }

    ${MEDIA.MIN_OLD_HD`
        grid-template-columns: repeat(2, 1fr);
        padding: 0px calc(${magicNumber} / 2);
    `}
`;

const ClickThroughContentCards = ({ project, journal }) => (
    <Container>
        <div>
            <h2 className="subtitle">Recent case</h2>
            <ContentCard
                title={project.title}
                tagline={project.tagline}
                img={project.backgroundImg}
                subjects={project.subjects}
                type={'projects'}
                full={false}
            />
        </div>

        <div>
            <h2 className="subtitle">Recent journal entry</h2>
            <ContentCard
                title={journal.title}
                tagline={journal.tagline}
                img={journal.backgroundImg}
                subjects={journal.subjects}
                type={'journal'}
                full={false}
            />
        </div>
    </Container>
);

export default ClickThroughContentCards;
