import React, { useState, useLayoutEffect, useRef } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { images } from "../../constants";

const calculateMinHeight = (height, range) => {
  return height + height + range;
};
const rand = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
};
const Types = () => {
  const range = 3;
  const { scrollY } = useViewportScroll();
  const parallaxContainerRef = useRef(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [minHeight, setMinHeight] = useState("auto");
  const springConfig = {
    damping: 100,
    stiffness: 100,
    mass: rand(1, 4),
  };

  useLayoutEffect(() => {
    if (!parallaxContainerRef.current) {
      return null;
    }
    const onResize = () => {
      setOffsetTop(parallaxContainerRef.current.offsetTop);
      setMinHeight(
        calculateMinHeight(parallaxContainerRef.current.offsetTop, range)
      );
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [parallaxContainerRef]);

  const y = useSpring(
    useTransform(
      scrollY,
      [offsetTop - 500, offsetTop + 500],
      ["0%", `${range * 30}%`]
    ),
    springConfig
  );
  return (
    <AnimatePresence>
      <div className=" absolute z-[90] w-screen ">
        <div
          className="flex xl:flex-row lg:flex-row flex-col  ml-5"
          // style={{ minHeight }}
        >
          <motion.div
            className="relative z-1 drop-shadow-xl xl:ml-6 lg:ml-6  overflow-hidden"
            ref={parallaxContainerRef}
            initial={{ y: 0 }}
            style={{ y }}
          >
             <motion.img
             initial={{ scale: 1 }}
             whileHover={{
               scale: 1.01,
               transition: {
                 duration: 1,
                 ease: "easeInOut",
                },
              }}
             
              src={images.ty2}
              className="xl:w-[500px] lg:w-[500px] object-cover xl:h-[400px] lg:h-[400px] h-[300px] w-[260px]"
            />
          </motion.div>
          <motion.div
            className=" relative z-4  hover:z-[0] xl:left-[-50px] lg:left-[-50px] left-0
             overflow-hidden drop-shadow-xl xl:top-[-60px] lg:top-[-60px]"
            ref={parallaxContainerRef}
            initial={{ y: 0 }}
            style={{ y }}
          >
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.01,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              src={images.ty4}
              className="
              w-[150px] h-[150px] mt-4 xl:mt-0 lg:mt-0
              xl:ml-6 lg:ml-6  xl:w-[400px] lg:w-[400px]  object-cover  xl:h-[600px] lg:h-[600px]"
            />
            <p className=" absolute 
            bottom-[5px] text-[14px]
            xl:bottom-[20px] lg:bottom-[20px]  xl:ml-10 lg:ml-10
             text-white font-bold xl:text-xl lg:text-xl z-[4000] xl:px-2  lg:px-2">
              Destroy couch as revenge
            </p>
          </motion.div>

          <motion.div
            className="relative z-1 overflow-hidden xl:mt-5 lg:mt-5 mt-[-150px] 
            xl:right-0 lg:right-0
            right-[-160px] drop-shadow-xl "
            ref={parallaxContainerRef}
            initial={{ y: 0 }}
            style={{ y }}
          >
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.01,

                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              src={images.wedding1}
              className="xl:w-[420px] lg:w-[420px] object-cover relative xl:right-5 lg:right-5  xl:h-[300px]
              lg:h-[300px] w-[150px] h-[150px] 
              "
            />
            <p className=" absolute xl:top-[250px] lg:top-[250px]
            top-[125px] text-[14px]
            xl:ml-4 lg:ml-4
             text-white font-bold xl:text-xl lg:text-xl z-[4000] xl:px-2 lg:px-2 ">
              Destroy couch as revenge
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col xl:flex-row lg:flex-row bg-white justify-center
         items-center mt-[40px] xl:mt-[120px] lg:mt-[120px]">
          <motion.div
            className="relative z-1 drop-shadow-xl ml-6 overflow-hidden"
            ref={parallaxContainerRef}
            initial={{ y: 0 }}
            style={{ y }}
          >
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.01,

                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              src={images.ty5}
              className="xl:w-[400px] lg:w-[400px] w-[200px] object-cover xl:h-[510px]
              h-[270px]  lg:h-[510px] "/>
            <p className=" absolute xl:bottom-[10px] lg:bottom-[10px] bottom-10 ml-2
             text-white font-bold xl:text-xl lg:text-xl text-[14px] z-[4000] px-2  ">
              Destroy couch as revenge
            </p>
          </motion.div>
          <motion.div
            className=" relative z-4 drop-shadow-xl overflow-hidden  top-[-30px]"
            ref={parallaxContainerRef}
            initial={{ y: 0 }}
            style={{ y }}
          >
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.01,

                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              src={images.br1}
              className=" xl:ml-6 lg:ml-6  xl:w-[450px] lg:w-[450px]  object-cover  xl:h-[650px]
              lg:h-[650px]
              w-[100px]

              "
            />
          </motion.div>
          <motion.div
            className="relative z-1 drop-shadow-xl overflow-hidden "
            ref={parallaxContainerRef}
            initial={{ y: 0 }}
            style={{ y }}
          >
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.01,

                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              src={images.ty3}
              className="xl:w-[350px] lg:w-[350px] 
              w-[200px]

              object-cover relative xl:right-5 lg:right-5 xl:h-[520px] lg:h-[520px] h-[200px]  "
            />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Types;
