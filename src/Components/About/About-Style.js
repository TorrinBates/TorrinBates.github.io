import styled, { keyframes, css } from "styled-components";
import img from "./profile.jpg";

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
`;

export const Border = styled.div`
    width: 70%;
    height: 80%;
    justify-self: center;
    align-self: center;
    border: .4em solid black;
    border-radius: 1em;
    background-color: transparent;
    overflow-x: hidden;
    background-color: #7ca77b;
`;

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

export const Icon = styled.h1`
    height: 6%;
    width: 6%;
`;
