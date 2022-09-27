import React from 'react'
import { LocationCards, Navbar } from '../../components'
import { motion } from 'framer-motion'
const Locations = () => {
  return (
    <motion.div
    initial={{x:400,opacity:0,right:0}}
    animate={{x:0,opacity:1,transition:{
      duration:1
    },left:0}}
    className=' relative z-[1000]'>
        
        <Navbar />
        <div className=' flex flex-col justify-center xl:px-[12rem] lg:px-[12rem]'>
        <h1 className='relative z-10 text-[4.7rem] text-[#696969] text-left mt-[90px] '> Locations </h1>
        <h1 className='z-0 xl:text-[14rem] lg:text-[14rem] text-[9rem] relative  
        xl:top-[-170px] lg:top-[-130px] top-[-100px] h-[80px]
        text-[#eee]  text-center'> Location</h1>
        </div>
        <LocationCards />
    </motion.div>
  )
}

export default Locations