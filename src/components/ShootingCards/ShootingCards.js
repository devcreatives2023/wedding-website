import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";

const ShootingCards = () => {
  return (
    <div className=" w-screen overflow-x-hidden mt-[-80px] xl:mt-0 lg:mt-0">
      <div
        className="xl:px-[8rem] lg:px-[8rem] grid 
       grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-12
       xl:justify-between xl:gap-5 lg:gap-5  
       lg:justify-between w-screen
       px-[1rem]
       "
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
            className="xl:h-[500px] lg:h-[500px]
            w-[150px]
            h-[200px]  xl:w-[400px] lg:w-[400px] object-cover "
          />
          <p className="xl:text-xl text-[7px] lg:text-xl  my-4"> Quasi. Commodo consequat </p>
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
            className="xl:h-[520px] h-[200px] lg:h-[520px] 
            mt-3 xl:w-[400px] xl:ml-0 lg:ml-0 lg:w-[400px] object-cover  "
          />
          <p className="xl:text-xl text-[7px] lg:text-xl xl:my-4 lg:my-4"> Quasi. Commodo consequat </p>
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
            className="xl:h-[520px] lg:h-[520px] mt-4  lg:w-[400px] h-[200px] w-[150px] xl:w-[400px] object-cover  "
          />
          <p className="xl:text-xl text-[7px] lg:text-xl my-4"> Quasi. Commodo consequat </p>
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
            className="xl:h-[500px] lg:h-[500px] h-[200px] xl:w-[400px] lg:w-[400px] w-[150px] 
            xl:ml-0 lg:ml-0 
            object-cover  "
          />
          <p className="xl:text-xl text-[7px] lg:text-xl xl:my-4 lg:my-4 " > Quasi. Commodo consequat </p>
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
            className="xl:h-[520px] lg:h-[520px] h-[200px] w-[160px] mt-3 xl:w-[400px]
             lg:w-[400px] object-cover  "
          />
          <p className="xl:text-xl  text-[7px] lg:text-xl xl:my-4 lg:my-4"> Quasi. Commodo consequat </p>
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
            className="xl:h-[520px] lg:h-[520px] xl:ml-0 lg:ml-0
             h-[200px] mt-4 xl:w-[400px] lg:w-[400px] w-[150px] object-cover  "
          />
          <p className="xl:text-xl lg:text-xl text-[7px] xl:my-4 lg:my-4"> Quasi. Commodo consequat </p>
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
          <p className="xl:text-xl lg:text-xl text-[7px] my-4"> Quasi. Commodo consequat </p>
        </div>
      </div>
    </div>
  );
};

export default ShootingCards;
