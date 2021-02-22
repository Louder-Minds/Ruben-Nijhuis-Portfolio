import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import ContentCardGrid from 'containers/content-card-grid';
import StoryBlock from 'containers/story-block';
import { contentCardTestData, journalCardTestData } from 'constants/theme';
import Header from 'components/header';
import ReadMore from 'components/read-more-button';
import HomeIntro from 'containers/home-intro';

const Index = ({ data }) => (
    <Layout showIntro={true}>
        <Header
            title={`Portfolio <br/> 2020 <span>•</span> 2021`}
            secondaryTitle={`Ad <br/> Explorandum`}
            light={true}
        />
        <ContentCardGrid
            full={true}
            type={'projects'}
            cards={data.allContentfulProject}
            amount={5}
        />
        <ReadMore
            text={`Discover all ${data.allContentfulProject.totalCount} projects`}
            to={`/projects`}
        />
        <StoryBlock />
        <div style={{ paddingTop: '36px' }}>
            <h2
                style={{
                    marginLeft: '36px',
                    fontSize: '24px',
                }}
            >
                Journal entries
            </h2>
            <ContentCardGrid
                full={false}
                type={'journal'}
                cards={data.allContentfulJournal}
                amount={2}
            />
        </div>
        <ReadMore
            text={`Discover all ${data.allContentfulJournal.totalCount} journal entries`}
            to={`/journal`}
        />
    </Layout>
);

Index.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
    query HomepageQuery {
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
            totalCount
        }
    }
`;
