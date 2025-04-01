import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterPage = () => {
  const [counterState, setCounterState] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false, // Allow triggering every time it's in view
    onChange: (inView) => {
      if (inView) setCounterState(true); // Start counting when in view
      else setCounterState(false); // Reset counter when out of view
    },
  });

  return (
    
    <div className="px-5 md:px-20 py-12">
       <div className="bg-white py-5 px-6 relative">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-red-600 mb-6 ">
        Creating an Impact, One Transaction at a Time..
      </h2></div>
      <div 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-8 bg-orange-500 rounded-3xl px-8 py-16 shadow-xl"
      >
        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            {counterState && <CountUp start={0} end={2000} duration={1.75} />}+
          </h2>
          <p className="text-xl md:text-2xl py-2 font-semibold text-white">Machines</p>
        </div>

        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            {counterState && <CountUp start={0} end={550} duration={1.75} />}+
          </h2>
          <p className="text-xl md:text-2xl py-2 font-semibold text-white">Clients</p>
        </div>

        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            {counterState && <CountUp start={0} end={20} duration={1.75} />}+
          </h2>
          <p className="text-xl md:text-2xl py-2 font-semibold text-white">Cities</p>
        </div>

        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            {counterState && <CountUp start={0} end={1} duration={1.75} />}Mn+
          </h2>
          <p className="text-xl md:text-2xl py-2 font-semibold text-white">Daily Outreach</p>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
