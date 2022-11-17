import React from "react";
import Discover from "./Discover";
import Groups from "./Groups";

const CardPage = () => {
  return (
    <div className="flex bg-[#393943] ">
      <Groups />
      <Discover />
      <div className="text-white text-[30px] font-black h-screen w-full flex items-center justify-center  ">
        CARD PAGE
      </div>
    </div>
  );
};

export default CardPage;
