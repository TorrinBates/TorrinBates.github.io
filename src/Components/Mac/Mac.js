import React from "react";
import { connect } from "react-redux";
import { renderCommit, setSelected } from "../../Redux/page/page.actions";
import { selectSelected } from "../../Redux/page/page.selector";
import {Imac, Screen, Camera, Chin, Stand, Option, Apple} from "./Mac-Style";

function Mac(props) {
    const { selected, renderCommit, setSelected } = props;
    const onClick = (val) => {
        if (selected === val) { renderCommit(); }
        else { setSelected(val); }
    }

    return(
        <Imac>
            <Screen>
                <Camera/>
                <Option onClick={() => onClick(1)} selected={selected === 1}>About</Option>
                <Option onClick={() => onClick(2)} selected={selected === 2}>Experience</Option>
                <Option onClick={() => onClick(3)} selected={selected === 3}>Work</Option>
                <Option onClick={() => onClick(4)} selected={selected === 4}>Contact</Option>
            </Screen>
            <Chin>
                <Apple xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M4.72 15.693a3.564 3.564 0 0 1-.829-.765 10.49 10.49 0 0 1-.71-.97 9.4 9.4 0 0 1-1.186-2.423c-.333-1.001-.495-1.96-.495-2.897 0-1.045.226-1.96.668-2.725.33-.6.813-1.102 1.4-1.454a3.634 3.634 0 0 1 1.896-.56c.236 0 .484.032.753.097.194.054.431.14.711.248.367.14.571.226.636.247.215.076.398.108.538.108.108 0 .259-.032.431-.086.097-.032.28-.097.539-.205.258-.097.463-.172.624-.237.248-.075.485-.14.7-.172.259-.043.517-.054.765-.032.474.032.905.129 1.293.28.678.269 1.227.7 1.637 1.303a3.18 3.18 0 0 0-.485.366 3.982 3.982 0 0 0-.819 1.002 3.395 3.395 0 0 0-.43 1.68c.01.722.194 1.357.56 1.906.258.399.603.743 1.023 1.024.205.14.388.236.56.301a7.77 7.77 0 0 1-.27.732 9.53 9.53 0 0 1-.829 1.54c-.29.42-.517.733-.689.938-.27.323-.528.56-.786.732a1.76 1.76 0 0 1-.97.29c-.233.01-.466-.02-.689-.085a6.483 6.483 0 0 1-.57-.216 5.139 5.139 0 0 0-.604-.226 3.06 3.06 0 0 0-.775-.097c-.27 0-.528.033-.776.097-.206.058-.407.13-.603.216-.28.118-.463.193-.57.226a2.813 2.813 0 0 1-.658.118c-.344 0-.668-.097-.99-.301H4.72zm4.567-12.3c-.452.226-.883.323-1.314.29-.065-.43 0-.872.183-1.357.162-.409.377-.786.668-1.12a3.58 3.58 0 0 1 1.088-.84c.441-.226.861-.344 1.26-.366.054.452 0 .905-.162 1.379a3.87 3.87 0 0 1-.667 1.174 3.2 3.2 0 0 1-1.056.84z"/>
                </Apple>
            </Chin>
            <Stand/>
        </Imac>
    );
}

const mapStateToProps = state => ({
    selected: selectSelected(state)
})

const mapDispatchToProps = dispatch => ({
    renderCommit: () => dispatch(renderCommit()),
    setSelected: item => dispatch(setSelected(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Mac);