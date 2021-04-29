import React from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { magicNumber, mainDark, bodySmall, bodyRegular } from 'constants/theme';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import MEDIA from 'helpers/mediaTemplates';
import { BLOCKS } from '@contentful/rich-text-types';
import { bodyLarge } from '../constants/theme';
import Img from 'gatsby-image';

const formatting = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
            <Img className="img" fluid={node.data.target.fluid} />
        ),
    },
};

const Container = styled.div`
    .heroImg {
        overflow: hidden;
        width: 100%;
        height: calc(72px * 4);
        z-index: -10;

        div {
            width: 100%;
        }
    }

    h1 {
        font-weight: 700;
        font-size: 42px;
        margin-bottom: 18px;

        padding: 18px;
        padding-bottom: 0;
    }

    ${MEDIA.MIN_OLD_HD`
        .heroImg {
            height: calc(72px * 6);
        }

        h1 {
            font-weight: 700;
            margin: 18px;
            font-size: 54px;
            margin-bottom: 18px;

            padding: 72px;
            padding-bottom: 0;
            margin: auto;
        }
    `}
`;

const Content = styled.div`
    z-index: 10;
    padding: 0;
    position: relative;

    .content {
        padding: 18px;
        border-radius: 9px;
        font-size: 22px;
        margin-bottom: 72px;

        line-height: 1.5;

        .img {
            margin: 36px 0px;
            border-radius: 9px;
            height: 100%;
            max-height: 500px;
        }

        p {
            max-width: 1008px;
            margin: 36px auto;
        }
    }

    ${MEDIA.MIN_OLD_HD`

        padding: 72px;
        margin: auto;

        .content {
            padding: 0;
        }

        .heroImg {
            height: calc(72px * 6);
        }
    `}
`;

const JournalEntryTemplate = ({ data }) => {
    const { title, tagline, backgroundImg, content } = data.contentfulJournal;
    return (
        <Layout>
            <Container>
                <div className="heroImg">
                    <Img fluid={backgroundImg.fluid} alt="project" />
                </div>
                <h1>{title}</h1>
                <Content>
                    <div className="content">
                        {renderRichText(content, formatting)}
                    </div>
                </Content>
            </Container>
            {/* <ConsizeJournalGrid/> */}
        </Layout>
    );
};

export default JournalEntryTemplate;

export const query = graphql`
    query($slug: String!) {
        contentfulJournal(title: { eq: $slug }) {
            title
            tagline
            backgroundImg {
                fluid(quality: 90, maxWidth: 750) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            content {
                raw
                references {
                    ... on ContentfulAsset {
                        contentful_id
                        __typename
                        fluid(maxWidth: 1440) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`;
