import React from "react";

const Footer = () => {
  return (
    <div className=" relative z-[100] xl:h-[120vh] lg:h-[120vh] h-[90vh]
     app__footer text-white ">
      <div className="z-0 relative bg-[#000000a2] w-[100%] h-[100%]" />
      <div
        className=" absolute z-1 xl:top-[180px] lg:top-[180px] top-[160px] 
        text-[3rem]
       text-[#fffffff7]  font-footer xl:text-[6rem] lg:text-[6rem] "
      >
        <p className="xl:ml-[100px] lg:ml-[100px] ml-5">30 stories </p>
        <p className=" xl:ml-[200px] lg:ml-[200px] ml-6">30 moments ... </p>
      </div>
      <div
        className="bg-[#252525] absolute capitalize flex justify-between
       xl:px-[90px] lg:px-[90px] xl:text-[12px] lg:text-[12px] lg:bottom-[140px] 
       bottom-[130px]  xl:bottom-[140px] left-0 right-0
        font-footer xl:p-[46px] lg:p-[46px] p-[20px] text-[8px]"
      >
        <p>@2021 welcome to abrar-muthana997 </p>
        <p>privacy policy & cookie policy -credits:abrar Alrawi</p>
      </div>
      <div
        className="bg-[#0a0a0a] absolute capitalize 
        flex justify-between xl:px-[90px] lg:px-[90px] xl:text-[12px] lg:text-[12px] text-[10px] z-1 bottom-0 left-0 right-0
         font-footer xl:p-[66px] lg:p-[66px] p-[50px]"
      >
        <p>@2021 welcome to abrar-muthana997 </p>
        <p>privacy policy & cookie policy -credits:abrar Alrawi</p>
      </div>
    </div>
  );
};

export default Footer;
