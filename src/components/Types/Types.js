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
      <div className=" absolute z-[90]  ">
        <div
          className="flex ml-5"
          // style={{ minHeight }}
        >
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
             
              src={images.ty2}
              className="w-[500px] object-cover h-[400px]"
            />
          </motion.div>
          <motion.div
            className=" relative z-4  hover:z-[0] left-[-50px] overflow-hidden drop-shadow-xl top-[-60px]"
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
              className=" ml-6  w-[400px] object-fill  h-[600px]"
            />
            <p className=" absolute bottom-[20px] ml-10 text-white font-bold text-xl z-[4000] px-2  bg-[#00000037]">
              Destroy couch as revenge
            </p>
          </motion.div>

          <motion.div
            className="relative z-1 overflow-hidden mt-5 drop-shadow-xl "
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
              className="w-[420px] object-cover relative right-5 h-[300px]  "
            />
            <p className=" absolute top-[250px] ml-4 text-white font-bold text-xl z-[4000] px-2  bg-[#00000037]">
              Destroy couch as revenge
            </p>
          </motion.div>
        </div>

        <div className="flex  bg-white justify-center items-center mt-[120px]">
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
              className="w-[400px] object-cover h-[510px]"
            />
            <p className=" absolute bottom-[10px] ml-2 text-white font-bold text-xl z-[4000] px-2  bg-[#00000037]">
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
              className=" ml-6  w-[450px] object-fill  h-[650px]"
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
              className="w-[350px] object-cover relative right-5 h-[520px]  "
            />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Types;
