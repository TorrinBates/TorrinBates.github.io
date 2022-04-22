import React from "react";
import { Container } from "./Work-Style";
import Project from "../Project/Project";

function Work() {
    const projects = [{ title: "Lights Packet Action", url: "https://github.com/TorrinBates/LightsPacketAction",  justify: true, align: true }, 
        { title: "Ford AR Web App", url: "https://github.com/TorrinBates/fordwebapp",  justify: false, align: true }, 
        { title: "Face Matcher", url: "https://github.com/TorrinBates/FaceMatcher",  justify: true, align: false }, 
        { title: "Pencil Coding Challenge", url: "https://github.com/TorrinBates/PencilProgrammingChallenge",  justify: false, align: false }];

    return(
        <Container>
            {
                projects.map(obj => <Project key={obj.title} info={obj}/>)
            }
        </Container>
    );
}

export default Work;