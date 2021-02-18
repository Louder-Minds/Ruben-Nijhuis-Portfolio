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
    }
`;

const Nav = () => (
    <Container data-scroll-sticky>
        <ul>
            <li>
                <Link to="/">Home logo</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/journal">Journal</Link>
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
