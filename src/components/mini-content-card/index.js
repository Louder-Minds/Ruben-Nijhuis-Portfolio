import React from 'react';
import styled from 'styled-components';
import {
    mainDark,
    bodyRegular,
    underline,
    magicNumber,
    bodyLarge,
    bodySmall,
    darkBackWhite,
    imgBorderRadius,
} from 'constants/theme';

const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: space-between;

    background: ${mainDark};
    border-radius: ${imgBorderRadius};

    padding: calc(${magicNumber} / 3.5) calc(${magicNumber} / 3);
    margin: auto;

    min-height: calc(${magicNumber} * 1);
    width: 100%;
    height: 100%;

    .where {
        color: ${underline};
        font-size: ${bodySmall};
        margin-bottom: calc(${magicNumber} / 8);
    }

    .what {
        line-height: 1.2;
        margin-bottom: calc(${magicNumber} / 2);
        font-size: ${bodyLarge};
        color: ${darkBackWhite};
    }

    .when {
        color: ${darkBackWhite};
        font-size: ${bodySmall};
    }
`;

const MiniContentCards = ({ where, what, when }) => (
    <Container>
        <h2 className="where">{where}</h2>
        <h2 className="what">{what}</h2>
        <h2 className="when">{when}</h2>
    </Container>
);

export default MiniContentCards;
