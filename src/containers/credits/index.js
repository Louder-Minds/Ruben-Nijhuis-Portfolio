import React from 'react';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled.div`
    background: rgba(0, 0, 0, 0.1);
    padding: 2em;
    margin: 18px;
    border-radius: 6px;
    max-width: 450px;
    margin-bottom: 144px;

    h2 {
        font-size: 54px;
        margin-bottom: 32px;
    }

    p {
        margin-right: 18px;
        font-size: 18px;
        line-height: 1.5;
    }

    a {
        color: rgba(0, 0, 0, 0.5);
        text-decoration: none;

        position: relative;

        &:before {
            position: absolute;
            content: ' ';
            width: 100%;
            bottom: 0;
            left: 0;
            height: 2px;
            background: rgba(0, 0, 0, 0.1);
        }
    }

    ${MEDIA.MIN_OLD_HD`
        margin: auto;
        margin-bottom: 144px;
    `}
`;

const Credits = () => (
    <Container>
        <h2>Many thanks</h2>
        <p>
            Design heavily inspired by <br />
            <a target="_" href="https://daanvanderzwaag.com">
                Daan Van der Zwaag
            </a>
        </p>
    </Container>
);

export default Credits;
