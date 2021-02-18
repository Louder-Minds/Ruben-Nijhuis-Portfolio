import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import ContentCardGrid from 'containers/content-card-grid';
import StoryBlock from 'containers/story-block';
import { contentCardTestData } from 'constants/theme';
import Header from '../components/header';

const Index = ({ data }) => (
    <Layout>
        <Header
            title={`Portfolio <br/> 2020 <span>•</span> 2021`}
            secondaryTitle={`Ad <br/> Explorandum`}
            light={true}
        />
        <ContentCardGrid projects={contentCardTestData} />
        <StoryBlock />
    </Layout>
);

Index.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
    query HomepageQuery {
        homeJson {
            title
            content {
                childMarkdownRemark {
                    html
                    rawMarkdownBody
                }
            }
            gallery {
                title
                copy
                image {
                    childImageSharp {
                        fluid(maxHeight: 500, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`;
