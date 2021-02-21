import React from 'react';
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

const Container = styled.nav`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-right: 2px solid ${mainDark};
    position: relative;
    z-index: 9999999;

    ul {
        padding: calc(${magicNumber} / 4);
        padding-top: calc(${magicNumber} / 2);
        display: flex;
        flex-direction: column;
        position: sticky;
        top: 0;

        li {
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
`;

const Nav = () => (
    <Container data-scroll-sticky>
        <ul>
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
            <li>
                <Link to="/gallery">Gallery</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </Container>
);

export default Nav;
