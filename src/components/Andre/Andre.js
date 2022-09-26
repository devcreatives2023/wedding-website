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
const Andre = () => {
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
    <div className=" bg-white">
      <h1
        className="capitalize text-[8rem]
      flex justify-end  items-end   ml-[20px] tracking-wider text-[#eee]"
      >
        L'Agnata di De Andre'
      </h1>
      <AnimatePresence>
        <div className="mt-[-00px]  bg-white">
          <div className="flex pl-[60px] mt-[-190px]  h-[100vh]  ">
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
                src={images.ty2}
                className="w-[500px] object-cover mt-[40px] h-[300px]"
              />
              <p
                className=" absolute top-[300px] ml-4 text-white text-xl z-[4000] px-2
              "
              >
                Destroy couch as revenge
              </p>
            </motion.div>
            <motion.div
              ref={parallaxContainerRef}
              initial={{ y: 0 }}
              style={{ y }}
              className=" relative z-4 left-[-40px]
             overflow-hidden drop-shadow-xl top-[-120px] "
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
                className=" ml-6  w-[420px] object-fill  h-[600px]"
              />
            </motion.div>

            <motion.div
              ref={parallaxContainerRef}
              initial={{ y: 0 }}
              style={{ y }}
              className="relative z-1  overflow-hidden mt-[40px] drop-shadow-xl "
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

          <div className="flex  h-[100vh] 
           justify-center items-center mt-[-230px]">
            <motion.div
              ref={parallaxContainerRef}
              initial={{ y: 0 }}
              style={{ y }}
              className="relative z-1 drop-shadow-xl ml-6 overflow-hidden"
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
                className="w-[420px] object-cover h-[530px]"
              />
            </motion.div>
            <motion.div
              ref={parallaxContainerRef}
              initial={{ y: 0 }}
              style={{ y }}
              className=" relative z-4 drop-shadow-xl overflow-hidden  top-[-30px]"
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
                className=" ml-6  w-[450px] object-fill  h-[290px]"
              />
            </motion.div>
            <motion.div
              ref={parallaxContainerRef}
              initial={{ y: 0 }}
              style={{ y }}
              className="relative z-1 drop-shadow-xl overflow-hidden "
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
                className="w-[380px] object-cover relative right-12 h-[520px]  "
              />
              <p className=" absolute bottom-[10px] ml-2 text-white text-lg z-[4000] ">
                Destroy couch as revenge.Destroy couch as
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Andre;
