import React from "react";
import { Grid, Content, Error } from "./UseSiderBar-Style";
import SideBar from "../SideBar/SideBar";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";

function UseSideBar(props) {
    const dynamicallyRender = () => {
        switch(props.rendered) {
            case 1:
                return <About />;
            case 2:
                return <Experience />;
            case 3:
                return <Work />;
            case 4:
                return <Contact />;
            default:
                return <Error>UNEXPECTED ERROR OCCURRED!</Error>;
        }
    }

    return(
        <Grid>
            <SideBar />
            <Content>
                {
                    dynamicallyRender()
                }
            </Content>
        </Grid>
    );
}

export default UseSideBar;