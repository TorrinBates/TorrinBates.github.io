import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
    position: absolute;
    bottom: 6%;
    left: 30%;
    z-index: 3;
    cursor: pointer;
`;

export const Cup = styled.div`
    position: relative;
    width: 112px;
    height: 120px;
    background: linear-gradient(to right,#f9f9f9,#d9d9d9);
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 45%;
`;

export const Top = styled.div`
    position: absolute;
    top: -12px;
    left: 0;
    width: 100%;
    height: 24px;
    background: linear-gradient(to right,#f9f9f9,#d9d9d9);
    border-radius: 50%;
`;

export const Circle = styled.div`
    position: absolute;
    top: 2px;
    left: 4px;
    width: calc(100% - 8px);
    height: 20px;
    background: linear-gradient(to left,#f9f9f9,#d9d9d9);
    border-radius: 50%;
    box-sizing: border-box;
    overflow: hidden;
`;

export const Liquid = styled.div`
    position: absolute;
    top: 8px;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#70543e, #8c694e);
    border-radius: 50%;
`;

export const Handle = styled.div`
    position: absolute;
    right: -26px;
    top: 16px;
    width: 38.4px;
    height: 43.2px;
    border: 10px solid #dcdcdc;
    border-left: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-radius: 50%;
    transform: rotate(46deg);
`;

const FadeOut = keyframes`
    0% { opacity: 1; }
    100% { opacity: 0; }
`;

const FadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const FadeOutRule = css(
    ["", " .7s linear forwards;"],
    FadeOut
);

const FadeInRule = css(
    ["", " .7s linear backwards;"],
    FadeIn
);

export const SteamGroup = styled.div`
    position: relative;
    display: flex;
    z-index: 1;
    padding: 0 8px;
    animation: ${props => props.steam ? FadeInRule : FadeOutRule};
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
        transform: translateY(-40px) scale(3);
    }
    95% {
        opacity: 0;
    }
    100% {
        transform: translateY(-90px) scale(6);
    }
`;

const SteamingRule = css(
    ["", " 5s linear infinite;"],
    Steaming
);

export const Steam = styled.span`
    position: relative;
    bottom: 20px;
    display: block;
    margin: 0 0.8px 20px;
    min-width: 3.2px;
    height: 48px;
    background: #fff;
    border-radius: 50%;
    animation: ${SteamingRule};
    opacity: 0;
    filter: blur(3.2px);
    animation-delay: ${props => props.i * -0.5}s;
`;