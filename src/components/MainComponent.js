import React from "react";
import Featured from "./Featured";
import Hero from "./Hero";

const MainComponent = () => {
  return (
    <div className="bg-[#393943] w-full px-5 pt-4">
      {/* Hero  */}
      <Hero />
      {/* Featured Servers */}
      <Featured />
    </div>
  );
};

export default MainComponent;
