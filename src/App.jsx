import { useState } from "react";
import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CounterPage from "./components/CounterPage/CounterPage";
import Feacture from "./components/FeactureSection/Feacture";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Model from "./components/ModelView/Model";
import EnquirePage from "./components/EnquirePage/EnquirePage";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/features" element={<Feacture />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/models" element={<Model />} />
          <Route path="/enquire" element={<EnquirePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <HeroSection />
    <CounterPage />
    <Feacture />
  </div>
);

export default App;
