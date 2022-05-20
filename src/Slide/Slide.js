import React, { useEffect } from "react";
import { useTransition, animated, useSpringRef, config } from "@react-spring/web";

function Slide(props) {
    const {rendered, previous, display} = props;
    const transRef = useSpringRef();
    const transitions = useTransition(rendered, {
        ref: transRef,
        keys: null,
        from: { transform: `translate3d(0,${ rendered > previous ? "50" : "-50" }%,0)` },
        enter: { transform: `translate3d(0,0%,0)` },
        leave: { transform: `translate3d(0,${ rendered > previous ? "-100" : "100" }%,0)` },
        trail: 0,
        config: config.stiff,
        exitBeforeEnter: true,
    })
    useEffect(() => { transRef.start(); });

    return(
        <>
            {
                transitions((style, i) => {
                    return <animated.div style={{...style, height: "100%"}}>{display(i)}</animated.div>
                })
            }
        </>
    );
}

export default Slide;