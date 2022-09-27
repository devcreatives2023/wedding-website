import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";

const ShootingCards = () => {
  return (
    <div>
      <div
        className="xl:px-[8rem] lg:px-[8rem] grid 
       grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 mb-12
       justify-between gap-5 "
      >
        <div>
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.ty2}
            className="xl:h-[500px] lg:h-[500px] w-[400px]  object-cover "
          />
          <p className="text-xl my-4"> Quasi. Commodo consequat </p>
        </div>

        <div>
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.andre1}
            className="xl:h-[520px] lg:h-[520px] mt-3 w-[400px] object-cover  "
          />
          <p className="text-xl my-4"> Quasi. Commodo consequat </p>
        </div>

        <div>
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.r3}
            className="xl:h-[520px] lg:h-[520px] mt-4 w-[400px] object-cover  "
          />
          <p className="text-xl my-4"> Quasi. Commodo consequat </p>
        </div>
        <div>
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.andre6}
            className="xl:h-[500px] lg:h-[500px] w-[400px]  
            object-cover  "
          />
          <p className="text-xl my-4"> Quasi. Commodo consequat </p>
        </div>

        <div>
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.wedding1}
            className="xl:h-[520px] lg:h-[520px] mt-3 w-[400px] object-cover  "
          />
          <p className="text-xl my-4"> Quasi. Commodo consequat </p>
        </div>

        <div>
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.br3}
            className="xl:h-[520px] lg:h-[520px] mt-4 w-[400px] object-cover  "
          />
          <p className="text-xl my-4"> Quasi. Commodo consequat </p>
        </div>

        <div>
          <motion.img
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0.7,
              transition: {
                duration: 0.5,
              },
            }}
            src={images.r1}
            className="xl:h-[520px] lg:h-[520px] mt-4 w-[400px] object-cover  "
          />
          <p className="text-xl my-4"> Quasi. Commodo consequat </p>
        </div>
      </div>
    </div>
  );
};

export default ShootingCards;
