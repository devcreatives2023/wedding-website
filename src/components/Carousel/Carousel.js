import React from "react";
import { data, icons } from "../../constants";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [current, setCurrent] = React.useState(0);
  const slideLength = data.carousel.length;
  const gotTopreviouse = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? slideLength - 1 : current - 1;
    setCurrent(newIndex);
  };
  const gotoNext = () => {
    const isLast = current === slideLength - 1;
    const newIndex = isLast ? 0 : current + 1;
    setCurrent(newIndex);
  };
  const gotoSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };
  React.useEffect(() => {});
  return (
    <div className="relative overflow-hidden w-[100%] flex justify-center items-center
     xl:mt-[-42%] lg:mt-[-42%] md:mt-[-520px] mt-[-450px]  xl:left-[25%] lg:left-[25%]  z-0">
      <AnimatePresence>
        {data.carousel.map((item, index) => {
          return (
            <motion.div
              key={index}
              className={
                index === current
                  ? "opacity-1 translate-x-0 xl:mt-[50px] mt-[-10%] z-[100000] overflow-hidden lg:mt-[-30px] md:mt-[-0px]"
                  : "absolute xl:top-[-30%] lg:mt-[-40%] mt-[-10%] overflow-hidden xl:left-0 z-[100000]  opacity-0 "
              }
            >
              <motion.div
                className=" xl:w-[50%] lg:w-[55%] md:w-[60%] w-[100%]
                h-[500px]
                top-[-60%]
                xl:top-[-90%] lg:top-[-90%]  relative z-10"
              >
                <img
                  src={item.img}
                  className="object-cover 
                relative "
                />
              </motion.div>
              <div
                className=" absolute z-10 capitalize  flex flex-col xl:bottom-[10px]
             lg:bottom-[55px] md:bottom-[130px] text-white ml-5"
              >
                <span className=" text-[0.9rem] ml-2 uppercase">
                  {item.name}
                </span>
                <span className=" text-[2rem]  ">{item.place} </span>
              </div>
            </motion.div>
          );
        })}
        <div
          className="absolute flex 
            xl:bottom-[0px] lg:bottom-[30px]
        xl:left-[20%] lg:left-[23%] md:left-[24%] 
        md:bottom-[110px]
        z-[1000000000000]  gap-5 text-2xl"
        >
          {data.carousel.map((item, slideIndex) => {
            return (
              <div
                key={slideIndex}
                className={
                  slideIndex
                    ? "text-white cursor-pointer"
                    : "text-[gray] cursor-pointer"
                }
                onClick={() => gotoSlide(slideIndex)}
              >
                <icons.BsDashLg />
              </div>
            );
          })}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
