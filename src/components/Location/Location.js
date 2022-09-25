import React from "react";
import { images } from "../../constants";
import { Carousel } from "../../components";
const Location = () => {
  return (
    <div className="">
      <div className=" brightness-50">
        <img
          src={images.locationbg}
          className="opacity-[1]
       h-[95vh] relative w-screen"
        />
      </div>
      <div className="  absolute top-[-130px] ml-[130px]  flex justify-center items-center">
        <h1 className=" text-[21rem] text-[#eeeeee3a]">Loaction</h1>
      </div>
      <div className=" absolute top-[6%]">
        <Carousel />
      </div>
    </div>
  );
};

export default Location;
