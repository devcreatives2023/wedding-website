import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "../../components";
import { data, images, icons } from "../../constants";
const Progetto = () => {
  const [isOpen, setisOPen] = React.useState(false);
  //   to open and close accordion
  const toggle = (i) => {
    if (isOpen === i) {
      return setisOPen(null);
    }
    setisOPen(i);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
        },
      }}
      exit={{opacity:0}}
    >
      <>
        <Navbar />
      </>

      <div className=" xl:p-[7rem] lg:p-[7rem] p-[2rem] mt-[90px] xl:mt-0 lg:mt-0">
        <h1 className="relative z-10 lg:text-[5rem] xl:text-[5rem] xl:px-[3rem] lg:px-[3rem] text-[3rem] text-[#000000aa]">
          Progetto
        </h1>
        <h1
          className="z-0 xl:top-[-130px] lg:top-[-130px] relative  xl:text-center
        lg:text-center
        xl:text-[13rem] lg:text-[13rem] text-[8rem] text-[#eee] h-[100px]"
        >
          Progetto
        </h1>
      </div>

      <div className=" relative  xl:top-[-150px] lg:top-[-150px] top-[-30px] xl:px-[6rem] lg:px-[6rem]">
        <video
          autoPlay
          controls
          muted
          className="xl:h-[100vh] lg:h-[100vh] border-none outline-none w-[100%] object-cover"
        >
          <source src={images.headervideo} className="" />
        </video>

        <div className="  px-[1rem] grid xl:grid-cols-2 lg:grid-cols-2 xl:gap-[120px] lg:gap-[120px]  xl:py-44 lg:py-44">
          <div className=" uppercase text-[gray]   text-xl font-bold">
            wedding to sardinia
          </div>
          <div className=" flex flex-col ">
            <p className="font-semibold tracking-wide leading-9  text-[#7d7d7d]">
              Run outside as soon as door open stretch miaow then turn around
              and show you my bum freak human out make funny noise mow mow mow
              mow mow mow success now attack human. I like big cats and i can
              not lie spill litter box, scratch at owner, destroy all furniture,
              especially couch, sun bathe mark territory, so fart in owners food
              and skid on floor, crash into wall .
            </p>
            <p className=" text-[1.4rem] text-[#636363] font-semibold my-2">
              Lorem ipsum dolor sit amet, consectetur
            </p>

            <div className="">
              <motion.div>
                <AnimatePresence>
                  {data.progetto.map((items, index) => {
                    return (
                      <div key={index}>
                        <motion.div
                          className=" flex justify-between relative shadow-xl mt-4  p-7  border"
                          style={{
                            boxShadow:
                              "inset 10.42px 10.42px 14px #ABADB0, inset -20.42px -20.42px 14px #FFFFFF",
                          }}
                        >
                          <motion.div className=" text-gray-500  text-xl">
                            {items.question}
                          </motion.div>
                          <button
                            className=" text-red-500"
                            // onClick={() => setisOPen(!isOpen)}
                            onClick={() => toggle(index)}
                          >
                            {isOpen === index ? (
                              <icons.GiSplitCross />
                            ) : (
                              <icons.IoMdFlower />
                            )}
                          </button>
                        </motion.div>

                        {isOpen === index && (
                          <motion.div
                            key="answer"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              transition: {
                                duration: 0.5,
                                ease: "easeInOut",
                              },
                            }}
                            exit={{ opacity: 0 }}
                            className="p-2 text-lg border shadow-sm"
                          >
                            {items.answer}
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col xl:flex-row gap-5 lg:flex-row justify-between items-center mt-10 xl:mt-0 lg:mt-0">
          <img
            src={images.andre2}
            className="xl:h-[400px] lg:h-[400px] object-cover xl:w-[600px] lg:w-[600px] w-[400px]"
          />
          <img
            src={images.weddin5}
            className=" h-[200px] xl:h-[400px] lg:h-[400px] xl:mt-0 lg:mt-0 mt-10 object-cover xl:w-[600px] lg:w-[600px] w-[400px]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Progetto;
