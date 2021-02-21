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
    border-top: solid 2px black;
    border-bottom: solid 2px black;
    padding: ${magicNumber};
    box-sizing: border-box;

    h2 {
        font-size: 56px;
        margin-bottom: 72px;
        font-weight: 500;
    }

    .flex-container {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: 1fr;
    }

    .img {
        width: 100%;
        border-radius: ${imgBorderRadius} 0px 0px ${imgBorderRadius};
        overflow: hidden;

        img {
            height: 100%;
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
            padding: calc(${magicNumber} / 3) calc(${magicNumber} / 1.5);
            background: ${darkBackWhite};
            color: black;
            text-decoration: none;
            outline: none;
            font-size: 18px;
        }
    }
`;

const StoryBlock = () => (
    <Container>
        <h2>Hey, this is me</h2>
        <div className="flex-container">
            <div className="img">
                <img src={imgTestLink} alt="project" />
            </div>

            <div className="text">
                <p>Ruben Nijhuis is an Amsterdam based web developer.</p>
                <p>
                    Currently building the agency Louder Minds by growing his
                    expertise in branding, design and digital product
                    development.
                </p>
                <p>
                    Apart from creating unique digital experiences he focuses on
                    learning more about art & culture by traveling to
                    interesting places, meeting new people and discovering ideas
                    from new perspectives all while documenting his travels with
                    his trusty camera.
                </p>
                <p className="italic">
                    Working with creatives — Developing the internet
                </p>
                <Link to={`/about`}>Read more about his story</Link>
            </div>
        </div>
    </Container>
);

export default StoryBlock;
