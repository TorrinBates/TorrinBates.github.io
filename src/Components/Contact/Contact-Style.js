import styled from "styled-components";

export const Center = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
`;

export const Scale = styled.h1`
    font-size: clamp(40px, 5vw, 60px);
    color: #abc6aa;
    justify-self: center;
    align-self: end;
    grid-column: 1;
    grid-row: 1;
`;