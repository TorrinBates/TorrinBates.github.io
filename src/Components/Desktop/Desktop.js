import React from "react";
import { connect } from "react-redux";
import { selectPrevious, selectRendered } from "../../Redux/page/page.selector";
import { Screen } from "./Desktop-Styled";
import Home from "../Home/Home";
import UseSideBar from "../UseSiderBar/UseSideBar";
import Slide from "../Slide/Slide";

const ReturnHome = () => <Home />;

function Desktop(props) {
    const { rendered, previous } = props;

    return( 
        <Screen>
            {
                rendered === 0 ? <Slide isHome={true} rendered={rendered} previous={previous} display={ReturnHome}/> : <UseSideBar isHome={false} rendered={rendered} previous={previous}/>
            }
        </Screen>
    );
}

const mapStateToProps = state => ({
    rendered: selectRendered(state),
    previous: selectPrevious(state)
})

export default connect(mapStateToProps)(Desktop);