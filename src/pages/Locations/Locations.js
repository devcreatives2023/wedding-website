import React from "react";
import { LocationCards, Navbar } from "../../components";
import { motion } from "framer-motion";
const Locations = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
        scale: 1,
      }}
      className=" relative z-[1000]"
    >
      <Navbar />
      <div className=" flex flex-col justify-center xl:px-[12rem] lg:px-[12rem] px-0">
        <h1
          className="relative z-10 xl:text-[4.7rem] lg:text-[4.7rem] text-[2rem] 
        text-[#696969] text-left mt-[90px] "
        >
          Location
        </h1>
        <h1
          className="z-0 xl:text-[14rem] lg:text-[14rem] text-[5rem] relative top-[-40px]
         xl:top-[-130px] lg:top-[-130px]  h-[170px] text-[#eee]  xl:text-center lg:text-center"
        >
          Location:
        </h1>
      </div>
      <LocationCards />
    </motion.div>
  );
};

export default Locations;
