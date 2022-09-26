import React, { useLayoutEffect, useState, useRef } from "react";
import {
  Andre,
  Checklist,
  Header,
  Location,
  Stinion,
  Sugolgone,
  Types,
} from "../../components";
const Home = () => {
  return (
    <div className=" flex flex-col justify-between">
      <div>
        <Header />
      </div>

      <div className=" relative z-[100] bg-white ">
        <div className="xl:px-[4rem] lg:px-[4rem] xl:p-section lg:p-section">
          <h1 className="capitalize xl:text-[5rem] lg:text-[5rem] text-[2rem]
            tracking-wide text-left xl:px-[6rem] lg:px-[6rem] sticky z-[20000] text-[gray]">
            villa las tronas
          </h1>
          <h1 className="capitalize xl:text-[11rem] lg:text-[11rem] text-[2rem]
           absolute  xl:top-[90px] lg:top-[90px] xl:left-[190px] lg:left-[190px] tracking-wider text-[#eee]">
            villa las tronas
          </h1>

          <Types />
        </div>

        <div className="px-[4rem]  p-section xl:mt-[1410px] lg:mt-[1410px] mt-[1100px] bg-white h-[100vh] ">
          <h1
            className="capitalize xl:text-[5.5rem] lg:text-[5.5rem] text-[2rem] 
             tracking-wide xl:text-left lg:text-left xl:px-[6rem] lg:px-[6rem] sticky 
          z-[20000] text-[gray]"
          >
            stinion
          </h1>
          <div className="mt-[-110px] relative bg-white  ">
            <Stinion />
          </div>
        </div>
        <div
          className="px-[4rem]  p-section mt-[750px] 
        bg-white h-[100vh]">
          <h1
            className="capitalize text-[5.5rem]  
            tracking-wide text-left px-[6rem] sticky z-[20000] text-[gray]">
            su Sugolgone
          </h1>
          <div className="mt-[-130px] relative bg-white  ">
            <Sugolgone />
          </div>
        </div>
        <div className="px-[4rem] p-section mt-[790px] bg-white h-[100vh] ">
          <h1
            className="capitalize xl:text-[5.5rem] lg:text-[5.5rem] md:text-[4rem] tracking-wide text-left px-[6rem] sticky 
            z-[20000] text-[gray]"
          >
            L'Agnata di De Andre'
          </h1>
          <div className="mt-[-30px] relative bg-white  ">
            <Andre />
          </div>
        </div>
        <div className=" bg-white relative  h-[200vh]">
          <div className="  h-[50vh]">
            <Location />
          </div>

          <div className=" relative h-[140vh]  top-[300px] w-[90%] m-auto  overflow-hidden">
            <Checklist />
             </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
