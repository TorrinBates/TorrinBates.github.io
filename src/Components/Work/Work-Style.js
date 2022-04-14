import styled from "styled-components";

export const Container = styled.div`
    width: 100%;  
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(35deg, #B49CFF, #F3F0FC);
`;

export const Projects = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    margin: 1em;
`;