import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import GlobalStyle from 'global.css.js';
import ConfettiGenerator from "confetti-js";

import styled from 'styled-components';

const Container = styled.div`
    max-width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    margin: 0;
    background: black;
    color: white;
    padding: 36px;
    overflow-y: hidden;
    box-sizing: border-box;

    h1 {
        font-size: 112px;
        position: relative;
        margin-bottom: 72px;
        text-align: center;
    }

    h2 {
        font-size: 36px;
        text-align: center;
        margin-bottom: 72px;
    }

    button {
        width: 100%;
        height: 36px;
        margin-bottom: 36px;
        border-radius: 5px;
        border: 2px solid rgb(10,10,10);
        background: rgba(30,30,30);
        color: white;
        z-index: 100;
        position: relative;
    }

    canvas {
        opacity: 1;
        position: fixed;
        left: 0px;
        top: 0px;
        max-height: 100vh;
        max-width: 100%;
        z-index: 1;
    }

    div {
        opacity: 1;
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100vh;
        max-height: 100vh;
        z-index: 200;
        background: rgb(230, 70,70);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Index = ({ data }) => {
    const [showHappy, setShowHappy] = useState(false);
    const [showSad, setShowSad] = useState(false);

    useEffect(() => {
        if (showHappy) {
            const confettiSettings = { target: 'my-canvas' };
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            return () => confetti.clear();
        }
    }, [showHappy])

    return (
        <Container>
            <GlobalStyle />
            <h1 id="one">🥂</h1>
            <h2>Een keer een drankje doen?</h2>
            {showHappy ? <canvas id="my-canvas"></canvas> : null}
            {showSad ?
                <div>
                    <h1>:(</h1>
                </div> : null}
            <button onClick={() => setShowHappy(true)}>👍</button>
            <button onClick={() => setShowSad(true)}>👎</button>
        </Container>
    )
}

export default Index;
