import React from 'react';
import styled from 'styled-components';
import MiniContentCard from 'components/mini-content-card';
import { magicNumber, h1, subtitle } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled.div`
    .subtitle {
        margin-left: calc(${magicNumber} / 4);
        margin-bottom: calc(${magicNumber} / 2);

        font-size: ${h1};
        font-weight: 700;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: calc(${magicNumber} / 2);
        padding: calc(${magicNumber} / 4);

        margin-bottom: calc(${magicNumber} * 2);
    }

    ${MEDIA.MIN_TABLET`
        margin-bottom: calc(${magicNumber} * 2);

        .container {
            grid-template-columns: 1fr 1fr;
            margin-bottom: calc(${magicNumber} * 1);
        }
    `};

    ${MEDIA.MIN_OLD_HD`
        margin-bottom: calc(${magicNumber} * 2);
        max-width: calc(100vw - calc(${magicNumber} * 2));

        .container {
            padding: calc(${magicNumber} / 2);
        }

        .subtitle {
            margin-left: calc(${magicNumber} / 2);
            margin-bottom: calc(${magicNumber} / 4);
            font-size: ${subtitle};
            font-weight: 700;
        }
    `}

    ${MEDIA.MIN_HD_READY`
        .container {
            grid-template-columns: 1fr 1fr 1fr;
        }
    `};
`;

const MiniContentCardsScroll = ({ work, education }) => (
    <Container>
        <h2 className="subtitle">Work</h2>
        <div className="container">
            {work.map(({ where, what, when }, i) => (
                <MiniContentCard
                    where={where}
                    what={what}
                    when={when}
                    key={i}
                />
            ))}
        </div>
        <h2 className="subtitle">Education</h2>
        <div className="container">
            {education.map(({ where, what, when }, i) => (
                <MiniContentCard
                    where={where}
                    what={what}
                    when={when}
                    key={i}
                />
            ))}
        </div>
    </Container>
);

export default MiniContentCardsScroll;
