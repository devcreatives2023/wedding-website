import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { data } from "../../constants";
import { motion } from "framer-motion";
const Partners = () => {
  return (
    <motion.div
      className="m-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{ opacity: 0 }}
    >
      <>
        <Navbar />
      </>
      <div className=" flex flex-col justify-center xl:px-[12rem] lg:px-[12rem] px-0">
        <h1
          className="relative z-10 xl:text-[4.7rem] lg:text-[4.7rem] text-[2rem] 
        text-[#696969] text-left mt-[90px] "
        >
          Professionisti
        </h1>
        <h1
          className="z-0 xl:text-[14rem] lg:text-[14rem] text-[5rem] relative top-[-40px]
         xl:top-[-130px] lg:top-[-130px]  h-[170px] text-[#eee]  xl:text-center lg:text-center"
        >
          Professionisti
        </h1>
      </div>
      <div className=" xl:px-[6rem] lg:px-[6rem] xl:gap-[120px] lg:gap-[120px] gap-[100px] grid grid-cols-1">
        {data.partners.map((item, index) => {
          return (
            <div
              key={index}
              className=" grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4"
            >
              <motion.img
                initial={{ y: 0 }}
                whileInView={{
                  y: 50,
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                exit={{ y: 0 }}
                src={item.img}
                className="xl:w-[280px] h-[400px] w-[500px]
                lg:w-[280px] xl:h-[280px] lg:h-[280px] object-cover xl:grid-cols-1 lg:grid-cols-1"
              />
              <div className=" flex-row ">
                <p
                  className=" text-left font-sans mt-10 ml-5 
                uppercase text-[1rem] font-bold text-[gray] grid-cols-1"
                >
                  {item.name}
                </p>
              </div>

              <ul className=" grid-cols-3 text-right flex flex-col text-[1rem] font-sans mt-[60px] gap-3 text-[grey] items-center">
                {item.type.map((item, index) => {
                  return (
                    <li key={index} className=" capitalize font-semibold">
                      <Link to="">{item}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Partners;
