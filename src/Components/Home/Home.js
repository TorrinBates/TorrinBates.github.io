import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { setRendered, increaseSelected, decreaseSelected } from "../../Redux/page/page.actions";
import { Base, Table } from "./Home-Style";
import Clock from '../Clock/Clock';
import Desktop from "../Desktop/Desktop";
import Coffee from "../Coffee/Coffee";

function Home(props) {
    const { setRendered, increaseSelected, decreaseSelected } = props;
    const divRef = useRef(null);
    useEffect(()=>{ divRef.current.focus(); }, []);
    const captureKey = (e) => {
        if (e.keyCode === 40) { increaseSelected(); }
        else if (e.keyCode === 38) { decreaseSelected(); }
        else if (e.keyCode === 13) { setRendered(); }
    }
    
    return(
        <Base onKeyDown={captureKey} tabIndex="0" ref={divRef}>
            <Desktop />
            <Clock />
            <Coffee />
            <Table />
        </Base>
    );
}

const mapDispatchToProps = dispatch => ({
    setRendered: () => dispatch(setRendered()),
    increaseSelected: () => dispatch(increaseSelected()),
    decreaseSelected: () => dispatch(decreaseSelected())
});

export default connect(null, mapDispatchToProps)(Home);