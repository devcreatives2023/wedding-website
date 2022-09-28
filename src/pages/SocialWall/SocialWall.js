import React from "react";
import { Link } from "react-router-dom";
import { images, icons } from "../../constants";
import { motion } from "framer-motion";
import {Navbar} from '../../components'
const SocialWall = () => {
  return (
    <>
    <Navbar />
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      >
      <div className="mt-12 flex flex-col justify-center xl:px-[12rem] lg:px-[12rem] px-0">
        <h1 className="relative z-10 xl:text-[4.7rem] lg:text-[4.7rem] text-[2rem] text-[#696969] text-left mt-[90px]">
          Social Wall
        </h1>
        <h1
          className="z-0 xl:text-[14rem] lg:text-[14rem] text-[5rem] relative top-[-40px]
          xl:top-[-130px] lg:top-[-130px]   h-[170px] text-[#eee]  xl:text-center lg:text-center"
          >
          Social Wall
        </h1>
      </div>
      <div
        className=" grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1
        xl:gap-x-[68px]
        lg:gap-x-[68px]
        mb-12 xl:mx-[12rem] lg:mx-[12rem] mt-[-120px] relative z-10"
        >
        <motion.div className=" flex flex-col bg-white hover:bg-[#eee]  justify-around shadow-xl  border p-4 ">
          <img src={images.br1} className="h-[390px] w-[300px] object-cover" />
          <div className=" gap-y-3 flex-col flex pt-3">
            <Link to="" className=" hover:border-b-[1px] border-black w-[45%]">
              what's your problem
            </Link>
            <Link to="" className=" hover:border-b-[1px] border-black w-[45%]">
              what's your problem
            </Link>
            <motion.div className=" flex justify-between pt-1 border-t-2 w-[100%]">
              <div className=" flex gap-x-5 text-lg text-[gray]">
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.BsHeart />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.AiOutlineShareAlt />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.TbMessageCircle2 />
                  </span>
                  <span>0</span>
                </Link>
              </div>
              <div className="text-lg text-[gray]">
                <icons.AiOutlineUpload />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="bg-white hover:bg-[#eee]  flex flex-col
          justify-around shadow-xl h-[200px]  border p-4"
          >
          <div className="gap-y-3 flex-col flex pt-3">
            <p>Iure natus. Nisi nihil so elit yet ex or laboriosam illum. </p>
            <Link
              to=""
              className=" hover:border-b-[1px] border-black
              w-[45%]"
              >
              what's your problem
            </Link>
            <Link to="" className=" hover:border-b-[1px] border-black w-[45%]">
              what's your problem
            </Link>
            <motion.div className="  border-t-2 pt-1 flex justify-between">
              <div className=" flex gap-x-5 text-lg text-[gray]">
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.BsHeart />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.AiOutlineShareAlt />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.TbMessageCircle2 />
                  </span>
                  <span>0</span>
                </Link>
              </div>
              <div className="text-lg text-[gray]">
                <icons.AiOutlineUpload />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div className=" flex flex-col bg-white hover:bg-[#eee] justify-around shadow-xl  border p-4 ">
          <img src={images.br1} className="h-[390px] w-[300px] object-cover" />
          <div className=" gap-y-3 flex-col flex pt-3">
            <Link to="" className=" hover:border-b-[1px] border-black w-[45%]">
              what's your problem
            </Link>
            <Link to="" className=" hover:border-b-[1px] border-black w-[45%]">
              what's your problem
            </Link>
            <motion.div className=" flex justify-between pt-1 border-t-2 w-[100%]">
              <div className=" flex gap-x-5 text-lg text-[gray]">
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.BsHeart />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.AiOutlineShareAlt />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.TbMessageCircle2 />
                  </span>
                  <span>0</span>
                </Link>
              </div>
              <div className="text-lg text-[gray]">
                <icons.AiOutlineUpload />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div className=" flex mt-2 flex-col bg-white hover:bg-[#eee] justify-around shadow-xl  border p-4 ">
          <img src={images.br1} className="h-[390px] w-[300px] object-cover" />
          <div className=" gap-y-3 flex-col flex pt-3">
            <Link to="" className=" hover:border-b-[1px] border-black w-[45%]">
              what's your problem
            </Link>
            <Link to="" className=" hover:border-b-[1px] border-black w-[45%]">
              what's your problem
            </Link>
            <motion.div className=" flex justify-between pt-1 border-t-2 w-[100%]">
              <div className=" flex gap-x-5 text-lg text-[gray]">
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.BsHeart />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.AiOutlineShareAlt />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.TbMessageCircle2 />
                  </span>
                  <span>0</span>
                </Link>
              </div>
              <div className="text-lg text-[gray]">
                <icons.AiOutlineUpload />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div className=" relative xl:top-[-330px] bg-white hover:bg-[#eee] lg:top-[-330px] flex flex-col justify-around shadow-xl  border p-4 ">
          <img src={images.br1} className="h-[390px] w-[300px] object-cover" />
          <div className=" gap-y-3 flex-col flex pt-3">
            <Link to="" className=" hover:border-b-[1px] border-black w-[45%]">
              what's your problem
            </Link>
            <Link to="" className=" hover:border-b-[1px] border-black w-[45%]">
              what's your problem
            </Link>
            <motion.div className=" flex justify-between pt-1 border-t-2 w-[100%]">
              <div className=" flex gap-x-5 text-lg text-[gray]">
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.BsHeart />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.AiOutlineShareAlt />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.TbMessageCircle2 />
                  </span>
                  <span>0</span>
                </Link>
              </div>
              <div className="text-lg text-[gray]">
                <icons.AiOutlineUpload />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="bg-white hover:bg-[#eee] mt-10  flex flex-col
          justify-around shadow-xl h-[200px]  border p-4"
          >
          <div className="gap-y-3 flex-col flex pt-3">
            <p>Iure natus. Nisi nihil so elit yet ex or laboriosam illum. </p>
            <Link
              to=""
              className=" hover:border-b-[1px] border-black
              w-[45%]"
              >
              what's your problem
            </Link>
            <Link to="" className=" hover:border-b-[1px] border-black w-[45%]">
              what's your problem
            </Link>
            <motion.div className="  border-t-2 w-[100%] pt-1 flex justify-between">
              <div className=" flex gap-x-5 text-lg text-[gray]">
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.BsHeart />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.AiOutlineShareAlt />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.TbMessageCircle2 />
                  </span>
                  <span>0</span>
                </Link>
              </div>
              <div className="text-lg text-[gray]">
                <icons.AiOutlineUpload />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white hover:bg-[#eee] relative left-[120%] top-[-300px]  flex flex-col
          justify-around shadow-xl h-[200px]  border p-4"
          >
          <div className="gap-y-3 flex-col flex pt-3">
            <p>Iure natus. Nisi nihil so elit yet ex or laboriosam illum. </p>
            <Link
              to=""
              className=" hover:border-b-[1px] border-black
              w-[45%]"
              >
              what's your problem
            </Link>
            <Link to="" className=" hover:border-b-[1px] border-black w-[45%]">
              what's your problem
            </Link>
            <motion.div className="  border-t-2 w-[100%] pt-1 flex justify-between">
              <div className=" flex gap-x-5 text-lg text-[gray]">
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.BsHeart />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.AiOutlineShareAlt />
                  </span>
                  <span>0</span>
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <span>
                    <icons.TbMessageCircle2 />
                  </span>
                  <span>0</span>
                </Link>
              </div>
              <div className="text-lg text-[gray]">
                <icons.AiOutlineUpload />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
              </>
  );
};

export default SocialWall;
