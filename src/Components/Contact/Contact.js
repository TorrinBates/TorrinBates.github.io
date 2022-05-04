import React from "react";
import { Center, Scale } from "./Contact-Style";
import { Email } from "../Shared/Shared-Style";

function Contact() {

    return(
        <Center>
            <Scale>Get In Touch!</Scale>
            <Email href="mailto:torrin4@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</Email>
        </Center>
    );
}

export default Contact;