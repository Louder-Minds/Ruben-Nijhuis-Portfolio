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
        <ContentCardGrid projects={contentCardTestData} />
        {/* <ClickThroughContentCards /> */}
    </Layout>
);

Journal.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Journal;

// export const query = graphql`
//     query AboutQuery {
//         aboutJson {
//             title
//             content {
//                 childMarkdownRemark {
//                     html
//                 }
//             }
//         }
//     }
// `;
