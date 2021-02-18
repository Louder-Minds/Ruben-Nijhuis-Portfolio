import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Header from 'components/header';

const Gallery = ({ data }) => (
    <Layout>
        <Header title={`Gallery`} />
        {/* <AboutIntro /> */}
        {/* <PersonalCards /> */}
        {/* <AboutOutro /> */}
        {/* <ClickThroughContentCards /> */}
    </Layout>
);

Gallery.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Gallery;

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
