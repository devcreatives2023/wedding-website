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
    <div className="h-[40vh] w-screen ">
      <h1
        className="capitalize xl:text-[11rem]
        lg:text-[10rem] md:text-[9rem]
        text-[3rem] mt-[-60px] xl:mt-0 lg:mt-0
        flex jxl:ustify-end items-end text-right tracking-wider text-[#eee]"
      >
        Su golgone
      </h1>
      <AnimatePresence>
        <motion.div
          style={{ minHeight }}
          className="bg-white z-[90] xl:mt-[-140px] lg:mt-[-90px]  mt-[-170px]  "
        >
          <div
            className="flex xl:flex-row lg:flex-row flex-col pl-[60px] bg-white h-[100vh]  "
            // style={{ minHeight }}
          >
            <motion.div
              className="relative z-0 drop-shadow-xl xl:ml-6 lg:ml-6 
              ml-[-90px]
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
                src={images.rose2}
                className="xl:w-[500px] lg:w-[500px] 
                object-cover xl:mt-[40px] lg:mt-[40px] mt-[70px]
                lg:h-[300px]
                h-[190px]
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
              className=" relative z-4 xl:left-[-40px] lg:left-[-20px] left-[-90px]
               overflow-hidden drop-shadow-xl xl:top-[-120px] lg:top-[-120px] top-[10px] "
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
                className=" xl:ml-6 lg:ml-6 xl:w-[420px] lg:w-[420px]
                lg:h-[600px]
                w-[150px] h-[200px]
                object-cover  brightness-75 xl:h-[600px]"
              />
            </motion.div>

            <motion.div
              className="relative z-1  overflow-hidden xl:mt-[40px] lg:mt-[40px] mt-[-190px] 
              drop-shadow-xl
              ml-[50px] xl:ml-0 lg:ml-0
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
                src={images.rose2}
                className="xl:w-[420px]  lg:w-[420px]  object-cover relative xl:right-5 xl:h-[250px] 
                lg:h-[250px] h-[200px] w-[170px] lg:right-5
                "
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
            className="flex  xl:flex-row lg:flex-row flex-col
             bg-white justify-center items-center 
               xl:mt-[-180px] lg:mt-[-180px] mt-[-80px]"
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
                className="xl:w-[420px] lg:w-[420px] 
                w-screen h-[190px] object-cover xl:h-[530px] 
                lg:h-[530px]
                "
              />
            </motion.div>
            <motion.div
              className=" relative z-4 drop-shadow-xl overflow-hidden 
               xl:top-[-30px] lg:top-[-30px] top-[10px]  
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
                src={images.rose5}
                className=" xl:ml-6 lg:ml-6
                  xl:w-[450px] lg:w-[450px] object-cover  xl:h-[290px]
                  lg:h-[290px] h-[180px]
                  ml-[90px]
                  "
              />
            </motion.div>
            <motion.div
              className="relative z-1 mt-[-170px] xl:mt-0 lg:mt-0 first-letter:
              xl:ml-0 lg:ml-0
              ml-[-260px] drop-shadow-xl overflow-hidden "
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
                w-[200px] 
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
