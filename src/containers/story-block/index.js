import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import {
    imgTestLink,
    imgBorderRadius,
    magicNumber,
    mainDark,
    bodyLarge,
    bodyRegular,
    offsetDark,
    regularBorderRadius,
    darkBackWhite,
    lineHeight,
} from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled.section`
    padding: calc(${magicNumber} / 4);
    box-sizing: border-box;
    margin-right: 0;

    h2 {
        font-size: 56px;
        margin-bottom: 36px;
        font-weight: 500;
    }

    .flex-container {
        display: grid;
        grid-template-rows: repeat(2, 50%);
        grid-template-rows: 1fr;
    }

    .img {
        width: 100%;
        border-radius: ${imgBorderRadius} ${imgBorderRadius} 0px 0px;
        height: calc(${magicNumber} * 5);
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .text {
        padding: calc(${magicNumber} / 4);
        border-radius: 0px 0px ${regularBorderRadius} ${regularBorderRadius};
        background: ${mainDark};

        p {
            color: ${darkBackWhite};
            font-size: ${bodyRegular};
            margin-bottom: calc(${magicNumber} / 2);
            line-height: ${lineHeight};
        }

        .italic {
            font-style: italic;
            margin-bottom: calc(${magicNumber} / 2);
        }

        a {
            box-sizing: border-box;
            width: 100%;
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

    ${MEDIA.MIN_OLD_HD`
        border-top: solid 2px black;
        border-bottom: solid 2px black;

        h2 {
            margin-bottom: 72px;
        }

        padding: ${magicNumber};

        .flex-container {
            grid-template-columns: repeat(2, 50%);
            grid-template-rows: 1fr;
        }

        .img {
            width: 100%;
            border-radius: ${imgBorderRadius} 0px 0px ${imgBorderRadius};
            height: 100% !important;
            overflow: hidden;

            img {
                height: 100%;
                width: auto;
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
    `}
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
                {/* <p>
                    These days the main digital focus of Ruben lies at three
                    dimensional digital experiences. With the increasing power
                    mobile devices posess he saw an opportunity that was only
                    just starting to emerge. By adding small 3d interactions on
                    sites he created online experiences that have never been
                    built before.
                </p> */}
                <p>
                    Apart from creating unique digital products he focuses on
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
