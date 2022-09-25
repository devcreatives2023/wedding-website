import React from "react";
import { motion } from "framer-motion";
const Text = () => {
  return (
    <motion.div
      initial={{
        y: -20,
        rotate: "270deg",
      }}
      whileHover={{
        y: 0,
        transition: {
          duration: 2,
          ease: "easeIn",
          type: "spring",
        },
      }}
      className=" flex text-[2.7rem] uppercase top-[340px] -left-[330px]  gap-[20px]  fixed z-[1000] text-[#eee] "
    >
      <motion.h1
        initial={{ color: "#eee" }}
        whileHover={{ color: "black" }}
        style={{ transition: "all 0.5s" }}
      >
        marketing
      </motion.h1>
      <motion.h1
        initial={{ color: "#eee" }}
        whileHover={{ color: "black" }}
        style={{ transition: "all 0.5s" }}
      >
        location
      </motion.h1>
      <motion.h1
        initial={{ color: "#eee" }}
        whileHover={{ color: "black" }}
        style={{ transition: "all 0.5s" }}
      >
        wedding
      </motion.h1>
    </motion.div>
  );
};

export default Text;
