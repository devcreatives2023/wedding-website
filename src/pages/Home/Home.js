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
    <div className=" flex flex-col justify-between ">
      <div>
        <Header />
      </div>

      <div className=" relative z-[100] bg-white mt-10 xl:mt-0 lg:mt-0  ">
        <div className="xl:px-[4rem] lg:px-[4rem] xl:p-section lg:p-section">
          <h1 className="capitalize xl:text-[5rem] lg:text-[5rem] text-[2rem]
            tracking-wide text-left xl:px-[6rem] lg:px-[6rem] sticky z-[20000] text-[gray]">
            villa las tronas
          </h1>
          <h1 className="capitalize xl:text-[11rem] lg:text-[11rem] text-[3rem]
           absolute  xl:top-[90px] 
           top-[-5px]
           lg:top-[90px] xl:left-[190px] lg:left-[190px] tracking-wider text-[#eee]">
            villa las tronas
          </h1>

          <Types /> 
        </div>

        <div className="px-[4rem]  p-section xl:mt-[1410px] 
          w-screen      
        lg:mt-[1410px] mt-[1040px] bg-white h-[100vh] ">
          <h1
            className="capitalize xl:text-[5.5rem] lg:text-[5.5rem] text-[2rem] 
             tracking-wide xl:text-left lg:text-left xl:px-[6rem] lg:px-[6rem] px-0
             ml-[-30px] xl:ml-0 lg:ml-0
             sticky 
          z-[20000] text-[gray]"
          >
            stinion
          </h1>
          <div className="xl:mt-[-110px] lg:mt-[-110px] mt-[-70px] relative bg-white  ">
            <Stinion />
          </div>
        </div>
        <div
          className="px-[4rem]  p-section xl:mt-[750px] lg:mt-[750px] mt-[490px] 
        bg-white h-[100vh]">
          <h1
            className="capitalize xl:text-[5.5rem] lg:text-[5.5rem] text-[2.7rem] 
            tracking-wide xl:text-left xl:px-[6rem] lg:px-[6rem] 
            sticky z-[20000] text-[gray]">
            su Sugolgone
          </h1>
          <div className="xl:mt-[-130px] lg:mt-[-130px] relative bg-white  ">
            <Sugolgone />
          </div>
        </div>
        <div className="xl:px-[4rem] lg:px-[4rem] xl:p-section lg:p-section
        xl:mt-[790px] lg:mt-[790px] mt-[1150px] bg-white h-[100vh] ">
          <h1
            className="capitalize xl:text-[5.5rem] lg:text-[5.5rem] md:text-[4rem]
            text-[2rem] xl:mt-0 lg:mt-0 mt-[-460px] 
            tracking-wide text-left xl:px-[6rem] px-6 lg:px-[6rem] sticky 
            z-[20000] text-[gray]"
          >
            L'Agnata di De Andre'
          </h1>
          <div className="xl:mt-[-30px] lg:mt-[-30px] mt-[120px] relative bg-white  ">
            <Andre />
          </div>
        </div>
        <div className=" bg-white relative  xl:h-[200vh] lg:h-[200vh] h-[100vh]">
          <div className="  xl:h-[50vh] lg:h-[50vh] h-[90vh]">
            <Location />
          </div>

          <div className=" relative xl:h-[140vh] h-[100vh] lg:h-[140vh] 
          top-[-100px] 
           xl:top-[300px] lg:top-[300px]  w-[100%] m-auto  overflow-hidden">
            <Checklist />
             </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
