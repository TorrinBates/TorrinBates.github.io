import React from "react";
import { connect } from "react-redux";
import { selectRendered } from "../../Redux/page/page.selector";
import { setRendered } from "../../Redux/page/page.actions";
import { Container, Tabs, TabOption } from "./SideBar-Style";
import IconLinks from "../IconLinks/IconLinks";

function SideBar(props) {
    const tabs = [{label:"Home", value:0}, {label:"About", value:1}, {label:"Experience", value:2}, {label:"Work", value:3}];

    return(
        <Container>
            <Tabs>
                {
                    tabs.map((obj) => <TabOption key={obj.value} selected={obj.value === props.rendered} onClick={() => props.setRendered(obj.value)} >{obj.label}</TabOption>)
                }
            </Tabs>
            <IconLinks />
        </Container>
    );
}

const mapStateToProps = state => ({
    rendered: selectRendered(state)
})

const mapDispatchToProps = dispatch => ({
    setRendered: item => dispatch(setRendered(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);