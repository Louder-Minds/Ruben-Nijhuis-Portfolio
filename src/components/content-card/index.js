import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import pageLinkGenerator from 'helpers/pageLinkGenerator';
import Img from 'gatsby-image';

import {
    imgTestLink,
    bodySmall,
    imgBorderRadius,
    magicNumber,
    mainDark,
    bodyLarge,
} from 'constants/theme';

const Container = styled.div`
    ${props =>
        props.full &&
        css`
            grid-column: 1 / -1;
        `}

    &:hover {
        cursor: pointer;

        .img {
            div {
                transform: scale(1.025);
            }
        }
    }

    .img {
        height: calc(${magicNumber} * 6);
        position: relative;
        border-radius: ${imgBorderRadius};
        overflow: hidden;

        div {
            width: 100%;
            object-fit: cover;
            transition: transform 0.25s ease-in-out;
            transform: scale(1);
        }

        .subjects {
            position: absolute;
            display: flex;
            justify-content: start;
            bottom: calc(${magicNumber} / 4);
            left: calc(${magicNumber} / 4);

            ${props =>
                props.full &&
                css`
                    bottom: calc(${magicNumber} / 2);
                    left: calc(${magicNumber} / 2);
                `}

            li {
                color: white;
                margin-right: calc(${magicNumber} / 4);
                border-radius: 100px;
                background: ${mainDark};
                padding: 7px 13px;
                font-size: ${bodySmall};
                text-align: center;
            }
        }
    }

    .text {
        width: 100%;
        max-width: 100%;

        h2 {
            margin-top: calc(${magicNumber} / 4);
            color: #e1e1e1;
            font-size: ${bodyLarge};
        }

        h1 {
            color: black;
            margin-top: calc(${magicNumber} / 8);
            font-size: ${bodyLarge};
        }
    }
`;

const ContentCard = ({
    title = 'Studio Kffein',
    tagline = 'Pinnacle overcome decieve marvelous decieve eternal-return.',
    img,
    subjects = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    type = 'projects',
    full,
    it,
}) => (
    <Container full={full}>
        <Link
            to={`/${type}/${pageLinkGenerator(title)}`}
            style={{ textDecoration: 'none' }}
        >
            <div className="img">
                <Img fluid={img.fluid} alt="project" />
                {/* <ul className="subjects">
                    {subjects.map((subject, i) => (
                        <li key={i}>{subject}</li>
                    ))}
                </ul> */}
            </div>
            <div className="text">
                <h2>{title}</h2>
                <h1>{tagline}</h1>
            </div>
        </Link>
    </Container>
);

export default ContentCard;
