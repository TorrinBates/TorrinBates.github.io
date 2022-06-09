import styled, {css} from "styled-components";

const SubHeader = css`
    font-size: 1em;
    font-weight: normal;
`;

export const InfoHeader = styled.div`
    display: flex;
    margin: 2% 3% 0% 3%;
`;

export const Title = styled.h2`
    font-size: 1.2em;
    margin: 0%;
`;

export const Date = styled.h2`
    ${SubHeader}
    margin: 0%;
    margin-left: auto;
`;

export const Location = styled.h2`
    ${SubHeader}
    margin: 0% 3% 0% 3%;
`;

export const Bullets = styled.ul`
    margin: 2% 6% 0% 4%;
`;