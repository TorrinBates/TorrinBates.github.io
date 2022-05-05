import styled from "styled-components";

export const Base = styled.div`
    width: 100%;
    height: 100%;
    background: #4E734D;
    position: relative;
    z-index: 1;
    &:focus { outline: none; }
`;

export const Table = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: #96794f;
    z-index: 2;
`;

export const Name = styled.h1`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 3;
    margin: 0em .7em .2em 0em;
    font-family: 'Whisper', cursive;
    font-size: 2.5em;
`;