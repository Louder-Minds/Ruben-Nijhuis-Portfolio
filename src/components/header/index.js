import React from 'react';
import styled, { css } from 'styled-components';
import {
    highlight,
    mainDark,
    magicNumber,
    bodyLarge,
    h1,
} from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: calc(${magicNumber} / 8) 18px;
    background: ${mainDark};
    box-sizing: border-box;
    border-top: 2px solid black;
    border-bottom: 2px solid black;

    .first {
        font-size: ${bodyLarge};
        font-weight: 700;
        color: white;
        width: 50%;
    }

    .seconds {
        font-weight: 700;
        font-size: ${bodyLarge};
        color: ${highlight};
        justify-self: end;
        text-align: right;
        width: 50%;
    }

    span {
        color: ${highlight};
    }

    ${props =>
        props.light &&
        css`
            background: white;

            .first {
                color: black;
            }
        `}

    ${MEDIA.MIN_OLD_HD`
        align-items: start;
        top: 0;
        border-bottom: 0;
        border-top: none;
        position: relative;
        padding: calc(${magicNumber} / 2);

        .first, .seconds {
            font-size: ${h1};
        }
    `}
`;

const Header = ({ light, title, secondaryTitle }) => (
    <Container light={light}>
        <h1
            className="first"
            dangerouslySetInnerHTML={{
                __html: title,
            }}
        ></h1>
        {secondaryTitle !== undefined ? (
            <h1
                className="seconds"
                dangerouslySetInnerHTML={{
                    __html: secondaryTitle,
                }}
            ></h1>
        ) : null}
    </Container>
);

export default Header;
