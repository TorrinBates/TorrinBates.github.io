import React, { useState } from "react";
import { Container, Cup, Top, Circle, Liquid, Handle, SteamGroup, Steam } from "./Coffee-Style";

function Coffee() {
    const Order = [1,3,16,5,13,20,6,7,10,8,17,11,12,14,2,9,15,4,19];
    const [steam, setSteam] = useState(true);
    const onClick = () => { setSteam(!steam); }

    return(
        <Container onClick={onClick}>
            <Cup>
                <Top>
                    <SteamGroup steam={steam}>
                        {
                            Order.map(i => <Steam key={i} i={i}/>)
                        }
                    </SteamGroup>
                    <Circle>
                        <Liquid />
                    </Circle>
                </Top>
                <Handle/>
            </Cup>
        </Container>
    );
}

export default Coffee;