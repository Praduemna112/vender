import { useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";  // Import Link for navigation
import CounterPage from "./components/CounterPage/CounterPage";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Feacture from "./components/FeactureSection/Feacture";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <ScrollToTop/>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/about" element={<AboutUs />} /> {/* Aboutus page */}
          <Route path="/features" element={<Feacture />} /> {/* Feature page */}
          <Route path="/contact" element={<Contact />} /> {/* Feature page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Home component that shows all sections
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
