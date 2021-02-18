import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    box-sizing: border-box;
    background-color: #1e1e1e;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 36px;

    .logo {
        font-size: 32px;
        font-weight: 900;
        color: white;  
    }

    .flex {
        display: flex;
        justify-content: space-between;
        padding: 36px;

        p {
            position: relative;
            color: white;

            &:before {
                content: '';
                position: absolute;
                width: 144px;
                height: 9px;
                background: #00efac;
                top: -10px;
                left: 2px;
                border-radius: 100px;
            }
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .content p {
        font-size: 75px;
        width: 566px;
        height: 249px;
    }

    #threeD-img-thingy {
        width: 660px;
        height: 656px;
        background: #181818;
    }

    .scroll-indicator {
        color: white;
        display: flex;
        align-items: center;

        .circle {
            font-size: 48px;
            margin-right: 18px;
        }
    }
`;

const HomeIntro = () => (
    <Container id="home">
        <div className="logo">
            <h1>Ruben</h1>
            <h1>Nijhuis</h1>
        </div>
        <div className="flex">
            <div className="content">
                <p>Creating digital experiences for creative people</p>
            </div>
            <div id="threeD-img-thingy"></div>
        </div>
        <div className="scroll-indicator">
            <span className="circle">•</span>
            <span>Scroll</span>
        </div>
    </Container>
);

export default HomeIntro;
