import React from "react";
import { images } from "../../constants";
import { Carousel } from "../../components";
const Location = () => {
  return (
    <div className="  app__home-location relative">
      <div className=" brightness-50  bg-[#00000082] w-[100%] h-[100%]" />
        <h1 className="ml-[130px] z-0 absolute  flex justify-center items-center text-[21rem] -top-[130px] text-[#eeeeee3a]">Loaction</h1>
      <div className=" absolute z-1 ">
        <Carousel />
      </div>
    </div>
  );
};

export default Location;
