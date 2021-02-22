import React from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { magicNumber, mainDark, bodySmall } from 'constants/theme';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import MEDIA from 'helpers/mediaTemplates';

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

        margin-bottom: 72px;

        h1 {
            margin-left: 0px;
            font-size: 56px;
            margin-bottom: 18px;
        }

        p {
            margin-right: 18px;
        }

        .bold {
            font-weight: 700;
            margin-bottom: 9px;
        }

        .subjects {
            display: flex;
            margin-bottom: 72px;

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

        .project-deets {
            display: flex;

            div {
                margin-right: 36px;
            }
        }
    }
    .content {
        padding: 18px;
        padding-top: 36px;
        background: #fafafa;
        border-radius: 9px;

        font-size: 24px;

        margin-bottom: 72px;
    }

    ${MEDIA.MIN_OLD_HD`
    margin-top: -144px;
        padding: 72px;

        .caseOpening {
            padding: 72px;

            h1 {
                margin-left: -36px;
            font-size: 75px;
            margin-bottom: 18px;
            }
        }

        .content {
        padding: 72px;
        background: #fafafa;
        border-radius: 9px;

        font-size: 24px;

        margin-bottom: 72px;
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
                        <ul className="subjects">
                            <li>a</li>
                            <li>b</li>
                            <li>c</li>
                        </ul>
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
                    <div className="content">{renderRichText(content)}</div>
                </Content>
            </Container>
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
            backgroundImg {
                fluid(quality: 90, maxWidth: 750) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            content {
                raw
            }
        }
    }
`;
