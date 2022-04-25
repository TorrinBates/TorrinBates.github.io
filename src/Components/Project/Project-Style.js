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
    grid-template-rows: 1fr;
    transition: .7s;

    &:hover {
        opacity: .95;
        transition: .7s;
    }
`;

export const Title = styled.h1`
    color: white;
    font-size: 1.2em;
`;