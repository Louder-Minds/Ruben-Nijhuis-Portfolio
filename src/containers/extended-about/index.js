import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    box-sizing: border-box;
    margin: auto;
    padding: 36px;
    padding-top: 0px;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 1fr;
    grid-row-gap: 0px;
    margin-bottom: 72px;

    .img {
        padding-right: 18px;
        img {
            max-width: 100%;
        }
    }

    .text {
        padding-left: 18px;
        max-width: 100%;
        font-size: 24px;
        line-height: 1.5;
    }
`;

const ExtendedAbout = () => (
    <Container>
        <div className="img">
            <img src={`https://source.unsplash.com/800x800`} />
        </div>
        <div className="text">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pellentesque elit ac est viverra, ut facilisis erat finibus.
                Vestibulum venenatis convallis consectetur. Aenean eget odio
                magna.
            </p>
            <p>
                Praesent pretium fermentum lectus, eu sagittis sapien
                sollicitudin nec. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Integer tempus ornare ante. Quisque nulla
                dui, posuere nec facilisis quis, rutrum ac tellus.
            </p>
            <p>
                Maecenas maximus mauris ac ultrices auctor. Integer pretium
                eleifend sem, in mattis lacus sollicitudin id. Integer tristique
                rutrum tortor, eget pretium augue gravida at.
            </p>
            <p className="italic">
                Working with creatives — Developing the internet
            </p>
        </div>
    </Container>
);

export default ExtendedAbout;
