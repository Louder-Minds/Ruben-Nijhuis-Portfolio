import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Header from 'components/header';
import MiniContentCardsScroll from 'containers/mini-content-cards-scroll';
import ClickThroughContentCards from 'components/click-through-content-cards';

import { personalTestdata } from 'constants/theme';
import ExtendedAbout from 'containers/extended-about';

const About = ({ data }) => (
    <Layout>
        <Header
            title={`About`}
            secondaryTitle={`<h5 style="font-size: 24px">2002 the year - 8 is the gear<h5>`}
        />
        <ExtendedAbout />
        <MiniContentCardsScroll data={personalTestdata} />
        <ClickThroughContentCards
            project={data.allContentfulProject.edges[0].node}
            journal={data.allContentfulJournal.edges[0].node}
        />
    </Layout>
);

About.propTypes = {
    data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
    query AboutQuery {
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
