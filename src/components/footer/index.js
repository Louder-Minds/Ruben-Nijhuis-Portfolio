import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 0px;

    margin: 144px 36px;
    margin-bottom: 0px;

    height: calc(72px * 3);

    border-radius: 6px 6px 0px 0px;

    background: black;

    padding: 36px;

    margin-left: calc(72px * 3);

    grid-template-areas:
        'title links'
        'copy links';

    h1,
    h2 {
        color: white;
        justify-self: start;
        display: block;
    }

    h1 {
        align-self: start;
        grid-area: title;
        font-size: 26px;
    }

    h2 {
        align-self: end;
        font-size: 18px;
        grid-area: copy;

        .green {
            color: green;
            font-size: 24px;
        }
    }

    .links {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-row-gap: 9px;

        justify-self: end;
        align-self: center;

        grid-area: links;

        a {
            font-size: 24px;
            text-decoration: none;
            color: white;
            text-transform: uppercase;
        }
    }
`;

const Footer = () => (
    <Container>
        <h1>Ruben</h1>

        <div className="links">
            <a href="/">Github</a>
            <a href="/">Instagram</a>
            <a href="/">Linkedin</a>
            <a href="/">Codepen</a>
            <a href="/">Email</a>
            <a href="/">Louder Minds</a>
        </div>

        <h2>
            2020 <span className="green">•</span> 2021
        </h2>
    </Container>
);

export default Footer;
