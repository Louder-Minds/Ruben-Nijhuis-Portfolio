import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import pageLinkGenerator from 'helpers/pageLinkGenerator';
import Img from 'gatsby-image';
import MEDIA from 'helpers/mediaTemplates';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import IO from 'components/io';

import {
    bodySmall,
    bodyRegular,
    regularBorderRadius,
    magicNumber,
    mainDark,
    bodyLarge,
} from 'constants/theme';

const formatting = {
    renderNode: {
        [BLOCKS.LIST_ITEM]: (node, children) => (
            <li>{children[0].props.children[0]}</li>
        ),
        [BLOCKS.UL_LIST]: (node, children) => (
            <ul className="subjects">{children}</ul>
        ),
    },
};

const Container = styled.div`
    margin-bottom: 36px;

    // Fade-in animation
    opacity: ${({ hasBeenVisible }) => (hasBeenVisible ? 1 : 0)};
    transform: ${({ hasBeenVisible }) =>
        hasBeenVisible
            ? `translateY(0px) scale(1)`
            : `translateY(18px) scale(0.99)`};
    transition: opacity 0.35s ease-in-out, transform 0.5s ease-in-out;

    // If content-card needs to span full width;
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
        height: calc(${magicNumber} * 4);
        position: relative;
        border-radius: ${regularBorderRadius};
        overflow: hidden;

        div {
            min-width: 100%;
            min-height: 100%;
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
                    bottom: calc(${magicNumber} / 4);
                    left: calc(${magicNumber} / 4);
                `}

            li {
                color: white;
                margin-right: calc(${magicNumber} / 4);
                border-radius: 100px;
                background: ${mainDark};
                padding: 7px 13px;
                font-size: 10px;
                text-align: center;
            }
        }
    }

    .text {
        width: 100%;
        max-width: 100%;

        line-height: 1.3;

        h2 {
            margin-top: calc(${magicNumber} / 4);
            color: #e1e1e1;
            font-size: ${bodyRegular};
        }

        h1 {
            color: black;
            margin-top: calc(${magicNumber} / 8);
            font-size: ${bodyRegular};
        }
    }

    ${MEDIA.MIN_OLD_HD`
        margin-bottom: 0px;
        transition-delay: ${({ i }) => (i % 2 === 0 ? `0.5s` : `0s`)};
        
        .img {
            height: calc(${magicNumber} * 8);

            .subjects {
                bottom: calc(${magicNumber} / 4);
                left: calc(${magicNumber} / 4);
        
                ${props =>
                    props.full &&
                    css`
                        bottom: calc(${magicNumber} / 2);
                        left: calc(${magicNumber} / 2);
                    `}
                li {
                    padding: 8px 16px;
                    font-size: ${bodySmall} !important;
                }
            }
        }

        .text {
            h1, h2 {
                font-size: ${bodyLarge};
            }
        }
    `}
`;

const ContentCard = ({ title, tagline, img, subjects, type, full, it }) => {
    const fullOrNotfull = full ? '1 / -1' : 'auto / auto';
    return (
        <IO rootMargin="-150px" style={{ gridColumn: fullOrNotfull }}>
            {({ isVisible, hasBeenVisible }) => (
                <Container hasBeenVisible={hasBeenVisible} full={full} i={it}>
                    <Link
                        to={`/${type}/${pageLinkGenerator(title)}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="img">
                            <Img fluid={img.fluid} alt="project" />
                            {renderRichText(subjects, formatting)}
                        </div>
                        <div className="text">
                            <h2>{title}</h2>
                            <h1>{tagline}</h1>
                        </div>
                    </Link>
                </Container>
            )}
        </IO>
    );
};

export default ContentCard;
