import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Header input={inputText} setInput={setInputText} onSearch={() => setSearchQuery(inputText)} />
      <Body searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default App;
