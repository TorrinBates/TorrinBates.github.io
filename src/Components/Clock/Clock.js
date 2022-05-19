import React from "react";
import MoveClock from "./MoveClock";
import { ReactComponent as ClockSVG } from "./Clock.svg";
import { ClockContainer } from "./Clock-Style";

class Clock extends React.Component {
    
    componentDidMount() {
		MoveClock();
    }

    render() {
    	return (
			<ClockContainer>
				<ClockSVG />
			</ClockContainer>
    	);
	}
}

export default Clock;