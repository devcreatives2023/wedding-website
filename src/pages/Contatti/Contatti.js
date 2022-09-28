import React from "react";
import { images } from "../../constants";
const Contatti = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center xl:px-[12rem] lg:px-[12rem] px-0">
        <h1
          className="relative z-10 xl:text-[4.7rem] lg:text-[4.7rem] text-[2rem] 
        text-[#696969] text-left mt-[90px] "
        >
          Contatti
        </h1>
        <h1
          className="z-0 xl:text-[14rem] lg:text-[14rem] text-[5rem] relative top-[-40px]
         xl:top-[-130px] lg:top-[-130px]  h-[170px] text-[#eee]  xl:text-center lg:text-center"
        >
          Contatti
        </h1>
      </div>
      <div className=" px-[6rem] mt-[-90px] relative z-0 ">
        <div className="">
          <img src={images.rose6} className="h-[600px] object-cover w-[100%]" />
        </div>

        <div className=" grid grid-cols-2 my-[50px]">
          <div className=" uppercase text-[gray] font-semibold ml-2 py-10">
            <p>welcome to sardegna s.r.l</p>
          </div>
          <div className=" w-[80%] text-[1.1rem] text-[gray] font-semibold">
            <div className=" flex justify-between border-b-2 py-10">
              <div> Telephone</div>
              <div>
                <p>+39079501642</p>
                <p>+39079501642</p>
              </div>
            </div>
            <div className=" flex justify-between border-b-2 py-10">
              <div> E-mail</div>
              <div>
                <p>alrawi@gmail.com</p>
                <p>example@gmail.com</p>
              </div>
            </div>
            <div className=" flex justify-between border-b-2 py-10">
              <div> Socials</div>
              <div>
                <p>Telegram</p>
                <p>facebook</p>
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
