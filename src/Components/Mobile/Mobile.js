import React from "react";
import { Screen, Name, Icon, Pdf } from "./Mobile-Style";

function Mobile() {
    return (
        <Screen>
            <Name delay={0} row={1}>Torrin</Name>
            <Name delay={.5} row={2}>Bates</Name>
            <Icon delay={1.5} column={1} git={true} href="https://www.linkedin.com/in/torrin-bates-77981018b/"/>
            <Icon delay={1} column={2} git={false} href="https://github.com/TorrinBates?tab=repositories"/>
            <Pdf delay={2} href="/TorrinBates_Resume.pdf" rel="noopener noreferrer" target="_blank"/>
        </Screen>
    );
}

export default Mobile;