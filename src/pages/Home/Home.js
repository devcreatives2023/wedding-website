import React, { useLayoutEffect, useState, useRef } from "react";
import {
  Andre,
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
        <div className="px-[4rem] p-section  ">
          <h1 className="capitalize text-[5rem]  tracking-wide text-left px-[6rem] sticky z-[20000] text-[gray]">
            villa las tronas
          </h1>
          <h1 className="capitalize text-[11rem] absolute  top-[90px] left-[190px] tracking-wider text-[#eee]">
            villa las tronas
          </h1>

          <Types />
        </div>

        <div className="px-[4rem]  p-section mt-[900px] bg-white h-[100vh] ">
          <h1
            className="capitalize text-[5.5rem]  tracking-wide text-left px-[6rem] sticky 
          z-[20000] text-[gray]"
          >
            stinion
          </h1>
          <div className="mt-[-90px] relative bg-white  ">
            <Stinion />
          </div>
        </div>
        <div className="px-[4rem]  p-section mt-[900px] 
        bg-white h-[100vh] ">
          <h1
            className="capitalize text-[5.5rem]  tracking-wide text-left px-[6rem] sticky 
          z-[20000] text-[gray]"
          >
            su Sugolgone
          </h1>
          <div className="mt-[-90px] relative bg-white  ">
            <Sugolgone />
          </div>
        </div>
        <div className="px-[4rem]  p-section mt-[990px] bg-white h-[100vh] ">
          <h1
            className="capitalize text-[5.5rem]  tracking-wide text-left px-[6rem] sticky 
          z-[20000] text-[gray]"
          >
            L'Agnata di De Andre'
          </h1>
          <div className="mt-[-30px] relative bg-white  ">
            <Andre />
          </div>
        </div>
        <div className=" bg-white relative  h-[200vh]"> 
         <div className="  bg-white  relative z-[1000000] left-0 right-0">
          <Location />
        </div>
        </div>
      </div>
       
    </div>
  );
};

export default Home;
