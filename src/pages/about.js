import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Header from 'components/header';
import MiniContentCardsScroll from 'containers/mini-content-cards-scroll';
import ClickThroughContentCards from 'components/click-through-content-cards';
import ExtendedAbout from 'containers/extended-about';
import Skills from 'containers/skills';

const work = [
    {
        where: 'Louder Minds',
        what: 'Founder',
        when: '09/20 • Present',
    },
    {
        where: 'ROC Amstelland',
        what: 'Web Design Teacher',
        when: '06/21 • Present',
    },
    {
        where: 'Devign.it',
        what: 'Internship',
        when: '06/19 - 08/19',
    },
    {
        where: 'SuperHero Cheesecake',
        what: 'Internship',
        when: '06/18 • 08/18',
    },
    {
        where: 'A friend of mine',
        what: 'Internship',
        when: '06/17 • 08/18',
    },
];

const education = [
    {
        where: 'Amsterdam',
        what: 'Highschool',
        when: '08/15 • 06/21',
    },
    {
        where: 'Amsterdam',
        what: 'Software development',
        when: '08/20 • Present',
    },
    {
        where: 'Amsterdam',
        what: 'French B1',
        when: '02/20 • 8/20',
    },
];

const About = ({ data }) => (
    <Layout>
        <Header
            title={`About`}
            secondaryTitle={`<h5>2002 the year - 8 is the gear<h5>`}
        />
        <ExtendedAbout
            img={data.contentfulAbout.me}
            text={data.contentfulAbout.aboutMeLarge}
        />
        <MiniContentCardsScroll work={work} education={education} />
        {/* <Skills /> */}
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

        contentfulAbout {
            aboutMeLarge {
                raw
            }
            me {
                fluid(quality: 100, maxWidth: 1200) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }
    }
`;
