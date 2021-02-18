import React from 'react';
import styled from 'styled-components';
import {
    mainDark,
    bodyRegular,
    underline,
    magicNumber,
    bodyLarge,
    darkBackWhite,
} from 'constants/theme';

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background: ${mainDark};
    padding: calc(${magicNumber} / 2);
    height: 216px;
    min-width: 432px;
    width: 432px;
    border-radius: 9px;
    justify-content: space-between;
    margin-right: 36px;

    .where {
        color: ${underline};
        font-size: ${bodyRegular};
    }

    .what {
        margin-bottom: 54px;
        font-size: ${bodyLarge};
        color: ${darkBackWhite};
    }

    .when {
        color: ${darkBackWhite};
        font-size: ${bodyRegular};
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
