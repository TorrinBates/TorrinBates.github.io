import React from "react";
import { connect } from "react-redux";
import { selectPrevious, selectRendered } from "../../Redux/page/page.selector";
import { Screen } from "./Desktop-Styled";
import Home from "../Home/Home";
import UseSideBar from "../UseSiderBar/UseSideBar";

function Desktop(props) {
    const { rendered, previous } = props;
    return( 
        <Screen>
            {
                rendered === 0 ? <Home /> : <UseSideBar rendered={rendered} previous={previous} />
            }
        </Screen>
    );
}

const mapStateToProps = state => ({
    rendered: selectRendered(state),
    previous: selectPrevious(state)
})

export default connect(mapStateToProps)(Desktop);