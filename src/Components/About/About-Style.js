import styled from "styled-components";

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
    border: .5em solid black;
    border-radius: 1em;
    background-color: transparent;
`;

export const Circle = styled.div`
    border: .5em solid black;
    border-radius: 50%;
    width: 28%;
    height: auto;
    padding-top: 28%;
    margin-left: -14%;
    margin-top: 3%;
    background-image: url(https://torrinbates.github.io/images/profile.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    float: left;
`;

export const Overflow = styled.div`
    overflow: hidden;
    height: 100%;
`;

export const Title = styled.h1`
    font-size: 4em;
    margin: 0;
`;

export const Text = styled.h1`
    font-size: 1.2em;
    margin: 0;
`;
