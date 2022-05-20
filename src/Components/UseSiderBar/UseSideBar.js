import React, { useEffect } from "react";
import { Grid, Content, Error } from "./UseSiderBar-Style";
import SideBar from "../SideBar/SideBar";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import { useTransition, animated, useSpringRef, config } from "@react-spring/web";

const comps = [<About />, <Experience />, <Work />, <Contact />];

const dynamicallyRender = (style, index) => {
    return <animated.div style={{...style, height: "100%"}}>
    {
        index > 0 && index < 5 ? comps[index-1] : <Error>UNEXPECTED ERROR OCCURRED!</Error>
    }
    </animated.div>
}

function UseSideBar(props) {
    const {rendered, previous} = props;
    const transRef = useSpringRef();
    const transitions = useTransition(props.rendered, {
        ref: transRef,
        keys: null,
        from: { transform: `translate3d(0,${ rendered > previous ? "50" : "-50" }%,0)` },
        enter: { transform: `translate3d(0,0%,0)` },
        leave: { transform: `translate3d(0,${ rendered > previous ? "-100" : "100" }%,0)` },
        trail: 0,
        config: config.wobbly,
        exitBeforeEnter: true,
    })
    useEffect(() => { transRef.start(); });

    return(
        <Grid>
            <SideBar />
            <Content>
                {transitions((style, i) => {
                        return dynamicallyRender(style, i);
                })}
            </Content>
        </Grid>
    );
}

export default UseSideBar;