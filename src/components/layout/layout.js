import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Nav from 'components/nav';
import GlobalStyle from 'global.css.js';
import Footer from 'components/footer';
import styled from 'styled-components';
import { magicNumber } from 'constants/theme';
import HomeIntro from 'containers/home-intro';

import MEDIA from 'helpers/mediaTemplates';

const ContentGrid = styled.div`
    padding-top: calc(${magicNumber} / 4 * 3);

    display: grid;
    grid-template-rows: 4;
    grid-template-columns: 1fr;
    grid-template-areas:
        'nav'
        'home'
        'content'
        'footer';

    nav {
        grid-area: nav;
    }

    main {
        grid-area: content;
    }

    footer {
        grid-area: footer;
    }

    ${MEDIA.MIN_OLD_HD`
        padding-top: 0;
        grid-template-columns: calc(${magicNumber} * 2) 1fr;
        grid-template-areas:
        'home home'
        'nav content'
        'nav footer';
    `}
`;

const Layout = ({ data, children, showIntro = false }) => (
    <ContentGrid>
        <GlobalStyle />
        <Head />
        {showIntro ? <HomeIntro id="homeintro" /> : null}
        <Nav />
        <main>
            {children}
            <Footer />
        </main>
    </ContentGrid>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
    <StaticQuery
        query={graphql`
            query LayoutQuery {
                site {
                    siteMetadata {
                        siteTitle
                    }
                }
            }
        `}
        render={data => <Layout data={data} {...props} />}
    />
);

LayoutWithQuery.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
