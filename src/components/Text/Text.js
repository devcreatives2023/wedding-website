import React from "react";
import { motion } from "framer-motion";
const Text = () => {
  return (
    <motion.div
      initial={{
        y: -10,
        rotate: "270deg",
      }}
      whileHover={{
        y: 0,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      }}
      className="invisible xl:visible lg:visible  flex xl:text-[2.7rem] lg:text-[2.7rem] text-[2rem] uppercase xl:top-[420px] lg:top-[420px]
      xl:-left-[430px] lg:-left-[430px] left-[-325px] top-[350px]  gap-[20px]  fixed z-[1000] text-[#cfcfcf] "
    >
      <motion.h1
        initial={{ color: "#cfcfcf" }}
        whileHover={{ color: "black" }}
        style={{ transition: "all 0.5s" }}
      >
        marketings 
      </motion.h1>
      <motion.h1
        initial={{ color: "#cfcfcf" }}
        whileHover={{ color: "black" }}
        style={{ transition: "all 0.5s" }}
      >
        location
      </motion.h1>
      <motion.h1
        initial={{ color: "#cfcfcf" }}
        whileHover={{ color: "black" }}
        style={{ transition: "all 0.5s" }}
      >
        things
      </motion.h1>
      <motion.h1
        initial={{ color: "#cfcfcf" }}
        whileHover={{ color: "black" }}
        style={{ transition: "all 0.5s" }}
      >
        wedding
      </motion.h1>
    </motion.div>
  );
};

export default Text;
