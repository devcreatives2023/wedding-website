import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";
const Checklist = () => { 
  return (
    <div className=" relative overflow-hidden xl:h-[120vh] lg:h-[120vh] h-[70vh]  bg-white">
      <motion.div className=" xl:mt-[70px] bg-white lg:mt-[70px] mt-[-0px] object-cover">
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
          className=" text-[red] absolute xl:text-[9rem] lg:text-[9rem]
          text-[3.5rem]
          xl:ml-10 lg:ml-10 xl:bottom-[190px]  
          lg:bottom-[150px]
          bottom-[250px]
          
          "
          style={{ textShadow: "4px 5px 5px gray" }}
        >
          Wedding{" "}
        </p>
      </motion.div>
    </div>
  );
};

export default Checklist;
