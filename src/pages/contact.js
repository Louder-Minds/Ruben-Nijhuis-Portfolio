import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Header from 'components/header';

const Contact = ({ data }) => (
    <Layout>
        <Header title={`Contact`} />
        {/* <AboutIntro /> */}
        {/* <PersonalCards /> */}
        {/* <AboutOutro /> */}
        {/* <ClickThroughContentCards /> */}
    </Layout>
);

Contact.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Contact;

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
