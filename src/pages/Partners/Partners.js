import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { data } from "../../constants";
import { motion } from "framer-motion";
const Partners = () => {
  return (
    <motion.div className="m-4">
      <>
        <Navbar />
      </>
      <div className=" p-[5rem]">
        <h1 className=" text-[4rem] px-[3rem] text-[#000000aa]">
          Professionisti
        </h1>
        <h1
          className=" top-[-100px] relative  text-center
         text-[11rem] text-[#eee] h-[100px]"
        >
          Professionisti
        </h1>
      </div>
      <div className=" px-[6rem] gap-[120px] grid grid-cols-1">
        {data.partners.map((item, index) => {
          return (
            <div key={index} className=" grid grid-cols-4">
              <img
                src={item.img}
                className="w-[280px] h-[280px] object-cover grid-cols-1"
              />
              <p className=" text-left font-sans mt-10 ml-5 
              uppercase text-[1rem] font-bold text-[gray] grid-cols-1">{item.name} </p>

              <ul className=" grid-cols-3 text-right flex flex-col text-[1rem] font-sans mt-[60px] gap-3 text-[grey] items-center">
                {item.type.map((item, index) => {
                  return (
                    <li key={index} className=' capitalize font-semibold'>
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
