import React from "react";
import { useMediaQuery } from 'react-responsive'
import Mobile from "./Components/Mobile/Mobile";
import Desktop from "./Components/Desktop/Desktop";

function App() {
    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  
    return (
      <div>
        {isDesktopOrLaptop && <Desktop />}
        {isTabletOrMobile && <Mobile />}
      </div>
    );
}

export default App;