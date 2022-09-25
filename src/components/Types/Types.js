import React, { useState, useLayoutEffect, useRef } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { images } from "../../constants";

const calculateMinHeight = (height, range) => {
  return height + height * range;
};
const rand = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
};
const Types = () => {
  const range = 0.2;
  const { scrollY } = useViewportScroll();
  const parallx = useRef(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [minHeight, setMinHeight] = useState("auto");
  const springConfig = {
    damping: 100,
    stiffness: 100,
    mass: rand(1, 4),
  };

  // useLayoutEffect(() => {
  //   if (!parallx.current) {
  //     return null;
  //   }
  //   const onResize = () => {
  //     setOffsetTop(parallx.current.offsetTop);
  //     setMinHeight(calculateMinHeight(parallx.current.offsetHeight, range));
  //   };
  //   onResize();
  //   window.addEventListener("resize", onResize);
  //   return () => window.removeEventListener("resize", onResize);
  // }, [parallx]);

  const y = useSpring(
    useTransform(
      scrollY,
      [offsetTop - 500, offsetTop + 500],
      ["0%", `${rand}*100%`]
    ),
    springConfig
  );

  return (
    <div className=" mt-[50px] absolute z-[90] bg-white  ">
      <div className="flex ml-5" style={{minHeight}}>
        <motion.div className="relative z-1 drop-shadow-xl ml-6" >
        {/* ref={parallx} initial={{y:0}} style={{y}} */}
          <img src={images.ty2} className="w-[500px] object-cover h-[400px]" />
        </motion.div>
        <motion.div className=" relative z-4 left-[-50px] drop-shadow-xl  top-[-60px]">
          <img
            src={images.ty1}
            className=" ml-6  w-[400px] object-fill  h-[600px]"
          />
          <p className=" absolute bottom-[20px] ml-10 text-white font-bold text-xl z-[4000] px-2  bg-[#00000037]">
            Destroy couch as revenge
          </p>
        </motion.div>

        <motion.div className="relative z-1 mt-5 drop-shadow-xl ">
          <img
            src={images.ty3}
            className="w-[420px] object-cover relative right-5 h-[300px]  "
          />
          <p className=" absolute top-[250px] ml-4 text-white font-bold text-xl z-[4000] px-2  bg-[#00000037]">
            Destroy couch as revenge
          </p>
        </motion.div>
      </div>

      <div className="flex p- bg-white mt-[50px] m-auto justify-center items-center">
        <motion.div className="relative z-1 drop-shadow-xl ml-6" >
        {/* ref={parallx} initial={{y:0}} style={{y}} */}
          <img src={images.ty2} className="w-[400px] object-cover h-[510px]" />
          <p className=" absolute bottom-[10px] ml-2 text-white font-bold text-xl z-[4000] px-2  bg-[#00000037]">
            Destroy couch as revenge
          </p>
        </motion.div>
        <motion.div className=" relative z-4 drop-shadow-xl  top-[-30px]">
          <img
            src={images.ty1}
            className=" ml-6  w-[450px] object-fill  h-[650px]"
            />
        </motion.div>
        <motion.div className="relative z-1 drop-shadow-xl ">
          <img
            src={images.ty3}
            className="w-[350px] object-cover relative right-5 h-[520px]  "
            />
       
        </motion.div>
      </div>
            
    </div>
  );
};

export default Types;
