import React from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { magicNumber, mainDark, bodySmall, bodyRegular } from 'constants/theme';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import MEDIA from 'helpers/mediaTemplates';
import { BLOCKS } from '@contentful/rich-text-types';
import { bodyLarge } from '../constants/theme';
import ClickThroughContentCards from 'components/click-through-content-cards';

const formatting = {
    renderNode: {
        [BLOCKS.LIST_ITEM]: (node, children) => (
            <li>{children[0].props.children[0]}</li>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
            <div className="img-wrapper">
                <Img className="img" fluid={node.data.target.fluid} />
            </div>
        ),
        [BLOCKS.UL_LIST]: (node, children) => (
            <ul className="subjects">{children}</ul>
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

    ${MEDIA.MIN_OLD_HD`
    .heroImg {
        height: calc(72px * 6);
    }
    `}
`;

const Content = styled.div`
    z-index: 10;
    margin-top: -72px;
    padding: 0px;
    position: relative;

    .caseOpening {
        padding: 18px;
        padding-top: 36px;
        background: #fafafa;
        border-radius: 9px;

        font-size: 24px;

        h1 {
            margin-left: 0px;
            font-size: 42px;
            margin-bottom: 18px;
        }

        p {
            font-size: 18px;
            margin-right: 18px;
        }

        .bold {
            font-weight: 700;
            margin-bottom: 9px;
        }

        .subjects {
            display: flex;
            margin-bottom: 46px;

            li {
                color: white;
                margin-right: calc(${magicNumber} / 4);
                border-radius: 100px;
                background: ${mainDark};
                padding: 7px 13px;
                font-size: ${bodySmall};
                text-align: center;

                p {
                    padding: 0;
                    margin: 0;
                }
            }
        }

        .project-deets {
            display: flex;
            font-size: 18px;
            div {
                margin-right: 36px;
            }
        }
    }

    .content {
        padding: 18px;
        padding-top: 36px;
        border-radius: 9px;

        font-size: 24px;

        .img-wrapper {
            border-radius: 9px;
            width: 100%;
            margin: 36px auto;
            max-width: 1000px;
            overflow: hidden;
            box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);

            div {
                max-height: 100%;
                padding-bottom: 62.15 !important;
            }
        }

        h2 {
            margin-bottom: 18px;
            font-weight: 700;
        }

        p {
            font-size: 18px;
            line-height: 1.5;
            max-width: 600px;
            margin: 36px auto;
        }
    }

    ${MEDIA.MIN_OLD_HD`
        margin: auto;
        margin-top: -144px;
        padding: 72px;
        max-width: 1440px

        .caseOpening {
            padding: 72px;

            h1 {
                margin-left: -36px;
                font-size: 75px;
                margin-bottom: 18px;
            }
        }

            
            .content {
                
                h1, h2, h3, h4, h4, h5, h6, p {
                    max-width: 720px;
                    margin: auto;
                }

                line-height: 1.5;
                // padding: 36px;
                background: none;
                border-radius: 9px;
                font-size: 24px;


                .img-wrapper {
                    margin: 72px auto;
                }

                h2 {
                    font-weight: 700;
                    font-size: ${bodyLarge};
                    margin-bottom: 18px;
                }

                p {
                    max-width: 600px;
                    margin: 36px auto;
                    font-size: ${bodyRegular};
                }
        }
    `}
`;

const ProjectTemplate = ({ data }) => {
    // subjects = ['Fun', 'stuff', 'all around'],
    // content,
    const {
        title,
        tagline,
        backgroundImg,
        type1,
        year,
        role,
        content,
        subjects,
    } = data.contentfulProject;
    return (
        <Layout>
            <Container>
                <div className="heroImg">
                    <Img fluid={backgroundImg.fluid} alt="project" />
                </div>
                <Content>
                    <div className="caseOpening">
                        <h1>{title}</h1>
                        <p>{tagline}</p>
                        {renderRichText(subjects, formatting)}
                        <div className="project-deets">
                            <div>
                                <h2 className="bold">Type</h2>
                                <h2>{type1}</h2>
                            </div>
                            <div>
                                <h2 className="bold">Year</h2>
                                <h2>{year}</h2>
                            </div>
                            <div>
                                <h2 className="bold">Role</h2>
                                <h2>{role}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        {renderRichText(content, formatting)}
                    </div>
                </Content>
            </Container>
            <ClickThroughContentCards
                project={data.allContentfulProject.edges[0].node}
                journal={data.allContentfulJournal.edges[0].node}
            />
        </Layout>
    );
};

export default ProjectTemplate;

export const query = graphql`
    query($slug: String!) {
        contentfulProject(title: { eq: $slug }) {
            title
            tagline
            type1
            year
            role
            subjects {
                raw
            }
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
        allContentfulProject(sort: { fields: createdAt }, limit: 1) {
            edges {
                node {
                    title
                    tagline
                    subjects {
                        raw
                    }
                    createdAt
                    backgroundImg {
                        fluid(quality: 90, maxWidth: 750) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
        allContentfulJournal(sort: { fields: createdAt }, limit: 1) {
            edges {
                node {
                    title
                    tagline
                    subjects {
                        raw
                    }
                    createdAt
                    backgroundImg {
                        fluid(quality: 90, maxWidth: 750) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`;
