import React from "react";
import { Base, Table } from "./Components/App-Style";
import Clock from './Components/Clock/Clock';
import Desktop from "./Components/Desktop/Desktop";

function App() {
  
  return(
    <Base>
      <Desktop />
      <Clock />
      <Table />
    </Base>
  );
}

export default App;
