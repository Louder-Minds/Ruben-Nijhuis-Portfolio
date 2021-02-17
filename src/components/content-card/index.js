import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
    width: 100%;

    ${props =>
        props.full &&
        css`
            grid-column: 1 / -1;
        `}

    &:hover {
        cursor: pointer;

        .img {
            img {
                transform: scale(1.025);
            }
        }
    }

    .img {
        height: 432px;
        position: relative;
        border-radius: 6px;
        overflow: hidden;

        img {
            width: 100%;
            object-fit: cover;
            transition: transform 0.25s ease-in-out;
            transform: scale(1);
        }

        .subjects {
            position: absolute;
            bottom: 18px;
            left: 18px;

            ${props =>
                props.full &&
                css`
                    bottom: 36px;
                    left: 36px;
                `}

            display: flex;
            justify-content: start;

            li {
                color: white;
                margin-right: 18px;
                border-radius: 100px;
                background: black;
                padding: 7px 13px;
                font-size: 13px;
                text-align: center;
            }
        }
    }

    .text {
        width: 100%;
        max-width: 100%;

        h2 {
            margin-top: 18px;
            color: #e1e1e1;
            font-size: 24px;
        }

        h1 {
            color: black;
            margin-top: 9px;
            font-size: 24px;
        }
    }
`;

const ContentCard = ({
    title = 'Studio Kffein',
    tagline = 'Pinnacle overcome decieve marvelous decieve eternal-return.',
    img = '',
    subjects = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    type = 'projects',
    full,
}) => (
    <Container full={full}>
        <Link
            to={`/${type}/${title.toLowerCase().replace(/\s/g, '-')}`}
            style={{ textDecoration: 'none' }}
        >
            <div className="img">
                <img
                    src="https://source.unsplash.com/1000x1000"
                    alt="project"
                />
                <ul className="subjects">
                    {subjects.map((subject, i) => (
                        <li key={i}>{subject}</li>
                    ))}
                </ul>
            </div>
            <div className="text">
                <h2>{title}</h2>
                <h1>{tagline}</h1>
            </div>
        </Link>
    </Container>
);

export default ContentCard;
