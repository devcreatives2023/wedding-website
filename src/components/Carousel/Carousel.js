import React from "react";
import { data } from "../../constants";
const Carousel = () => {
  return <div className=" flex gap-6">{data.carousel.map((item,index) => {
    return (
        <div key={index} className='w-[700px]'>
            <div className=" relative"><img src={item.img} className='w-[700px] object-cover' /> </div>
            <div className=" absolute  text-white bottom-[110px] ml-10"> 
            <p className=" text-[1rem]">{item.name} </p>
            <p className=" text-[3rem]">{item.place} </p>
            </div>
             </div>
    )
  })}</div>;
};

export default Carousel;
