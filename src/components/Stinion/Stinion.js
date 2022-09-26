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
        className="capitalize text-[11rem]
        flex justify-center items-center text-center tracking-wider text-[#eee]"
      >
        stinion
      </h1>
      <AnimatePresence>
        <motion.div className="bg-white z-[90] mt-[-140px]"
        style={{minHeight}}
        >
          <div
            className="flex pl-[60px] bg-white h-[100vh]"
          >
            <motion.div
              ref={parallaxContainerRef}
              initial={{ y: 0 }}
              style={{ y }}
              className="relative z-0 drop-shadow-xl ml-6 overflow-hidden"
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
                className="w-[500px] object-cover mt-[40px] h-[300px]"
              />
              <p
                className=" absolute top-[300px] ml-4 text-white text-xl z-[4000] px-2">
                Destroy couch as revenge
              </p>
            </motion.div>
            <motion.div
              className=" relative z-4 left-[-40px]
               overflow-hidden drop-shadow-xl top-[-120px] "
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
                className=" ml-6  w-[420px] object-fill  h-[600px]"
              />
            </motion.div>

            <motion.div
              className="relative z-1  overflow-hidden mt-[40px] drop-shadow-xl "
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
                className="w-[420px] object-cover relative right-5 h-[250px] brightness-75  "
              />
              <p
                className=" absolute top-[210px] ml-4 text-white text-xl z-[4000] px-2
             "
              >
                Destroy couch as revenge
              </p>
            </motion.div>
          </div>

          <div className="flex  bg-white justify-center 
          items-center mt-[-140px]">
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
                src={images.r1}
                className="w-[420px] object-cover h-[530px]"
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
                className=" ml-6  w-[450px] object-fill  h-[290px]"
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
                src={images.r3}
                className="w-[380px] object-cover relative right-12 h-[520px]  "
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

export default Stinion;
