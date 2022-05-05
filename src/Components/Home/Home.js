import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { renderCommit, increaseSelected, decreaseSelected } from "../../Redux/page/page.actions";
import { Base, Table, Name } from "./Home-Style";
import Clock from '../Clock/Clock';
import Desktop from "../Mac/Mac";
import Coffee from "../Coffee/Coffee";

function Home(props) {
    const { renderCommit, increaseSelected, decreaseSelected } = props;
    const divRef = useRef(null);
    useEffect(()=>{ divRef.current.focus(); }, []);
    const captureKey = (e) => {
        if (e.keyCode === 40) { increaseSelected(); }
        else if (e.keyCode === 38) { decreaseSelected(); }
        else if (e.keyCode === 13) { renderCommit(); }
    }
    
    return(
        <Base onKeyDown={captureKey} tabIndex="0" ref={divRef}>
            <Desktop />
            <Clock />
            <Coffee />
            <Table />
            <Name>Torrin Bates</Name>
        </Base>
    );
}

const mapDispatchToProps = dispatch => ({
    renderCommit: () => dispatch(renderCommit()),
    increaseSelected: () => dispatch(increaseSelected()),
    decreaseSelected: () => dispatch(decreaseSelected())
});

export default connect(null, mapDispatchToProps)(Home);