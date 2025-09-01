import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Header input={searchQuery} setInput={setSearchQuery} />
      <Body searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default App;
