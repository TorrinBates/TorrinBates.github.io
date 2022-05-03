import React, { useState } from "react";
import Border from "../Border/Border";
import { Divider, Left, TabOption, Label, Fill, CustomButton } from "./Experience-Style";

function Experience() {
    const [selected, setSelected] = useState(0);

    return(
        <Border>
            <Divider>
                <Left>
                    <TabOption onClick={() => setSelected(0)} selected={selected === 0}>
                        <Label>Promess</Label>
                    </TabOption>
                    <TabOption onClick={() => setSelected(1)} selected={selected === 1}>
                        <Label>Ford Capstone</Label>
                    </TabOption>
                    <TabOption onClick={() => setSelected(2)} selected={selected === 2}>
                        <Label>Trijicon</Label>
                    </TabOption>
                    <Fill>
                        <CustomButton>Download</CustomButton>
                    </Fill>
                </Left>
            </Divider>
        </Border>
    );
}

export default Experience;