import React from 'react';
import styled from 'styled-components';
import {
    magicNumber,
    bodyLarge,
    regularBorderRadius,
    bodyRegular,
    highlight,
    mainDark,
    darkBackWhite,
} from 'constants/theme';

import MEDIA from 'helpers/mediaTemplates';

const Container = styled.footer`
    box-sizing: border-box;

    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: calc(${magicNumber} / 2);
    grid-template-areas:
        'title'
        'links'
        'copy';

    height: calc(${magicNumber} * 6);
    width: calc(100% - calc(${magicNumber} / 2));

    margin: 0px calc(${magicNumber} / 4);
    padding: calc(${magicNumber} / 4);

    border-radius: ${regularBorderRadius} ${regularBorderRadius} 0px 0px;
    background: ${mainDark};

    h1,
    h2 {
        color: ${darkBackWhite};
        justify-self: start;
        display: block;
    }

    h1 {
        align-self: start;
        grid-area: title;
        font-size: ${bodyLarge};
    }

    h2 {
        align-self: end;
        font-size: ${bodyRegular};
        grid-area: copy;

        .green {
            color: ${highlight};
            font-size: ${bodyLarge};
        }
    }

    .links {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-row-gap: calc(${magicNumber} / 2);

        justify-self: end;
        align-self: center;

        grid-area: links;

        a {
            position: relative;
            width: fit-content;
            height: fit-content;
            font-size: ${bodyLarge};
            text-decoration: none;
            color: ${darkBackWhite};
            text-transform: uppercase;

            &:hover {
                &:after {
                    width: 100%;
                }
            }

            &:before,
            &:after {
                content: '';
                width: 100%;
                position: absolute;
                display: block;
                bottom: -7px;
                left: 0;
                height: 4px;
                border-radius: 100px;
                background: rgba(255, 255, 255, 0.25);
            }

            &:after {
                background: rgba(255, 255, 255, 0.75);
                width: 0%;
                transition: width 0.5s;
                transition-timing-function: cubic-bezier(0.58, 0.01, 0.9, 0.66);
            }
        }
    }

    ${MEDIA.MIN_OLD_HD`
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-row-gap: 0px;

        height: calc(${magicNumber} * 3);

        margin: calc(${magicNumber} * 2) calc(${magicNumber} / 2);
        margin-bottom: 0;
        width: calc(100% - ${magicNumber});
        padding: calc(${magicNumber} / 2);

        grid-template-areas:
            'title links'
            'copy links';

        .links {
            grid-row-gap: calc(${magicNumber} / 2);

            a {
                &:before,
                &:after {
                    bottom: -5px;
                }
            }
        }
    `}
`;

const Footer = () => (
    <Container>
        <h1>Ruben</h1>

        <div className="links">
            <a target="_" href="https://github.com/rubennijhuis">
                Github
            </a>
            <a target="_" href="https://www.instagram.com/ruben__nijhuis/">
                Instagram
            </a>
            <a target="_" href="https://linkedin.com/in/ruben-nijhuis">
                Linkedin
            </a>
            <a target="_" href="https://codepen.io/Ruben-Code">
                Codepen
            </a>
            <a target="_" href="mailto:contact@rubennijhuis.com">
                Email
            </a>
            <a target="_" href="https://louderminds.studio">
                Louder Minds
            </a>
        </div>

        <h2>
            2020 <span className="green">•</span> 2021
        </h2>
    </Container>
);

export default Footer;
