import styled, { css } from "styled-components";

const SharedCSS = css`
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
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover{
        box-shadow: 0 0 40px 40px #abc6aa inset;
    }
`;

export const CustomButton = styled.button`
    justify-self: center;
    align-self: end;
    margin: 10% 10px;

    ${SharedCSS}
`;

export const Email = styled.a`
    justify-self: center;
    align-self: center;
    text-decoration: none;

    ${SharedCSS}
`;