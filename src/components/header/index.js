import React from 'react';
import styled, { css } from 'styled-components';
import { highlight, mainDark, magicNumber } from 'constants/theme';

const Container = styled.div`
    padding: calc(${magicNumber} / 2);
    background: ${mainDark};
    display: flex;
    justify-content: space-between;

    .first {
        font-size: 75px;
        color: white;
        width: 40%;
        font-weight: 700;
    }

    .seconds {
        font-weight: 700;
        color: ${highlight};
        justify-self: end;
        text-align: right;
        width: 45%;
        font-size: 75px;
    }

    span {
        color: ${highlight};
    }

    ${props =>
        props.light &&
        css`
            background: white;
            border-bottom: 2px solid black;

            .first {
                color: black;
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
