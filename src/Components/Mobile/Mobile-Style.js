import styled, { keyframes, css } from "styled-components";
import git from "../IconLinks/Company Icons/linkedin.svg";
import link from "../IconLinks/Company Icons/github.svg";
import file from "./file-lines-solid.svg";

const SlideIn = keyframes`
    to { transform: translateX(0); }
`;

const SlideInRule = css(
    ["", " 0.8s ease-in-out;"],
    SlideIn
);

export const Screen = styled.div`
    background-color: black;
    width: 100%;
    height: 100dvh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr) repeat(2, 1.1fr);
`;

export const Name = styled.h1`
    font-family: 'Bebas Neue', cursive;
    font-weight: bold;
    font-size: 36vw;
    color: #abc6aa;
    justify-self: center;
    align-self: center;
    grid-column: 1 / span 2;
    grid-row: ${props => props.row};
    margin: -2% 0 0 0;
    padding: 0;
    transform: translateX(-200%);
    animation: ${SlideInRule};
    animation-fill-mode: forwards;
    animation-delay: ${props => props.delay}s;
`;

export const Icon = styled.a`
    height: 85%;
    width: 85%;
    justify-self: center;
    align-self: center;
    background-image: url(${props => props.git ? git : link});
    background-repeat: no-repeat;
    background-position: center;
    grid-column: ${props => props.column};
    grid-row: 3;
    transform: translateX(-250%);
    animation: ${SlideInRule};
    animation-fill-mode: forwards;
    animation-delay: ${props => props.delay}s;
`;

export const File = styled.div`
    height: 58%;
    width: 100%;
    justify-self: center;
    align-self: center;
    background-image: url(${file});
    background-repeat: no-repeat;
    background-position: center;
`;

export const Pdf = styled.button`
    font-size: clamp(40px, 5vw, 60px);
    font-weight: bold;
    color: black;
    background-color: white;
    height: 80%;
    width: 85%;
    justify-self: center;
    align-self: center;
    grid-column: 1 / span 2;
    grid-row: 4;
    border-radius: 15px;
    transform: translateX(-200%);
    animation: ${SlideInRule};
    animation-fill-mode: forwards;
    animation-delay: ${props => props.delay}s;
`;