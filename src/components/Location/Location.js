import React from "react";
import { images } from "../../constants";
const Location = () => {
  return (
    <div className="  bg-black relative z-[10000] ">
      <div className=" relative left-0  right-0   h-[90vh]">
      <img src={images.locationbg} className="opacity-[0.6]  relative " />
      </div>
      <div className=" absolute top-0" >

      <h1 className=" text-[21rem] text-[#eeeeee78]">Loaction</h1>
      </div>
    </div>
  );
};

export default Location;
