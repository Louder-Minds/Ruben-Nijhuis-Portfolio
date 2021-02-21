import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import circ from './circle.svg';
import * as THREE from 'three';
import anime from 'animejs';

const Container = styled.div`
    grid-area: home;
    grid-column: -1 / 1;
    box-sizing: border-box;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 36px;
    position: relative;
    overflow: hidden;
    background: #1e1e1e;

    .logo {
        font-size: 32px;
        font-weight: 900;
        color: white;
        z-index: 100;
    }

    .flex {
        display: flex;
        padding: 72px;
        position: relative;

        .content {
            position: relative;
            color: white;

            &:before {
                content: '';
                position: absolute;
                width: 144px;
                height: 9px;
                background: #00efac;
                top: -18px;
                left: 4px;
                border-radius: 18px;
            }
        }
    }

    .content {
        align-self: start;
        max-width: 750px;

        div {
            display: inline-block;
            flex-wrap: wrap;
            font-size: 75px;
            max-width: fit-content;
            height: 82px;
            overflow: hidden;

            span {
                display: inline-block;
                transform: translateY(100%);
                margin-right: 22px;
            }
        }
    }

    #threeD-img-thingy {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }

    .scroll-indicator {
        margin-left: -36px;
        margin-bottom: -36px;
        color: white;
        display: flex;
        align-items: center;
        z-index: 100;

        .circ {
            margin-right: -36px;
        }
    }
`;

const HomeIntro = () => {
    const container = useRef(null);
    const canvas = useRef(null);
    const contentspans = useRef(null);

    const heading = 'Creating digital experiences for creative people'.split(
        ' '
    );

    useEffect(() => {
        anime({
            targets: document.querySelectorAll('#spans span'),
            translateY: ['250%', '0%'],
            rotate: ['20deg', '0deg'],
            scaleY: [3, 1],
            easing: 'cubicBezier(.19,.21,.01,.99)',
            duration: 1000,
            delay: anime.stagger(150, { start: 250 }),
        });

        const scene = new THREE.Scene();

        const material = new THREE.MeshLambertMaterial();

        const dodeca = new THREE.Mesh(
            new THREE.OctahedronGeometry(2.5, 2),
            material
        );

        dodeca.position.z = -3;
        dodeca.position.x = 2.5;
        scene.background = new THREE.Color(0x1e1e1e);

        const sizes = {
            width: container.current.offsetWidth,
            height: container.current.offsetHeight,
        };

        const pointLight = new THREE.PointLight(0xffffff, 0.5);
        pointLight.position.x = 0;
        pointLight.position.y = 2;
        pointLight.position.z = 0;

        const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.1,
            1000
        );

        scene.add(dodeca);
        scene.add(pointLight);
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer({ canvas: canvas.current });

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(sizes.width, sizes.height);
        renderer.render(scene, camera);

        window.addEventListener('resize', () => {
            sizes.width = container.current.offsetWidth;
            sizes.height = container.current.offsetHeight;

            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        const clock = new THREE.Clock();
        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            camera.lookAt(0, 0, 0);
            renderer.render(scene, camera);

            dodeca.rotation.y = 0.2 * elapsedTime;
            dodeca.rotation.x = 0.2 * elapsedTime;
            dodeca.rotation.z = 0.2 * elapsedTime;

            requestAnimationFrame(tick);
        };

        tick();
    }, []);

    return (
        <Container id="home" ref={container}>
            <canvas id="threeD-img-thingy" ref={canvas} />
            <div className="logo">
                <h1>RN</h1>
            </div>
            <div className="flex">
                <div className="content" id="spans" ref={contentspans}>
                    {heading.map((el, i) => (
                        <div>
                            <span>{el}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="scroll-indicator">
                <img
                    className="circ"
                    height="100"
                    width="100"
                    style={{ transform: 'scale(0.4)' }}
                    src={circ}
                />
                <span>Scroll</span>
            </div>
        </Container>
    );
};

export default HomeIntro;
