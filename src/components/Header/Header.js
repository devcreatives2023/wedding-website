import React from "react";
import { Navbar } from "../../components";
import { images } from "../../constants";
const Header = () => {
  return (
    <>
      <div className="relative xl:h-[99vh] lg:h-[90vh] h-[60vh] w-[100%] ">
        <video
          muted
          controls
          autoPlay
          className="top-0 left-0 right-0 fixed w-[100%] h-[96vh] object-cover brightness-75"
        >
          <source src={images.video2} typle="video/mp4" className="w-[100%] object-cover" />
        </video>
      </div>
      <div className=" absolute right-0 top-0">
        <Navbar />
      </div>
    </>
  );
};

export default Header;
