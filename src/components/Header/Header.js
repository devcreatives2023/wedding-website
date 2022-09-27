import React from "react";
import { Navbar } from "../../components";
import { images } from "../../constants";
const Header = () => {
  return (
    <>
      <div className="relative xl:h-[99vh] lg:h-[90vh] h-[40vh] xl:w-[100%]  ">
        <video
          muted
          controls
          autoPlay
          className="top-0 left-0 right-0 fixed xl:w-[100%] lg:w-[100%] w-screen  xl:h-[96vh] lg:h-[96vh] object-cover brightness-75"
        >
          <source src={images.video2} typle="video/mp4" className="xl:w-[100%] lg:w-[100%] w-[50%]  object-cover" />
        </video>
      </div>
      <div className=" absolute right-0 top-0">
        <Navbar />
      </div>
    </>
  );
};

export default Header;
