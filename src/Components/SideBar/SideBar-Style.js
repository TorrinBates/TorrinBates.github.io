import styled from "styled-components";

export const Container = styled.div`
    grid-column: 1 / span 1;
    background-color: black;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100%;
`;

export const Tabs = styled.div`
    margin-top: .3em;
    margin-left: .6em;
    margin-right: .6em;
`;

export const TabOption = styled.h1`
    color: white;
    opacity: ${props => props.selected ? 1 : .6};
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;