import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import ContentCardGrid from 'containers/content-card-grid';
import Header from '../components/header';

const Projects = ({ data }) => (
    <Layout>
        <Header
            title={`Portfolio <br/> 2020 <span>•</span> 2021`}
            secondaryTitle={`Ad <br/> Explorandum`}
        />
        <ContentCardGrid
            full={false}
            type={'projects'}
            amount={'full'}
            cards={data.allContentfulProject}
        />
    </Layout>
);

Projects.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Projects;

export const query = graphql`
    query ProjectIndexQuery {
        allContentfulProject {
            edges {
                node {
                    title
                    tagline
                    subjects {
                        raw
                    }
                    backgroundImg {
                        fluid(quality: 90, maxWidth: 750) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
            totalCount
        }
    }
`;
