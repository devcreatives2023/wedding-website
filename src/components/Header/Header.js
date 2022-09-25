import React from "react";
import { Navbar } from "../../components";
import {images} from "../../constants"
const Header = () => {

  return (
    <> 
    
      <div className=" z-0 relative h-[99vh]">
        <img 
        src={images.br3} 
        className=' z-0  w-[100%]  h-[80vh] object-cover fixed '
         />
      </div>
      <div className=" absolute right-0 top-0">
        <Navbar />
      </div>
    </>
  );
};

export default Header;
