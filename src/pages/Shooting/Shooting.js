import React from "react";
import { Navbar, ShootingCards } from "../../components";
import { motion } from "framer-motion";
const Shooting = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
        },
      }}
      className="w-screen"
    >
      <Navbar />
      <div className=" flex flex-col justify-center xl:px-[12rem] lg:px-[12rem] px-0">
        <h1
          className="relative z-10 xl:text-[4.7rem] lg:text-[4.7rem] text-[2rem] 
        text-[#696969] text-left mt-[90px] "
        >
          Shooting
        </h1>
        <h1
          className="z-0 xl:text-[14rem] lg:text-[14rem] text-[5rem] relative top-[-40px]
         xl:top-[-130px] lg:top-[-130px]  h-[170px] text-[#eee]  xl:text-center lg:text-center"
        >
          Shooting
        </h1>
      </div>
      <div>
        <ShootingCards />
      </div>
    </motion.div>
  );
};

export default Shooting;
