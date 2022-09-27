import React from "react";
import { Link } from "react-router-dom";
import { images, icons } from "../../constants";

const SocialWall = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center xl:px-[12rem] lg:px-[12rem] px-0">
        <h1
          className="relative z-10 xl:text-[4.7rem] lg:text-[4.7rem] text-[2rem] 
    text-[#696969] text-left mt-[90px] "
        >
          Social Wall
        </h1>
        <h1
          className="z-0 xl:text-[14rem] lg:text-[14rem] text-[5rem] relative top-[-40px]
          xl:top-[-130px] lg:top-[-130px]   h-[170px] text-[#eee]  xl:text-center lg:text-center"
        >
          Social Wall
        </h1>
      </div>

      <div className=" grid grid-cols-3 gap-x-[68px] mb-12 mx-[12rem] mt-[-120px] relative z-10">
        <div className=" flex flex-col justify-around shadow-xl  border p-4">
          <img src={images.br1} className="h-[390px] w-[300px] object-cover" />
          <div className=" gap-y-3 flex-col flex">
            <Link to="" className=" hover:border-b-[1px] border-black w-[45%]">
              what's your problem
            </Link>
            <Link to="" className=" hover:border-b-[1px] border-black w-[45%]">
              what's your problem
            </Link>
            <div className=" flex justify-between">
              <div className=" flex gap-x-5">
                <Link to="">
                  <icons.BsHeart />
                </Link>
                <Link to="">
                  {" "}
                  <icons.BsHeart />{" "}
                </Link>
                <Link to="">
                  {" "}
                  <icons.TbMessageCircle2 />{" "}
                </Link>
              </div>
              <div>
                <icons.IoMdFlower />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialWall;
