import React, { useState, useEffect } from "react";
import { icons } from "../../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  opened: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  closed: {
    opacity: 0,
    x: 100,
    y: 100,
  },
};

const middleline = {
  default: {
    x: -200,
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
    <div
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
          md:text-[1.5rem]
          mr-1 tracking-wide xl:leading-10 flex items-center 
          justify-center mt-4 font-bold "
          style={{ textShadow: " 1px 1px 2px black" }}
        >
          wedding <br /> to sardinia
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

      {/* side bar  */}
      <motion.nav
        initial={false}
        variants={variants}
        animate={show ? "opened" : "closed"}
        className="fixed  w-[100%] h-[100%] bottom-0 top-0 p-10  flex-col 
        z-1 flex cursor-pointer xl:items-center lg:items-center 
        xl:right-0 lg:right-0  right-0 text-center   items-center bg-[#fffffff0]"
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
        uppercase font-normal "
          style={{ boxShadow: "3px 3px 19px #77787A, -3px -3px 19px #FFFFFF" }}
        >
          <ul className="  flex flex-col justify-around xl:text-[2rem]
           lg:text-[2rem] tracking-wider   text-[#000000a5]">
            <motion.li
              initial="default"
              whileHover="hover"
              animate="default"
              className=" 
              cursor-pointer relative m-[0 auto] grid justify-center items-center
              overflow-hidden"
            >
              <Link to="" className=" grid-rows-1 grid-cols-1">
                Shopping
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
                Shopping
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
              <Link to="" className=" grid-rows-1 grid-cols-1">
                Shopping
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
                Shopping
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
                Shopping
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
              <Link to="" className=" grid-rows-1 grid-cols-1">
                Shopping
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
              <Link to="" className=" grid-rows-1 grid-cols-1">
                Shopping
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
              cursor-pointer relative m-[0 auto] grid
              justify-center items-center
              overflow-hidden"
            >
              <Link to="" className=" grid-rows-1 grid-cols-1">
                Shopping
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
              <Link to="" className=" grid-rows-1 grid-cols-1">
                Shopping
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
              <Link to="" className=" grid-rows-1 grid-cols-1">
                Shopping
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
    </div>
  );
};

export default Navbar;
