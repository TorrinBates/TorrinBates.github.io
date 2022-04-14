import styled from "styled-components";

export const Container = styled.div`
    align-self: end;
    display: flex;
    justify-content: center;
    margin-bottom: 1.5em;
`;

export const Logo = styled.a`
    height: 40px;
    width: 40px;
    opacity: .6;
    margin-left: 1em;
    margin-right: 1em;

    &:hover {
        transform: scale(1.05);
        opacity: 1;
        transition: .4s;
    }
`;