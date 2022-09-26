import React from "react";
import { data, icons } from "../../constants";
import { AnimatePresence, motion } from "framer-motion";

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
    <div className="  relative overflow-hidden w-[100%] flex justify-center items-center mt-[-42%]  left-[25%]  z-0">
      <AnimatePresence>
        {data.carousel.map((item, index) => {
          return (
            <motion.div
              key={index}
              className={
                index === current
                  ? "opacity-1 translate-x-0 xl:mt-[50px] overflow-hidden lg:mt-[-30px] "
                  : "absolute xl:top-[-30%] lg:mt-[-40%] overflow-hidden xl:left-0 w-[100%] h-[100%] opacity-0 "
              }
            >
              <motion.div
                className=" w-[50%] lg:w-[55%]
                h-[500px]
                top-[-90%] relative z-10"
              >
                <img
                  src={item.img}
                  className="object-cover 
                relative "
                />
              </motion.div>
              <div
                className=" absolute z-10 capitalize  flex flex-col xl:bottom-[10px]
             lg:bottom-[55px] text-white ml-5"
              >
                <span className=" text-[0.9rem] ml-2 uppercase">
                  {item.name}{" "}
                </span>
                <span className=" text-[3.5rem]  ">{item.place} </span>
              </div>
            </motion.div>
          );
        })}
        <div
          className="absolute flex  xl:bottom-[0px] lg:bottom-[30px]
        xl:left-[20%] lg:left-[23%] z-[100000000000]  gap-5 text-2xl"
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
