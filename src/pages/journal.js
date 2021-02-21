import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import ContentCardGrid from 'containers/content-card-grid';
import { contentCardTestData } from 'constants/theme';
import Header from 'components/header';

const Journal = ({ data }) => (
    <Layout>
        <Header title={`Journal`} />
        <ContentCardGrid
            full={false}
            type={'journal'}
            cards={data.allContentfulJournal}
            amount={'full'}
        />
    </Layout>
);

Journal.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Journal;

export const query = graphql`
    query {
        allContentfulJournal {
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
        }
    }
`;
