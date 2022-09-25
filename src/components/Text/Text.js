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
      className=" flex text-[2.7rem] uppercase top-[420px] -left-[430px]  gap-[20px]  fixed z-[1000] text-[#cfcfcf] "
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
