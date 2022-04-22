import styled from "styled-components";

export const Image = styled.div`
    width: 85%;
    height: 85%;
    justify-self: ${props => props.justify ? 'end' : 'start'};
    align-self: ${props => props.align ? 'end' : 'start'};
    background-color: plum;
    background-size: cover;
    background-position: center;
    border-radius: .4em;
    overflow: hidden;
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const Info = styled.div`
    background-color: black;
    opacity: 0;
    display: grid;
    height: 100%;
    border-radius: .4em;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    &:hover {
        opacity: .8;
        transition: .7s;
    }
`;

export const Title = styled.h1`
    color: white;
    font-size: 1.2em;
`;