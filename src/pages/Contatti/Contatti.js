import React from "react";
import { images,icons } from "../../constants";
import { motion } from "framer-motion";
import {Navbar} from '../../components'
const Contatti = () => {
  return (
    <>
    <>
    <Navbar />
    </>
    <motion.div
    initial={{scale:0.9,opacity:0}}
    animate={{opacity:1,scale:1,transition:{
        duration:1
    }}}
    >
      <div className=" flex flex-col justify-center xl:px-[12rem] lg:px-[12rem] px-0">
        <h1
          className="relative z-10 xl:text-[4.7rem] lg:text-[4.7rem] text-[2rem] 
          text-[#696969] text-left mt-[90px] "
          >
          Contatti
        </h1>
        <h1
          className="z-0 xl:text-[14rem] lg:text-[14rem] text-[5rem] relative top-[-40px]
          xl:top-[-130px] lg:top-[-130px]  h-[170px] text-[#eee]  xl:text-center lg:text-center"
          >
          Contatti
        </h1>
      </div>
      <div className=" xl:px-[6rem] lg:px-[6rem] mt-[-90px] relative z-0 px-3 ">
        <div className="">
          <img src={images.rose6} className="xl:h-[600px] lg:h-[600px] h-[300px] object-cover w-[100%]" />
        </div>

        <div className=" grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 my-[50px]">
          <div className=" uppercase text-[gray] font-semibold ml-2 py-10">
            <p>welcome to sardegna s.r.l</p>
          </div>
          <div className=" w-[80%] text-[1.1rem] text-[gray] font-semibold">
            <div className=" flex justify-between border-b-2 py-10">
              <div> Telephone</div>
              <div>
                <p>+39079501642</p>
                <p>+39079501642</p>
              </div>
            </div>
            <div className=" flex justify-between border-b-2 py-10">
              <div> E-mail</div>
              <div>
                <p>alrawi@gmail.com</p>
                <p>example@gmail.com</p>
              </div>
            </div>
            <div className=" flex justify-between border-b-2 py-10">
              <div> Socials</div>
              <div>
                <p>Telegram</p>
                <p>facebook</p>
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" gap-y-12 xl:w-[50%] lg:w-[50%] m-auto text-center flex flex-col justify-center
         items-center ">
          <h1 className="text-[1.8rem] text-[#4b4b4b] font-semibold"> Laborum minim dicta.</h1>
          <p className=" leading-8 text-xl">
            i. Rem id. Aperiam aute. Quae corporis totam for pariatur. Quam et.
            Dolores cillum ipsa but id velitesse. Excepteur ratione for nisi so
            deserunt consectetur for sint or ad. Ab eum. Ipsum. Sit non so
            incidunt
          </p>
          <form className=" w-[100%] p-2 xl:p-0 lg:p-0 h-[400px] flex flex-col gap-y-6">
        
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
        <div className="flex items-center text-[25px] mt-[-90px] justify-end text-[gray] px-[8rem]">
          <p>Invia</p> <icons.HiOutlineArrowNarrowRight />
        </div>

      </div>
        <div className="flex flex-col xl:flex-row lg:flex-row xl:px-[8rem] lg:px-[8rem] xl:py-[8rem] lg:py-[5rem] mt-[70px] justify-between items-center ">
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
    </motion.div>
            </>
  );
};

export default Contatti;
