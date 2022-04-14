import React from "react";
import { Container, Projects } from "./Work-Style";
import Project from "../Project/Project";

function Work() {
    return(
        <Container>
            <Projects>
                <Project />
                <Project />
                <Project />
                <Project />
            </Projects>
        </Container>
    );
}

export default Work;