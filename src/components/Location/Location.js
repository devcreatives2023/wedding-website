import React from "react";
import { Carousel } from "../../components";
const Location = () => {
  return (
    <div className="xl:mt-[780px] lg:mt-[910px]
     md:mt-[610px] mt-[300px] app__home-location relative">
      <div className=" brightness-50
        bg-[#00000082] w-[100%] h-[100%]" />
        <h1 className="xl:ml-[130px] lg:ml-[130px]
         z-0 absolute  flex justify-center items-center xl:text-[21rem] lg:text-[21rem]
          text-[6rem]
          xl:-top-[130px] lg:-top-[130px] top-[40px] text-[#eeeeee3a]">Location</h1>
      <div className=" absolute z-1 ">
        <Carousel />
      </div>
    </div>
  );
};

export default Location;
