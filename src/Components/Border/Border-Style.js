import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
`;

export const Box = styled.div`
    width: 70%;
    height: 80vh;
    justify-self: center;
    align-self: center;
    border: .3em solid black;
    border-radius: 1em;
    overflow-x: hidden;
    background-color: #7ca77b;
`;