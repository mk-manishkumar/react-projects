import React, { useEffect } from "react";
import AOS from "aos";
import Home from "./Components/Home";
import "aos/dist/aos.css"; // Import AOS styles

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []); // Initialize AOS on component mount

  return (
    <>
      <Home />
    </>
  );
};

export default App;
