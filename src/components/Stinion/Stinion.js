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
const rand = (min = -10, max = 140) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
};
const Stinion = () => {
  const range = 2;
  const { scrollY } = useViewportScroll();
  const parallaxContainerRef = useRef(null);
  const [offsetTop, setOffsetTop] = useState(2);
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
    <div className="h-[40vh] ">
      <h1
        className="capitalize xl:text-[11rem] lg:text-[11rem] text-[7rem]
        flex justify-center items-center xl:text-center lg:text-center  tracking-wider text-[#eee]"
      >
        stinion
      </h1>
      <AnimatePresence>
        <motion.div
          className="bg-white z-[90] mt-[-140px]"
          style={{ minHeight }}
        >
          <div
            className="flex   lg:pl-[60px]  xl:pl-[60px] bg-white
           h-[100vh] xl:flex-row lg:flex-row flex-col"
          >
            <motion.div
              ref={parallaxContainerRef}
              initial={{ y: 0 }}
              style={{ y }}
              className="relative 
              z-0 drop-shadow-xl xl:ml-6 lg:ml-6 overflow-hidden"
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
                src={images.br3}
                className="xl:w-[500px] lg:w-[500px] 
                lg:mt-[40px]
                 mt-[90px]
                object-cover xl:mt-[40px] xl:h-[300px]
                lg:h-[300px] h-[200px]
                "
              />
              <p className=" absolute top-[300px] ml-4 text-white text-xl z-[4000] px-2">
                Destroy couch as revenge
              </p>
            </motion.div>
            <motion.div
              className=" relative z-4 left-[-40px]
               overflow-hidden drop-shadow-xl xl:top-[-120px] lg:top-[-120px]
               top-[-10px]
               "
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
                src={images.weddin1}
                className=" xl:ml-6 lg:ml-6
                xl:w-[420px]
                lg:w-[420px]
                object-cover  
                 xl:h-[600px] lg:h-[600px]"
              />
            </motion.div>

            <motion.div
              className="relative z-1  overflow-hidden xl:mt-[40px] lg:mt-[40px]
              drop-shadow-xl "
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
                src={images.weddin5}
                className="xl:w-[420px] lg:w-[420px]
                w-[250px]
                object-cover relative 
                lg:right-5
                xl:right-5 xl:h-[190px] lg:h-[190px] brightness-75  "
              />
              <p
                className=" 
                absolute xl:top-[210px] lg:top-[210px]  top-[111px]
                 ml-4 text-white text-xl z-[4000] px-2"
              >
                Destroy couch as revenge
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex  bg-white justify-center xl:flex-ro lg:flex-row flex-col
          items-center xl:mt-[-140px] lg:mt-[-140px] "
          >
            <motion.div
              className="relative z-1 drop-shadow-xl ml-[-140px] xl:ml-6 lg:ml-6 overflow-hidden"
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
                src={images.r1}
                className="xl:w-[420px] lg:w-[420px] w-[200px]
                
                object-cover h-[300px] xl:h-[530px] lg:h-[530px]"
              />
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
                src={images.r2}
                className=" xl:ml-6 lg:ml-6  xl:w-[450px] lg:w-[450px] object-fill  xl:h-[290px]
                lg:h-[290px] h-[120px] w-[230px]
                "
              />
            </motion.div>
            <motion.div
              className="relative z-1 drop-shadow-xl overflow-hidden mt-[-40px] xl:mt-0 lg:mt-0  
              xl:mr-0 lg:mr-0
              mr-[-50px] "
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
                src={images.r3}
                className="xl:w-[380px] lg:w-[380px] w-[400px] 
                object-cover relative xl:right-12 lg:right-12 right-2 xl:h-[520px] lg:h-[520px] 
                h-[190px]
                "
              />
              <p className=" absolute bottom-[10px] ml-2 text-white text-lg z-[4000] ">
                Destroy couch as revenge.Destroy couch as
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Stinion;
