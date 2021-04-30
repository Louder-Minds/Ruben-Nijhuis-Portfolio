import React from 'react';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const skills_list = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'GSAP',
    'GatsbyJS',
    'Java',
    'Webpack',
    'SCSS',
    'React Native',
    'NodeJS',
    'p5.js',
];

const skills_array = [
    'Sketch',
    'Figma',
    'Photoshop',
    'InDesign',
    'Illustrator',
    'Trello',
    'Slack',
    'Notion',
    'Creative art & Direction',
    'Project management',
    'Web & app development',
    'Digital product development',
    'SEO',
    'Interactive prototyping',
];

const interest = [
    'Music creation',
    'Digital art',
    'Formula 1',
    'Running',
    'Paris',
    'Photography',
    'Graphical Pogramming',
    'Teaching',
];

const Container = styled.div`
    background: rgba(0, 0, 0, 0.1);
    padding: 18px;
    margin-bottom: 72px;

    h2 {
        margin-bottom: 18px;
        font-size: 36px;
        margin-left: -9px;
    }

    ${MEDIA.MIN_OLD_HD`
        padding: 36px;
        margin-bottom: 144px;
    `}
`;

const InfoBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;

    background: white;
    border-radius: 6px;

    padding: 18px;
    margin-bottom: 72px;
    grid-gap: 18px;
    grid-column-gap: 36px;

    p {
        margin: 0;
        justify-self: start;
        font-size: 22px;
        font-weight: 500;
        display: inline-block;
        line-height: 1.4;
    }

    ${MEDIA.MIN_OLD_HD`
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 36px;
    `}
`;

const Skills = () => (
    <Container>
        <h2>Hard skills</h2>
        <InfoBlock>
            {skills_list.map((key, i) => {
                return <p key={i}>{key}</p>;
            })}
        </InfoBlock>

        <h2>Soft skills</h2>
        <InfoBlock>
            {skills_array.map((key, i) => {
                return <p key={i}>{key}</p>;
            })}
        </InfoBlock>

        <h2>Interests</h2>
        <InfoBlock>
            {interest.map((key, i) => {
                return <p key={i}>{key}</p>;
            })}
        </InfoBlock>
    </Container>
);

export default Skills;
