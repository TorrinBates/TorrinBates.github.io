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
    border-bottom: .4em solid black;
    border-right: ${props => props.selected ? '0' : '.4em'} solid black;
    background-color: ${props => props.selected ? '#7ca77b' : '#3e5c3d'};
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
    border-right: .4em solid black;
    background-color: #3e5c3d;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
`;

export const CustomButton = styled.button`
    justify-self: center;
    align-self: end;
    margin: 10% 0;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: .3em solid #000000;
    border-radius: 0.6em;
    color: #000000;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    padding: 1em 2.4em;
    text-align: center;
    -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

    &:hover{
        box-shadow: 0 0 40px 40px #abc6aa inset;
    }
`;