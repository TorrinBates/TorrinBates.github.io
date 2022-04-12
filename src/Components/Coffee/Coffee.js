import React from "react";
import { Container, Cup, Top, Circle, Liquid, Handle, SteamGroup, Steam } from "./Coffee-Style";

function Coffee() {
    const Order = [1,3,16,5,13,20,6,7,10,8,17,11,12,14,2,9,15,4,19];

    return(
        <Container>
            <Cup>
                <Top>
                    <SteamGroup>
                        {
                            Order.map(i => <Steam i={i}/>)
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