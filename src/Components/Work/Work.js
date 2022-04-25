import React from "react";
import { Container } from "./Work-Style";
import Project from "../Project/Project";
import ProjectsArray from "./ProjectsObject";

function Work() {

    return(
        <Container>
            {
                ProjectsArray.map(obj => <Project key={obj.title} info={obj}/>)
            }
        </Container>
    );
}

export default Work;