import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
    &:hover {
        cursor: pointer;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(100% - 72px);
    height: 108px;
    background: black;
    color: white;
    font-size: 24px;
    border: none;
    border-radius: 6px;
    text-decoration-line: underline;
    margin: auto;
    margin-bottom: 72px;
`;

const ReadMore = ({ text, to }) => (
    <StyledLink to={to}>
        <span>{text}</span>
    </StyledLink>
);

export default ReadMore;
