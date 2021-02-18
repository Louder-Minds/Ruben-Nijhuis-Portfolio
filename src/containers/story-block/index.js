import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import {
    imgTestLink,
    imgBorderRadius,
    magicNumber,
    mainDark,
    bodyLarge,
    offsetDark,
    regularBorderRadius,
    darkBackWhite,
    lineHeight,
} from 'constants/theme';

const Container = styled.section`
    display: flex;
    background: ${offsetDark};
    padding: ${magicNumber};
    min-height: 100vh;
    box-sizing: border-box;

    .img {
        min-width: 504px;
        border-radius: ${imgBorderRadius} 0px 0px ${imgBorderRadius};
        overflow: hidden;

        img {
            min-height: 100%;
            height: calc(100vh - calc(${magicNumber} * 2));
        }
    }

    .text {
        padding: ${magicNumber};
        border-radius: 0px ${regularBorderRadius} ${regularBorderRadius} 0px;
        background: ${mainDark};

        p {
            color: ${darkBackWhite};
            font-size: ${bodyLarge};
            margin-bottom: calc(${magicNumber} / 2);
            line-height: ${lineHeight};
        }

        .italic {
            font-style: italic;
            margin-bottom: ${magicNumber};
        }

        a {
            display: inline-block;
            border-radius: ${regularBorderRadius};
            padding: calc(${magicNumber} / 3) calc(${magicNumber} / 2);
            background: ${darkBackWhite};
            color: black;
            text-decoration: none;
            outline: none;
        }
    }
`;

const StoryBlock = () => (
    <Container>
        <div className="img">
            <img src={imgTestLink} alt="project" />
        </div>

        <div className="text">
            <p>Ruben Nijhuis is an Amsterdam based web developer.</p>
            <p>
                Currently building the agency Louder Minds by growing his
                expertise in branding, design and digital product development.
            </p>
            <p>
                Apart from creating unique digital experiences he focuses on
                learning more about art & culture by traveling to interesting
                places, documenting his travels with his trusty camera.
            </p>
            <p className="italic">
                Working with creatives — Developing the internet
            </p>
            <Link to={`/about`}>Read more about his story</Link>
        </div>
    </Container>
);

export default StoryBlock;
