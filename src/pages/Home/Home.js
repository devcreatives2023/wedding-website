import React from "react";
import { Header, Types } from "../../components";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className=" relative  bg-white h-[190vh]">
        <div className="px-[4rem] p-section h-[100vh] ">
          <h1 className="capitalize text-[5rem]  tracking-wide text-left px-[6rem] sticky z-[20000] text-[gray]">
            villa las tronas
          </h1>
          <h1 className="capitalize text-[11rem] absolute  top-[90px] left-[190px] tracking-wider text-[#eee]">
            villa las tronas
          </h1>

          <Types />
        </div>
      </div>
    </div>
  );
};

export default Home;
