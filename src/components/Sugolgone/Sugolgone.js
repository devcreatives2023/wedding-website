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
const Sugolgone = () => {
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
    <div className="h-[40vh] ">
      <h1
        className="capitalize xl:text-[11rem]
        lg:text-[10rem] md:text-[9rem]
        text-[3rem]
        flex justify-end items-end text-right tracking-wider text-[#eee]"
      >
        Su golgone
      </h1>
      <AnimatePresence>
        <motion.div
          style={{ minHeight }}
          className="bg-white z-[90] xl:mt-[-140px] lg:mt-[-90px]  mt-[-170px]  "
        >
          <div
            className="flex xl:flex-row lg:flex-ro flex-col pl-[60px] bg-white h-[100vh]  "
            // style={{ minHeight }}
          >
            <motion.div
              className="relative z-0 drop-shadow-xl xl:ml-6 lg:ml-6 overflow-hidden"
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
                src={images.rose2}
                className="xl:w-[500px] lg:w-[500px] object-cover mt-[40px]
                lg:h-[300px]
                h-[290px]
                xl:h-[300px]"
              />
              <p
                className=" absolute xl:top-[300px] lg:top-[300px] xl:ml-4 lg:ml-4
                
                text-white text-xl z-[4000] px-2
                "
              >
                Destroy couch as revenge
              </p>
            </motion.div>
            <motion.div
              className=" relative z-4 left-[-40px]
               overflow-hidden drop-shadow-xl xl:top-[-120px] lg:top-[-120px] top-[-30px] "
              ref={parallaxContainerRef}
              initial={{ y: 0 }}
              style={{ y }}
            >
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.06,
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                  },
                }}
                src={images.rose3}
                className=" xl:ml-6 lg:ml-6  xl:w-[420px] lg:w-[420px]
                lg:h-[600px]
                object-cover  brightness-75 xl:h-[600px]"
              />
            </motion.div>

            <motion.div
              className="relative z-1  overflow-hidden xl:mt-[40px] lg:mt-[40px] mt-[-80px] 
              mr-[-40px]
              xl:mr-0 lg:mr-0
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
                src={images.rose2}
                className="w-[420px] object-cover relative right-5 h-[250px]  "
              />
              <p
                className=" absolute top-[210px] ml-4 text-white text-xl z-[4000] px-2
             "
              >
                Destroy couch as revenge
              </p>
            </motion.div>
          </div>
          <div
            className="flex  xl:flex-row lg:flex-row flex-col bg-white justify-center items-center 
          xl:mt-[-180px] lg:mt-[-180px] mt-[30px]"
          >
            <motion.div
              className="relative z-1 drop-shadow-xl xl:ml-6 lg:ml-6
              overflow-hidden"
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
                src={images.rose4}
                className="xl:w-[420px] lg:w-[420px] w-[140px] object-cover xl:h-[530px] first-letter:
                lg:h-[530px]
                "
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
                src={images.rose5}
                className=" ml-6  w-[450px] object-cover  h-[290px]"
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
                src={images.rose6}
                className="xl:w-[380px] lg:w-[380px]
                
                object-cover relative xl:right-12 lg:right-12 xl:h-[520px] lg:h-[520px]  "
              />
              <p className=" absolute bottom-[10px] ml-2 text-white text-lg z-[4000] ">
                Destroy couch as revenge.Destroy couch as
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Sugolgone;
