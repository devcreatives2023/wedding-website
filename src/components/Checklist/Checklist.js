import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";
const Checklist = () => {
  return (
    <div className="   mt-[0px] relative overflow-hidden">
      <motion.div className=" mt-[70px]  object-cover">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.02,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          src={images.checklist}
          className="  overflow-hidden  brightness-[0.9] xl:h-[700px] lg:h-[700px]  w-[100%] object-cover"
        />

        <p
          className=" text-[red] absolute text-[9rem] ml-10 bottom-[150px]"
          style={{ textShadow: "4px 5px 5px gray" }}
        >
          Wedding{" "}
        </p>
      </motion.div>
    </div>
  );
};

export default Checklist;
