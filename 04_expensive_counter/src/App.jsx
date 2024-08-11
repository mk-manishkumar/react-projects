import React from "react";
import "./App.css";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "1rem", fontFamily: "cursive" }}>Expensive Counter</h1>
      <Counter value={1} />
      <Counter value={3} />
      <Counter value={5} />
    </>
  );
};

export default App;
