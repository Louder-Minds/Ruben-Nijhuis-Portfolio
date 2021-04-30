import React from 'react';
import styled from 'styled-components';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Img from 'gatsby-image';
import MEDIA from 'helpers/mediaTemplates';
import { BLOCKS } from '@contentful/rich-text-types';
import {
    magicNumber,
    imgBorderRadius,
    bodyLarge,
    lineHeight,
    subtitle,
} from 'constants/theme';

const options = {
    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => {
            return <p className="bold">{children[0]}</p>;
        },
    },
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    margin: auto;
    margin-bottom: calc(${magicNumber} * 1);
    padding: calc(${magicNumber} / 4);
    padding-top: calc(${magicNumber} / 2);

    .img-info-container {
        grid-area: img;
        border-radius: ${imgBorderRadius};

        .gatsby-image-wrapper {
            margin-bottom: calc(${magicNumber} / 2);
            height: calc(${magicNumber} * 6);
        }

        .content {
            &:hover {
                border-bottom: 2px solid rgba(0, 0, 0, 0.5);
            }

            margin-bottom: calc(${magicNumber} / 4);
            padding-bottom: calc(${magicNumber} / 4);
            border-bottom: 2px solid rgba(0, 0, 0, 0.1);
            transition: border 0.35s ease-in-out;

            a {
                text-decoration: none;
                color: black;
                font-size: ${bodyLarge};
            }
        }
    }

    .text {
        grid-area: text;
        border-radius: 0px 0px ${imgBorderRadius} ${imgBorderRadius};
        max-width: 100%;
        font-size: ${bodyLarge};
        line-height: ${lineHeight};

        .bold {
            font-size: ${subtitle};
            font-weight: 900;
        }
    }

    ${MEDIA.MIN_OLD_HD`
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: calc();
        grid-template-areas:
            'text'
            'img';

        grid-gap: calc(${magicNumber} / 2);
        box-sizing: border-box;

        padding: calc(${magicNumber} / 4);
        grid-template-areas: 'text img';

        .img-info-container {
            position: sticky;
            top: 0px;
            .gatsby-image-wrapper {
                height: calc(${magicNumber} * 10);
            }
        }
        .text {
            background: none;
            font-size: ${bodyLarge};
        }
    `}

    ${MEDIA.MIN_HD_READY`
        padding: calc(${magicNumber} / 2);
        grid-gap: calc(${magicNumber} * 1);

        .text {
            background: none;
            font-size: ${bodyLarge};

            p {
                margin-bottom: calc(${magicNumber} / 2);
            }
        }

    `}
`;

const ExtendedAbout = ({ img, text }) => (
    <Container>
        <div className="text">{renderRichText(text, options)}</div>
        <div className="img-info-container">
            <Img fluid={img.fluid} alt="me" />
            <div className="content underline">
                <a href="#">Download my resume</a>
            </div>
            <div className="content">
                <a href="#">Want to collaborate?</a>
            </div>
        </div>
    </Container>
);

export default ExtendedAbout;
