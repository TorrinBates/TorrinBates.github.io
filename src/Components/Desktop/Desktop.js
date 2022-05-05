import React from "react";
import { connect } from "react-redux";
import { selectRendered } from "../../Redux/page/page.selector";
import Home from "../Home/Home";
import UseSideBar from "../UseSiderBar/UseSideBar";

function Desktop(props) {
    const { rendered } = props;
    return rendered === 0 ? <Home /> : <UseSideBar rendered={rendered} />;
}

const mapStateToProps = state => ({
    rendered: selectRendered(state)
})

export default connect(mapStateToProps)(Desktop);