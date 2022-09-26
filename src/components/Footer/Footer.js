import React from "react";

const Footer = () => {
  return (
    <div className=" relative z-[100] h-[120vh] app__footer text-white ">
      <div className="z-0 relative bg-[#000000a2] w-[100%] h-[100%]" />
      <div
        className=" absolute z-1 top-[180px] 
       text-[#fffffff7]  font-footer text-[6rem] "
      >
        <p className="ml-[100px]">30 stories </p>
        <p className=" ml-[200px]">30 moments ... </p>
      </div>
      <div
        className="bg-[#252525] absolute capitalize flex justify-between
       px-[90px] text-[12px]  bottom-[140px] left-0 right-0
        font-footer p-[46px]"
      >
        <p>@2021 welcome to abrar-muthana997 </p>
        <p>privacy policy & cookie policy -credits:abrar Alrawi</p>
      </div>
      <div
        className="bg-[#0a0a0a] absolute capitalize flex justify-between px-[90px] text-[12px] z-1 bottom-0 left-0 right-0
         font-footer p-[66px]"
      >
        <p>@2021 welcome to abrar-muthana997 </p>
        <p>privacy policy & cookie policy -credits:abrar Alrawi</p>
      </div>
    </div>
  );
};

export default Footer;
