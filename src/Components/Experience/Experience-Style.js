import styled from "styled-components";

export const Divider = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr;
    height: 100%;
    width 100%;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TabOption = styled.div`
    display: flex;
    border-bottom: .3em solid black;
    border-right: ${props => props.selected ? "0" : ".3em"} solid black;
    background-color: ${props => props.selected ? "#7ca77b" : "#3e5c3d"};
    cursor: pointer;
    transition: background-color .2s ease;
`;

export const Label = styled.h1`
    font-size: 1.5em;
    margin-left: 5%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const Fill = styled.div`
    flex-grow: 1;
    border-right: .3em solid black;
    background-color: #3e5c3d;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
`;