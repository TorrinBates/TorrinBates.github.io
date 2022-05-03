import styled, { keyframes, css } from "styled-components";
import img from "./profile.jpg";

const Rotating = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const RotatingRule = css(
    ['', ' 15s linear infinite;'],
    Rotating
);

export const CircleGroup = styled.div`
    border-radius: 50%;
    width: 28%;
    aspect-ratio: 1 / 1;
    margin: 2%;
    float: left;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
`;

export const DashedCircle = styled.div`
    border: .4em dashed black;
    border-radius: 50%;
    width: 100%;
    aspect-ratio: 1 / 1;
    justify-self: center;
    align-self: center;
    animation: ${RotatingRule};
    grid-column: 1;
    grid-row: 1;
`;

export const ImageCircle = styled.div`
    border-radius: 50%;
    width: 95%;
    aspect-ratio: 1 / 1;
    justify-self: center;
    align-self: center;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    grid-column: 1;
    grid-row: 1;
`;

export const Title = styled.h1`
    font-size: 4em;
    margin: 0 2%;
`;

export const Text = styled.h1`
    font-size: 1.2em;
    margin: 0 2%;
`;

const Across = keyframes`
    from { transform: translateX(-10%); }
    to { transform: translateX(2000%) }
`;

const AcrossRule = css(
    ['', ' 10s linear infinite;'],
    Across
);

export const Panel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
`;

export const Icon = styled.div`
    height: 4.5em;
    width: 4.5em;
    margin-top: 1%;
    margin-bottom: 1%;
    margin-left: -10%;
    animation: ${AcrossRule};
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    animation-delay: ${props => props.delay}s;
`;
