import styled, { keyframes, css } from "styled-components";

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

const Steaming = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const SteamingRule = css(
    ['', ' 5s linear infinite;'],
    Steaming
);

export const Circle = styled.div`
    border: .4em dashed black;
    border-radius: 50%;
    width: 28%;
    aspect-ratio: 1 / 1;
    margin: 2%;
    float: left;
    animation: ${SteamingRule};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
`;

export const Test = styled.div`
    border-radius: 50%;
    width: 95%;
    aspect-ratio: 1 / 1;
    justify-self: center;
    align-self: center;
    background-image: url(https://torrinbates.github.io/images/profile.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const Title = styled.h1`
    font-size: 4em;
    margin: 0 2%;
`;

export const Text = styled.h1`
    font-size: 1.2em;
    margin: 0 2%;
`;
