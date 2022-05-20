import styled from "styled-components";

export const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 3fr 22fr;
    grid-template-rows: 1fr;
    background: #4E734D;
    overflow: hidden;
`;

export const Content = styled.div`
    grid-column: 2 / span 1;
`;

export const Error = styled.h1`
    color: red;
`;