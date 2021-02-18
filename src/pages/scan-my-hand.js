import React from 'react';
import styled from 'styled-components';
// import Button from '../Button';

const Container = styled.div`
    padding: 18px;

    .heading {
        margin-bottom: 10%;

        span {
            color: black;
            text-transform: uppercase;
            font-size: 54px;
            line-height: 1;
            position: relative;
            display: inline-block;
            margin-right: 2.5%;
            font-weight: 900;
            /* font-family: 'Formular'; */
        }

        .special {
            &:before {
                z-index: -1;
                content: '';
                position: absolute;
                bottom: -2.5%;
                left: 18px;
                width: 90%;
                height: 20px;
                background: green;
                opacity: 75%;
            }
        }
    }
`;

const ScanMyHand = () => {
    const titel = '👋 You just scanned my hand!';
    let t = titel.split(' ');
    return (
        <Container>
            <div>
                <div id="head-text">
                    <div className="heading">
                        {t.map((item, i) => {
                            if (i !== 0) {
                                return (
                                    <span className="special" key={i}>
                                        {item}
                                    </span>
                                );
                            } else {
                                return <span key={i}>{item}</span>;
                            }
                        })}
                    </div>
                </div>
                <div id="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    non ex aspernatur ipsam dolor nisi fugit error, enim placeat
                    sequi sit dolorem voluptatibus explicabo vitae repudiandae
                    ullam numquam dolore illum!
                </div>
            </div>
        </Container>
    );
};

export default ScanMyHand;
