import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
    magicNumber,
    bodyLarge,
    regularBorderRadius,
    bodyRegular,
    highlight,
    mainDark,
} from 'constants/theme';
import anime from 'animejs';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    box-sizing: border-box;

    width: 100%;

    border-bottom: 2px solid black;
    height: 54px;
    padding: 18px;
    box-sizing: border-box;
    z-index: 30000;
    display: flex;
    align-items: center;

    backdrop-filter: blur(10px);

    .mobileIF {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        height: 100%;
    }

    .mobileLogo {
        display: inline-flex;
        align-items: center;
        height: 100%;
        font-size: 24px;
        width: fit-content;

        a {
            color: black;
            text-decoration: none;
        }
    }

    #buttonToggle {
        box-sizing: border-box;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        width: 36px;

        .line {
            display: inline-block;
            height: 4px;
            border-radius: 100px;
            background: black;
            width: 100%;
        }
    }

    #navList {
        box-sizing: border-box;
        width: 100%;
        height: calc(100vh - 54px);
        position: fixed;
        background: white;
        padding: 36px;
        padding-top: 72px;
        left: 0;
        top: 54px;
        transform: translateY(-125%);
        z-index: 29999;

        .logo {
            display: none;
        }

        li {
            text-align: right;
            font-size: ${bodyLarge};
            margin-bottom: calc(${magicNumber} / 1.5);

            a {
                position: relative;
                text-decoration: none;
                color: black;
                width: 100%;
                height: 100px;

                &:hover {
                    &:before {
                        width: 100%;
                    }
                }

                &:before {
                    transition: all 0.35s ease-in-out;
                    content: '';
                    position: absolute;
                    width: 0%;
                    height: 2px;
                    background-color: ${highlight};
                    left: 0;
                    bottom: -4px;
                }
            }
        }
    }

    ${MEDIA.MIN_OLD_HD`
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-right: 2px solid ${mainDark};
        position: relative;

        .mobileIF {
            display: none
        }

        align-content: start;
        justify-content: start;
        align-items: start;
        justify-items: start;

        #navList {
            padding: 0;
            padding-top: 36px;
            display: flex;
            flex-direction: column;
            position: sticky !important;
            top: 0;
            position: sticky;
            transform: none;
            
            .logo {
                display: block;
            }
            
            li {
                text-align: left;
                font-size: ${bodyRegular};
                margin-bottom: calc(${magicNumber} / 1.5);

                a {
                    position: relative;
                    text-decoration: none;
                    color: black;
                    width: 100%;
                    height: 100px;

                    &:hover {
                        &:before {
                            width: 100%;
                        }
                    }

                    &:before {
                        transition: all 0.35s ease-in-out;
                        content: '';
                        position: absolute;
                        width: 0%;
                        height: 2px;
                        background-color: ${highlight};
                        left: 0;
                        bottom: -4px;
                    }
                }
            }

            .logo {
                span {
                    display: block;
                    font-size: 25px;
                    font-weight: 900;
                    position: relative;
                    letter-spacing: 1.25px;
                }

                &:hover {
                    span {
                        &:before {
                            opacity: 1;
                        }
                    }
                }

                .one,
                .two {
                    &:before {
                        opacity: 0;
                        position: absolute;
                        background: white;
                        color: black;
                        font-size: 21px;
                        font-weight: 600;
                        left: -2px;
                        top: 2px;
                        width: 100%;
                        letter-spacing: -0.5px;
                        height: 110%;
                    }
                }

                .one {
                    &:before {
                        content: 'Creative';
                    }
                }

                .two {
                    &:before {
                        content: 'Developer';
                    }
                }
            }
        }
    `};
`;

const Nav = () => {
    const button = useRef(null);
    let isClicked = false;
    useEffect(() => {
        button.current.addEventListener('click', () => {
            if (isClicked === false) {
                anime({
                    targets: '#navList',
                    scaleX: [3, 1],
                    translateX: ['250%', '0%'],
                    easing: 'cubicBezier(.19,.21,.01,.99)',
                });
                isClicked = true;
            } else {
                anime({
                    targets: '#navList',
                    translateX: ['0%', '250%'],
                    scaleX: [1, 3],
                    easing: 'cubicBezier(.19,.21,.01,.99)',
                    duration: 2000,
                });
                isClicked = false;
            }
        });
    }, []);

    return (
        <Container data-scroll-sticky>
            <div class="mobileIF">
                <div className="mobileLogo">
                    <Link to={'/'}>Ruben</Link>
                </div>
                <div id="buttonToggle" ref={button}>
                    <div className="line" />
                    <div className="line" />
                </div>
            </div>
            <ul id="navList">
                <li className="logo">
                    <Link to="/">
                        <span className="one">Ruben</span>
                        <span className="two">Nijhuis</span>
                    </Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/journal">Journal</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {/* <li>
                <Link to="/gallery">Gallery</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li> */}
            </ul>
        </Container>
    );
};

export default Nav;
