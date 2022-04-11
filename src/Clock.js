import React from "react";
import MoveClock from "./MoveClock";
import {ReactComponent as ClockSVG} from './Clock.svg';

class Clock extends React.Component {
    
    componentDidMount() {
		MoveClock();
    }

    render() {
    	return (
			<ClockSVG />
    	);
	}
}

export default Clock;