import { useState } from "react";

import "./App.css";
import CounterPage from "./components/CounterPage/CounterPage";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Feacture from "./components/FeactureSection/Feacture";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <CounterPage />
      <Feacture />
    </div>
  );
}

export default App;
