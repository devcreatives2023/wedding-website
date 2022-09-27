import React from 'react'
import { Navbar, ShootingCards } from '../../components'

const Shooting = () => {
  return (
    <div>
        <Navbar />
        <div className=' flex flex-col justify-center xl:px-[12rem] lg:px-[12rem]'>
        <h1 className='relative z-10 text-[4.7rem] text-[#696969] text-left mt-[90px] '> Shooting</h1>
        <h1 className='z-0 xl:text-[14rem] lg:text-[14rem] text-[9rem] relative xl:top-[-130px] lg:top-[-130px] top-[-100px] h-[170px] text-[#eee]  text-center'> Shooting</h1>
        </div>
        <div>
            <ShootingCards />
        </div>
    </div>
  )
}

export default Shooting