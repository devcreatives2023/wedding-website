import React, { useState, useEffect } from "react";
import { icons } from "../../constants";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  opened: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
  closed: {
    opacity: 0,
    x: 100,
    y: 100,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

const middleline = {
  default: {
    x: -400,
    transition: {
      duration: 0.5,
    },
  },

  hover: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const middleline2 = {
  default: {
    x: -500,
    transition: {
      duration: 0.5,
    },
  },

  hover: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Navbar = () => {
  const [navbar, setNavabr] = useState(false);
  const [show, setShow] = useState(false);

  const changeColorNavbar = () => {
    if (window.scrollY >= 160) {
      setNavabr(true);
    } else {
      setNavabr(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColorNavbar);
  }, []);

  return (
    <motion.div
      className={
        navbar
          ? "  capitalize text-[#8f8f8f] z-[10000000000]  fixed left-0 xl:right-0 right-10   transition-[0.9s] xl:p-logo lg:p-lg md:p-md sm:p-sm"
          : "text-[#eee] fixed xl:p-logo  z-[10000000000] md:p-md p-0 left-[250px] xl:right-0 lg:right-0    transition-[0.9s]"
      }
    >
      <motion.div
        animate={{
          transition: {
            duration: 1,
          },
        }}
        className="mr-auto flex   items-center  justify-end "
        style={{ textShadow: " 1px 1px 2px black" }}
      >
        <div
          className=" font-logo lg:text-[1.5rem] 
          text-[1rem] xl:text-[1.4rem]
          md:text-[1.5rem] relative z-0
          mr-1 tracking-wide xl:leading-10 flex items-center 
          justify-center mt-4 font-bold "
          style={{ textShadow: " 1px 1px 2px black" }}
        >
          <Link to="/">

          wedding <br /> to sardinia
          </Link>
        </div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 1,
            },
          }}
          className="xl:text-[2.5rem] lg:tex-[2.5rem]
          md:text-[2rem]
         text-[1.3rem] cursor-pointer mr-4"
        >
          <button className=" cursor-pointer " onClick={() => setShow(!show)}>
            <icons.HiOutlineMenuAlt2 className="cursor-pointer" />
          </button>
        </motion.div>
      </motion.div>
      <AnimatePresence>

      {show ? (
        <motion.nav
          initial={false}
          variants={variants}
          animate={show ? "opened" : "closed"}
          className="fixed  w-screen h-screen  p-10 top-0 flex-col 
          z-1 flex cursor-pointer xl:items-center lg:items-center 
          xl:right-0 lg:right-0  right-0 text-center  
          z-10
          items-center bg-[#fffffff0]"
        >
          <button
            className=" cursor-pointer absolute right-10 top-[-20px]
          text-[2rem] text-[gray] pt-10  "
          onClick={() => setShow(!show)}
          >
            <icons.GiTireIronCross />
          </button>
          <motion.div
            className=" bg-white xl:w-[65%] w-screen lg:w-[65%] flex 
            flex-col xl:flex-row lg:flex-row  xl:p-[50px] lg:p-[50px] p-[60px]
          xl:justify-around
          lg:justify-around text-[1.5rem] 
          justify-center items-start
          xl:items-center lg:items-center
          xl:h-[780px] lg:h-[780px]
          uppercase font-normal z-0"
          >
            <ul
              className=" xl:ml-[-250px] lg:ml-[-250px]  flex flex-col justify-around xl:text-[2rem]
           lg:text-[2rem] tracking-wider   text-[#000000a5]"
           >
              <motion.li
                initial="default"
                whileHover="hover"
                animate="default"
                className=" 
                cursor-pointer relative m-[0 auto] grid justify-center items-center
                overflow-hidden"
                >
                <Link to="/shoot" className=" grid-rows-1 grid-cols-1">
                  Shooting
                </Link>
                <motion.div
                  variants={middleline}
                  className=" bg-[gray] top-[-10px]
                h-[2px] relative left-0 w-[100%] z-1 mt-[-23px]"
                />
              </motion.li>

              <motion.li
                initial="default"
                whileHover="hover"
                animate="default"
                className=" 
                cursor-pointer relative m-[0 auto] grid justify-center items-center
                overflow-hidden"
                >
                <Link to="" className=" grid-rows-1 grid-cols-1">
                  wedding day
                </Link>
                <motion.div
                  variants={middleline}
                  className=" bg-[gray] top-[-10px]
                  h-[2px] relative left-0 w-[100%] z-1 mt-[-23px]"
                  />
              </motion.li>

              <motion.li
                initial="default"
                whileHover="hover"
                animate="default"
                className=" 
                cursor-pointer relative m-[0 auto] grid
                justify-center items-center
                overflow-hidden"
                >
                <Link to="/locations" className=" grid-rows-1 grid-cols-1">
                  location
                </Link>
                <motion.div
                  variants={middleline}
                  className=" bg-[gray] top-[-10px]
                h-[2px] relative left-0 w-[100%] z-1 mt-[-23px]"
                />
              </motion.li>

              <motion.li
                initial="default"
                whileHover="hover"
                animate="default"
                className=" 
                cursor-pointer relative m-[0 auto] grid justify-center items-center
              overflow-hidden"
              >
                <Link to="/Partners" className=" grid-rows-1 grid-cols-1">
                  professionisti
                </Link>
                <motion.div
                  variants={middleline}
                  className=" bg-[gray] top-[-10px]
                h-[2px] relative left-0 w-[100%] z-1 mt-[-23px]"
                />
              </motion.li>

              <motion.li
                initial="default"
                whileHover="hover"
                animate="default"
                className=" 
                cursor-pointer relative m-[0 auto] grid justify-center items-center
              overflow-hidden"
              >
                <Link to="" className=" grid-rows-1 grid-cols-1">
                  emozioni
                </Link>
                <motion.div
                  variants={middleline}
                  className=" bg-[gray] top-[-10px]
                h-[2px] relative left-0 w-[100%] z-1 mt-[-23px]"
                />
              </motion.li>
            </ul>
            <ul className="  flex flex-col justify-around xl:text-[2rem] lg:text-[2rem] tracking-wider   text-[#000000a5]">
              <motion.li
                initial="default"
                whileHover="hover"
                animate="default"
                className=" 
                cursor-pointer relative m-[0 auto] grid justify-center items-center
                overflow-hidden"
                >
                <Link to="/progetto" className=" grid-rows-1 grid-cols-1">
                  progetto
                </Link>
                <motion.div
                  variants={middleline2}
                  className=" bg-[gray] top-[-10px]
                h-[2px] relative left-0 w-[100%] z-1 mt-[-23px]"
                />
              </motion.li>

              <motion.li
                initial="default"
                whileHover="hover"
                animate="default"
                className=" 
                cursor-pointer relative m-[0 auto] grid justify-center items-center
                overflow-hidden"
                >
                <Link to="/social" className=" grid-rows-1 grid-cols-1">
                  social wall
                </Link>
                <motion.div
                  variants={middleline2}
                  className="bg-[gray] top-[-10px]
                  h-[2px] relative left-0 w-[100%] z-1 mt-[-23px]"
                />
              </motion.li>

              <motion.li
                initial="default"
                whileHover="hover"
                animate="default"
                className=" 
              cursor-pointer relative m-[0 auto] grid
              justify-center items-center
              overflow-hidden"
              >
                <Link to="" className=" grid-rows-1 grid-cols-1">
                  press area
                </Link>
                <motion.div
                  variants={middleline2}
                  className=" bg-[gray] top-[-10px]
                h-[2px] relative left-0 w-[100%] z-1 mt-[-23px]"
                />
              </motion.li>

              <motion.li
                initial="default"
                whileHover="hover"
                animate="default"
                className=" 
                cursor-pointer relative m-[0 auto] grid justify-center items-center
                overflow-hidden"
                >
                <Link to="/market" className=" grid-rows-1 grid-cols-1">
                  marketing
                </Link>
                <motion.div
                  variants={middleline2}
                  className=" bg-[gray] top-[-10px]
                  h-[2px] relative left-0 w-[100%] z-1 mt-[-23px]"
                />
              </motion.li>

              <motion.li
                initial="default"
                whileHover="hover"
                animate="default"
                className=" 
              cursor-pointer relative m-[0 auto] grid justify-center items-center
              overflow-hidden"
              >
                <Link to="/contatti" className=" grid-rows-1 grid-cols-1">
                  contatti
                </Link>
                <motion.div
                  variants={middleline2}
                  className=" bg-[gray] top-[-10px]
                  h-[2px] relative left-0 w-[100%] z-1 mt-[-23px]"
                />
              </motion.li>
            </ul>
          </motion.div>
        </motion.nav>
      ) : (
        ""
        )}
        </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
