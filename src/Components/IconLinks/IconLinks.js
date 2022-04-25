import React from "react";
import { ReactComponent as LinkedIn } from "./Company Icons/linkedin.svg";
import { ReactComponent as GitHub } from "./Company Icons/github.svg";
import { Container, Logo } from "./IconLinks-Style";

function IconLinks() {
    return(
        <Container>
            <Logo href="https://www.linkedin.com/in/torrin-bates-77981018b/">
                <LinkedIn />
            </Logo>
            <Logo href="https://github.com/TorrinBates?tab=repositories">
                <GitHub />
            </Logo>
        </Container>
    );
}

export default IconLinks;