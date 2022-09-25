import React, { useState, useEffect } from "react";
import { icons } from "../../constants";
import { motion } from "framer-motion";
const Navbar = () => {
  const [navbar, setNavabr] = useState(false);
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
      className={navbar ? "text-[gray] fixed left-0 xl:right-0 right-10 z-[1000000] transition-[0.9s]   xl:p-logo lg:p-lg md:p-md sm:p-sm" :"text-[#eee] fixed xl:p-logo lg:p-lg md:p-md sm:p-sm left-0 right-0  transition-[0.9s]" }
    >
      <motion.div
      animate={{transition:{
        duration:1
      }}}
      className="mr-auto flex  items-center  justify-end ">
        <div className=" font-logo lg:text-[2rem] 
        text-[1rem] xl:text-[1.4rem]
        md:text-[1.5rem]
        mr-1 tracking-wide xl:leading-10 flex items-center justify-center mt-4 " style={{textShadow:"2px 4px 3px grey"}}>
        wedding  <br />   to sardinia 
        </div>
        <motion.div initial={{scale:1}}
        whileHover={{scale:1.1,transition:{
          duration:1
        }}}
        
        className="xl:text-[2.5rem] lg:tex-[2.5rem]
        md:text-[2rem]
        text-[1.3rem]">
          <icons.HiOutlineMenuAlt2 />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
