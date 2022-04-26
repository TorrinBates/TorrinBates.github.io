import styled from "styled-components";

export const Imac = styled.div`
    width: 600px;
    perspective: 250px;
    z-index: 3;
    position: absolute;
    bottom: 13%;
    left: 50%;
`;

export const Screen = styled.div`
    height: 360px;
    background-color: black;
    background-size: cover;
    box-sizing: border-box;
    border: 24px solid black;
    border-top: 32px solid black;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;

    &:focus {outline: none;}
`;

export const Camera = styled.div`
    background: #222;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: -21px;
`;

export const Chin = styled.div`
    height: 64px;
    background: #dadada;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
`;

export const Stand = styled.div`
    margin: 0 auto;
    width: 120px;
    height: 100px;
    background: linear-gradient(to bottom, #c1c1c1, #EFEFEF);
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    perspective-origin: 150% 150%;
    transform-style: preserve-3d;
    transform: rotatex(100deg);
    margin-top: -26px;
    box-shadow: 0 4px 0 0 #D5D5D5;
`;

export const Option = styled.h1`
    color: white;
    font-family:'Times New Roman', Times, serif;
    font-size: 45px;
    margin: 0px;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    opacity: ${props => props.selected ? '100' : '50'}%;

    &:before {
        content: '${props => props.selected ? '\u276F' : ''}';
    }
`;

export const Apple = styled.svg`
    width: 2em;
    display: block;
    margin: 0 auto;
    transform: translatey(12px);
    view
`;