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
    <div className=" bg-white w-screen" >
      <h1
        className="capitalize xl:text-[8rem]
        lg:text-[7rem] 
        text-[3rem]
        mt-[-150px]
        xl:mt-0 lg:mt-0
        flex justify-end  items-end  ml-[20px] tracking-wider text-[#eee]"
      >
        L'Agnata di De Andre'
      </h1>
      <AnimatePresence>
        <div className="mt-[-00px]  bg-white">
          <motion.div className="flex xl:pl-[60px] lg:pl-[60px] mt-[-190px]  h-[100vh]  ">
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
                src={images.andre3}
                className="w-[500px] object-cover mt-[40px] h-[300px]"
              />
              <p
                className=" absolute top-[300px] xl:ml-4 lg:ml-4 
                text-[14px]
                text-white xl:text-xl lg:text-xl z-[4000] px-2
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
             overflow-hidden drop-shadow-xl xl:top-[-120px] lg:top-[-120px] md:top-[-50px] "
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
                src={images.andre1}
                className=" ml-6  w-[420px] object-cover  xl:h-[600px]
                 lg:h-[580px] md:h-[500px]"
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
                src={images.andre2}
                className="w-[420px] object-cover relative right-5 h-[250px]  "
              />
              <p
                className=" absolute top-[210px] xl:ml-4 lg:ml-4
                 text-white xl:text-xl lg:text-xl text-[14px] z-[4000] xl:px-2 lg:px-2
           "
              >
                Destroy couch as revenge
              </p>
            </motion.div>
          </motion.div>

          <div
            className="flex  h-[100vh] 
           justify-center items-center xl:mt-[-270px] lg:mt-[-270px] mt-[-350px]"
          >
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
                src={images.andre5}
                className="w-[420px] object-cover xl:h-[530px] lg:h-[530px] h-[400px]"
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
                src={images.andre4}
                className=" ml-6  w-[450px] object-cover  h-[290px]"
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
                src={images.andre6}
                className="w-[400px] object-cover relative right-12 xl:h-[520px] lg:h-[520px]  "
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
