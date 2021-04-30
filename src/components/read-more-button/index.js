import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import MEDIA from 'helpers/mediaTemplates';
import {
    bodyLarge,
    bodyRegular,
    magicNumber,
    regularBorderRadius,
} from 'constants/theme';

const StyledLink = styled(Link)`
    &:hover {
        cursor: pointer;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(100% - calc(${magicNumber} / 2));
    height: 90px;

    background: black;
    color: white;

    font-size: ${bodyRegular};
    border: none;

    border-radius: ${regularBorderRadius};
    text-decoration-line: underline;
    margin: auto;
    margin-bottom: calc(${magicNumber} * 1);

    ${MEDIA.MIN_OLD_HD`
        width: calc(100% - calc(${magicNumber} * 1));
        height: calc(${magicNumber} * 1.5);
        font-size: ${bodyLarge};
        margin-bottom: calc(${magicNumber} * 2);
    `}
`;

const ReadMore = ({ text, to }) => (
    <StyledLink to={to}>
        <span>{text}</span>
    </StyledLink>
);

export default ReadMore;
