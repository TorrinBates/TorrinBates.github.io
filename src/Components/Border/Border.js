import React from "react";
import { Container, Box } from "./Border-Style";

function Border(props) {

    return(
        <Container>
            <Box>{props.children}</Box>
        </Container>
    );
}

export default Border;