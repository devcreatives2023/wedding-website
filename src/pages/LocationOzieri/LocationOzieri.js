import React from "react";
import { motion } from "framer-motion";
import { data,icons } from "../../constants";
import { Navbar } from "../../components";
const LocationOzieri = () => {

const sliderLeft=()=>{
  var slider=document.getElementById("slider")
  slider.scrollLeft=slider.scrollLeft-500
}
const sliderRight=()=>{
  var slider=document.getElementById("slider")
  slider.scrollLeft=slider.scrollLeft+500
}



  return (
    <>
      <>
        <Navbar />
      </>
      <motion.div
        className=" xl:h-[76vh] lg:h-[76vh] h-[50vh]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        <div className=" xl:mt-[120px] lg:mt-[120px]">
          <h1
            className="z-0 xl:text-[10rem] relative lg:text-[14rem] 
          text-[3rem]  xl:top-[-40px] lg:top-[-40px] 
          top-[270px]
          h-[10px] text-[#eee]  xl:text-center lg:text-center"
          >
            Sposarsi A Ozieri
          </h1>
        </div>

        <div className=" relative xl:top-[-190px] lg:top-[-190px]  xl:px-[8rem] lg:px-[8rem] pt-[150px]">
          <div
            id="slider"
            className="flex  gap-x-6 p-section w-full h-full overflow-x-scroll scrollbar-hide scroll whitespace-nowrap scroll-smooth "
          >
            <button
            style={{boxShadow:" inset 4.8px 4.8px 16px #8E8F91, inset -4.8px -4.8px 16px #FFFFFF"}}
            onClick={sliderLeft} className="absolute xl:left-[100px] lg:left-[100px] left-[50px]
              xl:top-[55%] lg:top-[55%] mt-[-40px] xl:mt-0 lg:mt-0  bg-[#eee] shadow-xl  
              text-[gray] rounded-full xl:p-4 lg:p-4 p-2 z-10 "> 
          <icons.BiLeftArrow />
             </button>
            <div
              className=" flex flex-col xl:w-[500px] lg:w-[500px] w-[300px] h-[300px]
              xl:h-[400px] lg:h-[400px] shadow p-5  cursor-pointer hover:scale-105 ease-in-out duration-300"
            >
              <p className=" capitalize xl:text-[2.6rem] lg:text-[2.6rem] text-[#4a4949]">
                sposarsi a ozieri
              </p>
              <p className="xl:text-[1.1rem] lg:text-[1.1rem] text-[10px] w-[40%] leading-9">
                Decide to want nothing to do with my owner today enslave the
                <br />
                hooman do i like standing on litter cuz i sits when i have
                spaces,
                <br />
                do i like standing on litter cuz i sits when i have spaces, do i
                <br />
                like standing on litter cuz i sits when i have spaces, do i like
                <br />
                standing on litter cuz i sits when i have spaces.
              </p>
            </div>
            <div className="flex gap-x-4">
              {data.carousel.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" xl:w-[500px] lg:w-[500px] w-[300px] h-[300px]
                     shadow p-4 xl:h-[400px] lg:h-[400px]  cursor-pointer hover:scale-105 ease-in-out duration-300"
                  >
                    <img
                      src={item.img} alt="locations name"
                      className="w-full h-full  object-cover"
                    />
                  </div>
                );
              })}
            </div>
            <button className=" bg-[#eee] absolute xl:right-[110px] lg:right-[110px]
            xl:top-[55%] lg:top-[55%] mt-[-40px] xl:mt-0 lg:mt-0 shadow-xl
              text-[gray] rounded-full xl:p-4 lg:p-4 p-2 z-10 "
              style={{boxShadow:" inset 4.8px 4.8px 16px #8E8F91, inset -4.8px -4.8px 16px #FFFFFF"}}

              onClick={sliderRight}> 
          <icons.BiRightArrow />
             </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LocationOzieri;
