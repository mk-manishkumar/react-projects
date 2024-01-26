// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./index.css";
import List from "./list";
import data from "./data";

function App() {
  const [buddies, setBuddies] = useState(data);
  return (
    <div className="main">
      <div className="box">
        <h1 className="head">{buddies.length} Birthdays Today</h1>
        <List buddies={buddies} />
        <button onClick={() => setBuddies([])}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
