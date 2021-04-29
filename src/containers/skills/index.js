import React from 'react';
import styled from 'styled-components';

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

const Container = styled.div`
    background: rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    flex-wrap: wrap;
    border-radius: 6px;

    padding: 72px;
    margin: 36px;

    p {
        font-size: 36px;
        font-weight: 900;
        display: inline-block;
        margin-right: 18px;
        line-height: 1.4;
    }
`;

const Skills = () => (
    <>
        <h2>Skills I have gathered over the years</h2>
        <Container>
            {skills_list.map((key, i) => {
                return <p key={i}>{key}</p>;
            })}
        </Container>

        <Container>
            {skills_array.map((key, i) => {
                return <p key={i}>{key}</p>;
            })}
        </Container>
    </>
);

export default Skills;
