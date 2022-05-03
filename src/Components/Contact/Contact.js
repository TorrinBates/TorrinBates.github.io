import React from "react";
import { Center } from "./Contact-Style";
import { Email } from "../Shared/Shared-Style";

function Contact() {

    return(
        <Center>
            <Email href="mailto:torrin4@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</Email>
        </Center>
    );
}

export default Contact;