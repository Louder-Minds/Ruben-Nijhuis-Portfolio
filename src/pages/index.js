import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import ContentCardGrid from '../containers/content-card-grid';
import StoryBlock from 'containers/story-block';

const testData = [
  {
    title: 'Studio Kffein',
    tagline: 'Pinnacle overcome decieve marvelous decieve eternal-return.',
    img: '',
    subjects: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    type: 'projects',
    full: true,
  },
  {
    title: 'Studio Kffein',
    tagline: 'Pinnacle overcome decieve marvelous decieve eternal-return.',
    img: '',
    subjects: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    type: 'projects',
    full: false,
  },
  {
    title: 'Studio Kffein',
    tagline: 'Pinnacle overcome decieve marvelous decieve eternal-return.',
    img: '',
    subjects: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    type: 'projects',
    full: false,
  },
  {
    title: 'Studio Kffein',
    tagline: 'Pinnacle overcome decieve marvelous decieve eternal-return.',
    img: '',
    subjects: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    type: 'projects',
    full: false,
  },
  {
    title: 'Studio Kffein',
    tagline: 'Pinnacle overcome decieve marvelous decieve eternal-return.',
    img: '',
    subjects: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    type: 'projects',
    full: false,
  },
];

const Index = ({ data }) => (
  <Layout>
    <ContentCardGrid projects={testData} />
    <StoryBlock />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
