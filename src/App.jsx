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
import Service from "./components/Services/Service";
import Privacy_Policy from "./components/Privacy_Policy/Privacy_Policy";
import Terms_Conditions from "./components/Terms_&_Conditions/Terms_Conditions";
import Return_Refund_Policy from "./components/Return_Refund_Policy/Return_Refund_Policy";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

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
          <Route path="/service" element={<Service />} />
          <Route path="/features" element={<Feacture />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/models" element={<Model />} />
          <Route path="/enquire" element={<EnquirePage />} />
          <Route path="/privacypolicy" element={<Privacy_Policy />} />
          <Route path="/terms_conditions" element={<Terms_Conditions />} />
          <Route path="/return_refund_policy" element={<Return_Refund_Policy />} />

        </Routes>
        <WhatsAppButton /> 
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
