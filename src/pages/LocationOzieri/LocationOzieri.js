import React from "react";

import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { images } from "../../constants";
const LocationOzieri = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <div className=" mt-[100px]  flex justify-between p-[5rem]">
      <AnimatePresence>
        <motion.div
          className=" border border-red-300 shadow-xl p-4"
          style={{ translateX: scale }}
        >
          start a fight and then retreat to wash when i lose. I like fish chew
          foot, and i vomit in the bed in the middle of the night good now the
          other hand, too eat half my food and ask for more. What a
          cat-ass-trophy!
        </motion.div>

        <motion.div
          className=" border border-red-300 shadow-xl p-4"
          style={{ translateX: scale }}
        >
          start a fight and then retreat to wash when i lose. I like fish chew
          foot, and i vomit in the bed in the middle of the night good now the
          other hand, too eat half my food and ask for more. What a
          cat-ass-trophy!
        </motion.div>

        <motion.div
          className=" border border-red-300 shadow-xl p-4"
          style={{ translateX: scale }}
        >
        <img src={images.andre4} />
        </motion.div>

        <motion.div
          className=" border border-red-300 shadow-xl p-4"
          style={{ translateX: scale }}
        >
        <img src={images.andre4} />
         </motion.div>

        <motion.div
          className=" border border-red-300 shadow-xl p-4"
          style={{ translateX: scale }}
        >
        
        <img src={images.andre4} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LocationOzieri;
