import React from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const LocationCards = () => {
  return (
    <motion.div
initial={{opacity:0,y:4}}
whileInView={{opacity:1,y:0}}
    className="xl:px-[8rem] lg:px-[8rem] grid 
   grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 mb-12
   justify-between gap-5 px-[2rem]  relative z-1"
    >
      <div className="w-[400px] h-[400px] ">
        <Link to="ozieri">
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.l4}
            className="xl:h-[500px] lg:h-[500px] xl:w-[400px] lg:w-[400px] w-[160px]  object-cover "
          />
          <p className="xl:text-xl lg:text-xl text-[12px] my-4"> Quasi. Commodo consequat </p>
        </Link>
      </div>

      <div>
        <Link to="ozieri">
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.l2}
            className="xl:h-[520px] lg:h-[520px] mt-3 w-[400px] object-cover  "
          />
          <p className="xl:text-xl lg:text-xl text-[12px] my-4"> Quasi. Commodo consequat </p>
        </Link>
      </div>

      <div>
        <Link to="ozieri">
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.l3}
            className="xl:h-[520px] lg:h-[520px] mt-4 w-[400px] object-cover  "
          />
          <p className="xl:text-xl lg:text-xl text-[12px] my-4"> Quasi. Commodo consequat </p>
        </Link>
      </div>
      <div>
        <Link to="ozieri">
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.l1}
            className="xl:h-[500px] lg:h-[500px] w-[400px]  
            object-cover  "
          />
          <p className="xl:text-xl lg:text-xl text-[12px] my-4"> Quasi. Commodo consequat </p>
        </Link>
      </div>

      <div>
        <Link to="ozieri">
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.l5}
            className="xl:h-[520px] lg:h-[520px] mt-3 w-[400px] object-cover  "
          />
          <p className="xl:text-xl lg:text-xl text-[12px] my-4"> Quasi. Commodo consequat </p>
        </Link>
      </div>

      <div>
        <Link to="ozieri">
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.l6}
            className="xl:h-[520px] lg:h-[520px] mt-4 w-[400px] object-cover  "
          />
          <p className="xl:text-xl lg:text-xl text-[12px] my-4"> Quasi. Commodo consequat </p>
        </Link>
      </div>

      <div>
        <Link to="ozieri">
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.l8}
            className="xl:h-[520px] lg:h-[520px] mt-4 w-[400px] object-cover  "
          />
          <p className="xl:text-xl lg:text-xl text-[12px] my-4"> Quasi. Commodo consequat </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default LocationCards;
