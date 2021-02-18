import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Header from 'components/header';
import MiniContentCardsScroll from 'containers/mini-content-cards-scroll';
import ClickThroughContentCards from 'components/click-through-content-cards';

import { personalTestdata } from 'constants/theme';

const About = ({ data }) => (
    <Layout>
        <Header
            title={`About`}
            secondaryTitle={`<h5 style="font-size: 24px">2002 the year - 8 is the gear<h5>`}
        />
        <MiniContentCardsScroll data={personalTestdata} />
        {/* <AboutIntro /> */}
        {/* <PersonalCards /> */}
        {/* <AboutOutro /> */}
        <ClickThroughContentCards />
    </Layout>
);

About.propTypes = {
    data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
    query AboutQuery {
        aboutJson {
            title
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;
