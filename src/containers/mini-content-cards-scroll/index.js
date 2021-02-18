import React from 'react';
import styled from 'styled-components';
import MiniContentCard from 'components/mini-content-card';
import { magicNumber } from 'constants/theme';

const Container = styled.div`
    max-width: calc(100vw - calc(${magicNumber} * 2));
    overflow-x: scroll;
    .scrollableContainer {
        margin-bottom: 72px;
        padding: 36px;
        padding-right: 72px;
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        max-width: calc(100vw - calc(${magicNumber} * 2));
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
    }
    .scrollableContainer::-webkit-scrollbar {
        width: 0;
    }

    .subtitle {
        margin-left: 36px;
        font-size: 24px;
        font-weight: 700;
    }
`;

const MiniContentCardsScroll = ({ data }) => (
    <Container>
        <h2 className="subtitle">Work</h2>
        <div className="scrollableContainer">
            {data.map(({ where, what, when }, i) => (
                <MiniContentCard
                    where={where}
                    what={what}
                    when={when}
                    key={i}
                />
            ))}
        </div>
        <h2 className="subtitle">Education</h2>
        <div className="scrollableContainer">
            {data.map(({ where, what, when }, i) => (
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
