import React from "react";
import { InfoHeader, Title, Date, Location, Bullets } from "./JobInfo-Style"

function JobInfo(props) {
    const { location, roles } = props.job;

    return (
        <div>
            {roles.map((role, index)=>
                <div key={index}>
                    <InfoHeader>
                        <Title>{role.title}</Title>
                        <Date>{role.date}</Date>
                    </InfoHeader>
                    { index === 0 ? <Location>{location}</Location> : null}
                    <Bullets>
                        { role.bullets.map((b,i) => <li key={i}>{b}</li>) }
                    </Bullets>
                </div>
                
            )}
        </div>
    );
}

export default JobInfo;