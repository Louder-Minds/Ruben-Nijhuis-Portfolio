import React from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { magicNumber, mainDark, bodySmall } from 'constants/theme';

const Container = styled.div`
    .heroImg {
        overflow: hidden;
        width: 100%;
        height: calc(72px * 6);
        z-index: -10;
        margin-bottom: 18px;

        img {
            width: 100%;
        }
    }

    h1 {
        font-weight: 700;
        margin: 72px;
        margin-top: 36px;
        font-size: 75px;
        margin-bottom: 18px;
    }
`;

const Content = styled.div`
    z-index: 10;
    padding: 72px;
    position: relative;

    .content {
        padding: 72px;
        background: #fafafa;
        border-radius: 9px;

        font-size: 24px;

        margin-bottom: 72px;
    }
`;

const JournalEntryTemplate = ({ data }) => {
    const { title, tagline, backgroundImg, content } = data.contentfulJournal;
    return (
        <Layout>
            {console.log(title)}
            <Container>
                <div className="heroImg">
                    <img src={`https://source.unsplash.com/800x800`} />
                </div>
                <h1>{title}</h1>
                <Content>
                    <div className="content">Lorem ipsum sit dolor amet</div>
                </Content>
            </Container>
            {/* <ConsizeJournalGrid/> */}
        </Layout>
    );
};

export default JournalEntryTemplate;

export const query = graphql`
    query($slug: String!) {
        contentfulJournal(title: { eq: $slug }) {
            title
            tagline
            backgroundImg {
                fluid(quality: 90, maxWidth: 750) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            content {
                raw
            }
        }
    }
`;
