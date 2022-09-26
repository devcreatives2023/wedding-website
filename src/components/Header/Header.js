import React from "react";
import { Navbar } from "../../components";
import {images} from "../../constants"
const Header = () => {

  return (
    <> 
      <div className="relative xl:h-[99vh] lg:h-[99vh] ">
        <img 
        src={images.br3} 
        className='top-0 xl:left-0 xl:right-0 fixed '
         />
      </div>
      <div className=" absolute right-0 top-0">
        <Navbar />
      </div>
    </>
  );
};

export default Header;
