import { useState } from "react";
import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import CounterPage from "./components/CounterPage/CounterPage";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Feacture from "./components/FeactureSection/Feacture";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact/Contact";
import EnquirePage from "./components/EnquirePage/EnquirePage";
import Model from "./components/ModelView/Model.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <ScrollToTop />
      <div>
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

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CounterPage />
      <Feacture />
    </div>
  );
};

export default App;
