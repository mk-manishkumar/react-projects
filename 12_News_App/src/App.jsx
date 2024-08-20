import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [news, setNews] = useState([]);

  const filterNews = async (category) => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    let link;
    if (category && category !== "everything") {
      link = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;
    } else {
      link = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}`;
    }

    try {
      const { data } = await axios.get(link);
      setNews(data.articles);
    } catch (error) {
      console.error("Error fetching the news:", error);
    }
  };

  useEffect(() => {
    filterNews(); 
  }, []);

  return (
    <>
      <Navbar filterNews={filterNews} />
      <Home news={news} />
      <Footer />
    </>
  );
};

export default App;
