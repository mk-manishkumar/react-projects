import React from "react";
import ClockHeading from "./Components/ClockHeading";
import ClockTagline from "./Components/ClockTagline";
import CurrentTime from "./Components/CurrentTime";

const App = () => {
  return (
    <>
      <center>
        <ClockHeading></ClockHeading>
        <ClockTagline></ClockTagline>
        <CurrentTime></CurrentTime>
      </center>
    </>
  );
};

export default App;
