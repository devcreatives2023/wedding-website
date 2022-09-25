import React from "react";
import { Navbar } from "../../components";
import {images} from "../../constants"
const Header = () => {

  return (
    <> 
      <div className="relative   h-[99vh]">
        <img 
        src={images.br3} 
        className='top-0 left-0 right-0 object-contain  fixed '
         />
      </div>

      <div className=" absolute right-0 top-0">
        <Navbar />
      </div>
    </>
  );
};

export default Header;
