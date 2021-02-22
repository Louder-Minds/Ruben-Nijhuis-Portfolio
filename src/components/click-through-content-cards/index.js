import React from 'react';
import styled from 'styled-components';
import ContentCard from 'components/content-card';
import { magicNumber, contentCardTestData } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

const ref1 = contentCardTestData[0];
const ref2 = contentCardTestData[1];

const Container = styled.div`
    padding: 0px calc(${magicNumber} / 2);
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: ${magicNumber};
    margin-bottom: calc(${magicNumber} * 2);

    .subtitle {
        margin-bottom: 36px;
        font-size: 24px;
    }

    ${MEDIA.MIN_OLD_HD`
        grid-template-columns: repeat(2, 1fr);
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
                type={'project'}
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
