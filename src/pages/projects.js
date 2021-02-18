import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import ContentCardGrid from 'containers/content-card-grid';
import { contentCardTestData } from 'constants/theme';
import Header from '../components/header';

const Projects = ({ data }) => (
    <Layout>
        <Header
            title={`Portfolio <br/> 2020 <span>•</span> 2021`}
            secondaryTitle={`Ad <br/> Explorandum`}
        />
        <ContentCardGrid projects={contentCardTestData} />
        {/* <AboutIntro /> */}
        {/* <PersonalCards /> */}
        {/* <AboutOutro /> */}
        {/* <ClickThroughContentCards /> */}
    </Layout>
);

Projects.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Projects;

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
