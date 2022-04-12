import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
    position: absolute;
    bottom: 10%;
    left: 6%;
    z-index: 3;
`;

export const Cup = styled.div`
    position: relative;
    width: 280px;
    height: 300px;
    background: linear-gradient(to right,#f9f9f9,#d9d9d9);
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 45%;
`;

export const Top = styled.div`
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(to right,#f9f9f9,#d9d9d9);
    border-radius: 50%;
`;

export const Circle = styled.div`
    position: absolute;
    top: 5px;
    left: 10px;
    width: calc(100% - 20px);
    height: 50px;
    background: linear-gradient(to left,#f9f9f9,#d9d9d9);
    border-radius: 50%;
    box-sizing: border-box;
    overflow: hidden;
`;

export const Liquid = styled.div`
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#c57e65, #e28462);
    border-radius: 50%;
`;

export const Handle = styled.div`
    position: absolute;
    right: -70px;
    top: 40px;
    width: 160px;
    height: 180px;
    border: 25px solid #dcdcdc;
    border-left: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-radius: 50%;
    transform: rotate(46deg);
`;

export const SteamGroup = styled.div`
    position: relative;
    display: flex;
    z-index: 1;
    padding: 0 20px;
`;

const Steaming = keyframes`
    0% {
        transform: translateY(0) scale(1);
        opacity: 0;
    }
    15% {
        opacity: 1;
    }
    50% {
        transform: translateY(-150px) scale(5);
    }
    95% {
        opacity: 0;
    }
    100% {
        transform: translateY(-300px) scale(10);
    }
`;

const animationRule = css(
    ['', ' 5s linear infinite;'],
    Steaming
);

export const Steam = styled.span`
    position: relative;
    bottom: 50px;
    display: block;
    margin: 0 2px 50px;
    min-width: 8px;
    height: 120px;
    background: #fff;
    border-radius: 50%;
    animation: ${animationRule};
    opacity: 0;
    filter: blur(8px);
    animation-delay: ${props => --props.i * -0.5}s;
`;