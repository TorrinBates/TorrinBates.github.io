import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    bottom: 3%;
    left: 50%;
    margin-left:-72px;
    display: flex;
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