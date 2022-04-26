import styled from "styled-components";

export const Image = styled.div`
    width: 92%;
    height: 92%;
    justify-self: ${props => props.justify ? 'end' : 'start'};
    align-self: ${props => props.align ? 'end' : 'start'};
    background-size: cover;
    background-position: center;
    border-radius: .4em;
    overflow: hidden;
    background-image: url(${props => props.image});
    transition: 1.5s ease-in-out;
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
    grid-template-rows: 1fr 7fr;
    transition: .7s;

    &:hover {
        opacity: .95;
        transition: .7s;
    }
`;

export const Title = styled.h1`
    color: white;
    font-size: 2em;
    font-weight: bold;
    margin: .2em 0 0 .3em;
    grid-row: 1;
`;

export const Desc = styled.h1`
    color: white;
    font-size: .8em;
    margin: .4em 1em 0 1em;
    grid-row: 2;
`;

export const Language = styled.div`
    height: 10%;
    width: 10%;
    justify-self: end;
    margin: 0 1em .7em 0;
`;