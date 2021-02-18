import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Nav from 'components/nav';
import GlobalStyle from 'global.css.js';
import Footer from 'components/footer';
import styled from 'styled-components';
import { magicNumber } from 'constants/theme';

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: calc(${magicNumber} * 2) 1fr;
    grid-template-rows: 2;
    grid-template-areas:
        'home home'
        'nav content'
        'nav footer';

    #homeintro {
        grid-area: home;
    }
    nav {
        grid-area: nav;
    }

    main {
        grid-area: content;
    }

    footer {
        grid-area: footer;
    }
`;

const Layout = ({ data, children }) => {
    const locoRef = useRef(null);
    useEffect(() => {
        // import('locomotive-scroll').then(locomotiveModule => {
        //     const scroll = new locomotiveModule.default({
        //         el: locoRef.current,
        //         smooth: true,
        //         smoothMobile: false,
        //         multiplier: 0.75,
        //     });
        // });
    }, []);
    return (
        <ContentGrid ref={locoRef}>
            <GlobalStyle />
            <Head />
            <Nav />
            <main>{children}</main>
            <Footer />
        </ContentGrid>
    );
};

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
