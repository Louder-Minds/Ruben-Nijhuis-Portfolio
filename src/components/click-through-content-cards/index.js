import React from 'react';
import styled from 'styled-components';
import ContentCard from 'components/content-card';
import { magicNumber, contentCardTestData } from 'constants/theme';

const ref1 = contentCardTestData[0];
const ref2 = contentCardTestData[1];

const Container = styled.div`
    padding: 0px calc(${magicNumber} / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${magicNumber};
    margin-bottom: calc(${magicNumber} * 2);

    .subtitle {
        margin-bottom: 36px;
        font-size: 24px;
    }
`;

const ClickThroughContentCards = () => (
    <Container>
        <div>
            <h2 className="subtitle">Recent case</h2>
            <ContentCard
                title={ref1.title}
                tagline={ref1.tagline}
                img={ref1.img}
                subjects={ref1.subjects}
                type={ref1.type}
                full={ref1.full}
            />
        </div>

        <div>
            <h2 className="subtitle">Recent journal entry</h2>
            <ContentCard
                title={ref2.title}
                tagline={ref2.tagline}
                img={ref2.img}
                subjects={ref2.subjects}
                type={ref2.type}
                full={ref2.full}
            />
        </div>
    </Container>
);

export default ClickThroughContentCards;
