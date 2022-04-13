import React from "react";
import { connect } from "react-redux";
import { selectRendered } from "./Redux/page/page.selector";
import Home from "./Components/Home/Home";

function App(props) {
    return(
        props.rendered === 0 ? <Home /> : <h1>Hello</h1>
    );
}

const mapStateToProps = state => ({
    rendered: selectRendered(state)
})

export default connect(mapStateToProps)(App);