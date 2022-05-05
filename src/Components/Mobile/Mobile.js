import React from "react";
import { Screen, Name, Icon, Pdf, File } from "./Mobile-Style";

function Mobile() {
    return (
        <Screen>
            <Name row={1}>Torrin</Name>
            <Name row={2}>Bates</Name>
            <Icon column={1} git={true}/>
            <Icon column={2} git={false}/>
            <Pdf><File/></Pdf>
        </Screen>
    );
}

export default Mobile;