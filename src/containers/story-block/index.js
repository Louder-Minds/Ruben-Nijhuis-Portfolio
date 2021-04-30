import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {
    imgBorderRadius,
    magicNumber,
    mainDark,
    bodyRegular,
    regularBorderRadius,
    darkBackWhite,
    lineHeight,
    h2,
    subtitle,
} from 'constants/theme';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled.section`
    padding: calc(${magicNumber}) calc(${magicNumber} / 4);
    box-sizing: border-box;
    margin-right: 0;
    background: black;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 56px;
        margin-bottom: calc(${magicNumber} / 2);
        font-weight: 500;
    }

    .flex-container {
        background: ${mainDark};
        border-radius: ${imgBorderRadius};
        display: grid;
        grid-template-rows: 1fr;
    }

    .img {
        width: 100%;
        border-radius: ${imgBorderRadius} ${imgBorderRadius} 0px 0px;
        height: calc(${magicNumber} * 5);
        overflow: hidden;

        div {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .text {
        padding: calc(${magicNumber} / 2);
        border-radius: 0px 0px ${regularBorderRadius} ${regularBorderRadius};
        background: white;

        p {
            color: black;
            font-size: ${bodyRegular};
            margin-bottom: calc(${magicNumber} / 2);
            line-height: ${lineHeight};
        }

        p:last-child {
            margin-bottom: 0px;
        }

        a {
            color: black;
            display: inline-block;
            transition: all 0.5s ease-in-out;
            position: relative;
            text-decoration: none;
            font-size: 16px;

            &:hover {
                &:after {
                    width: 100%;
                }
            }

            &:before,
            &:after {
                content: '';
                width: 98%;
                position: absolute;
                display: block;
                bottom: 5px;
                left: 1%;
                height: 2px;
                border-radius: 100px;
                background: rgba(0, 0, 0, 0.25);
            }

            &:after {
                background: rgba(0, 0, 0, 1);
                width: 0%;
                transition: width 0.5s;
                transition-timing-function: cubic-bezier(0.58, 0.01, 0.9, 0.66);
            }
        }
    }

    ${MEDIA.MIN_TABLET`
        .img {
            height: calc(${magicNumber} * 10);
        }
        
        .text {
            display: flex;
            align-content: center;
            justify-content: center;
            flex-direction: column;
            
            p {
                font-size: ${subtitle};
            }
        }
        `}

    ${MEDIA.MIN_OLD_HD`  
        margin-bottom: 144px;

        .flex-container {
            grid-template-columns: repeat(2, 50%);
            grid-template-rows: 1fr;
        }

        .img {
            border-radius: ${imgBorderRadius} 0px 0px ${imgBorderRadius};
            height: 100%;
            min-height: calc(${magicNumber} * 8);
        }

        .text {
            border-radius: 0px ${regularBorderRadius} ${regularBorderRadius} 0px;

            p {
                font-size: 32px;
                margin-bottom: calc(${magicNumber} / 2);
                line-height: ${lineHeight};
            }

            a {
                font-size: 36px;
                display: inline-block;
                text-decoration: none;
                outline: none;
            }
        }
    `}

    ${MEDIA.MIN_HD_READY`
        padding: calc(${magicNumber});
        margin-bottom: calc(${magicNumber} * 2);

        .flex-container {
            min-height: calc(100vh - 144px);
        }

        h2 {
            margin-bottom: calc(${magicNumber} * 1);
        }

        .text {
            padding: calc(${magicNumber} * 1);

            p {
                font-size: ${h2};
            }
        }
    `}
`;

const StoryBlock = ({ img, text }) => (
    <Container>
        <div className="flex-container">
            <div className="img">
                <Img fluid={img.fluid} alt="me" />
            </div>

            <div className="text">{renderRichText(text)}</div>
        </div>
    </Container>
);

export default StoryBlock;
