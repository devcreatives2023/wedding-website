import React from "react";
import { Navbar } from "../../components";
import { images, icons } from "../../constants";
import { motion } from "framer-motion";
const Marketing = () => {
  return (
    <div className=" mb-12">
      <>
        <Navbar />
      </>
      <div className="mt-12 flex flex-col justify-center xl:px-[12rem] lg:px-[12rem] px-0">
        <h1 className="relative z-10 xl:text-[4.7rem] lg:text-[4.7rem] text-[2rem] text-[#696969] text-left mt-[90px]">
          Marketing
        </h1>
        <h1
          className="z-0 xl:text-[14rem] lg:text-[14rem] text-[5rem] relative top-[-40px]
          xl:top-[-130px] lg:top-[-130px]   h-[170px] text-[#eee]  xl:text-center lg:text-center"
        >
          Marketing
        </h1>
      </div>
      <div className=" relative z-0 mt-[-100px] xl:px-[8rem] lg:px-[8rem]">
        <img src={images.weddin5} className="xl:h-[600px] lg:h-[600px] h-[300px] object-cover w-[100%]" />
      </div>

      <div className=" flex flex-col xl:justify-center lg:justify-center xl:items-center lg:items-center gap-y-14">
        <motion.p inital={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1,transition:{
          duration:1
        }}} className=" xl:text-[3rem] lg:text-[3rem] text-[2rem] text-[gray] mt-12">Eos quisquam. Eius.</motion.p>
        <p className="xl:w-[50%] lg:w-[50%] text-center xl:text-[1.4rem] lg:text-[1.4rem]">
          Consequat proident labore yet nostrum. Fugit dolorem so explicabo si
          yet tempora or labore. Iste aliqua id.Consequat proident labore yet
          nostrum. Consequat proident labore yet nostrum. Iste aliqua
          id.Consequat proident labore yet nostrum. Consequat proident labore
          yet nostrum. Iste aliqua id.Consequat proident labore yet nostrum.
          Consequat proident labore yet nostrum.
        </p>

        <form className=" xl:w-[50%] lg:w-[50%] p-2 xl:p-0 lg:p-0 h-[400px] flex flex-col gap-y-6">
          <input
            type="text"
            className=" border-b-[1px] outline-none border-[#959595]
             w-[100%] p-1 placeholder:text-[grey] placeholder:text-[18px] "
            placeholder="Categorai*"
          />
          <input
            type="text"
            className=" border-b-[1px] outline-none border-[#959595]
             w-[100%] p-1 placeholder:text-[grey] placeholder:text-[18px] "
            placeholder="Name of cognome*"
          />
          <input
            type="text"
            className=" border-b-[1px] outline-none border-[#959595]
             w-[100%] p-1 placeholder:text-[grey] placeholder:text-[18px] "
            placeholder="Telefono*"
          />
          <input
            type="text"
            className=" border-b-[1px] outline-none border-[#959595]
             w-[100%] p-1 placeholder:text-[grey] placeholder:text-[18px] "
            placeholder="Email*"
          />
          <textarea
            rows={3}
            className=" border-b-[1px] outline-none border-[#959595]
             w-[100%] p-1 placeholder:text-[grey] placeholder:text-[18px] "
            placeholder="Messaggio*"
          ></textarea>
          <div className="flex text-[gray] mt-5 gap-x-2 justify-between">
            <div className=" flex justify-center items-center">
              <input type="checkbox" />
              <p> Cupidatat. Sint nulla or voluptas. Veritatis</p>
            </div>
          </div>
        </form>
      </div>
      <div className="flex items-center text-[25px]   justify-end text-[gray] px-[8rem]">
        <p>Invia</p> <icons.HiOutlineArrowNarrowRight />
      </div>
      <div className="flex flex-col xl:flex-row lg:flex-row xl:px-[8rem] lg:px-[8rem] xl:py-[5rem] lg:py-[5rem] mt-[70px] justify-between items-center ">
        <motion.img
          inital={{ y: 5 }}
          whileInView={{
            y: -35,
            transition: {
              duration: 3,
            },
          }}
          src={images.rose2}
          className=" xl:w-[600px] lg:w-[600px] object-cover"
          />
        <motion.img
          inital={{ y: 5 }}
          whileInView={{
            y: 35,
            transition: {
              duration: 3,
            },
          }}
          src={images.andre3}
          className=" xl:w-[600px] lg:w-[600px] w-[100%] object-cover"
        />
      </div>
    </div>
  );
};

export default Marketing;
