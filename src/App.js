import React from "react";
import { Base, Table } from "./Components/App-Style";
import Clock from './Components/Clock/Clock';
import Desktop from "./Components/Desktop/Desktop";
import Coffee from "./Components/Coffee/Coffee";

function App() {
  
    return(
        <Base>
            <Desktop />
            <Clock />
            <Coffee />
            <Table />
        </Base>
    );
}

export default App;