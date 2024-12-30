"use client"

import { useData } from '@/contexts/DataContexts';
import React from 'react'
import { IoIosClose } from "react-icons/io";

const TopSignupBar = () => {
  const { topSignupClose, closeTopSignup } = useData();
  return (
    <div className={`${topSignupClose ? "hidden" : ""}`}>
      <section className={`bg-black flex items-center justify-evenly p-2 `}>
        <span>2</span>
        <p className='text-white font-light
        xs:text-xxs
        sm:text-sm
        '>Sign up and get 20% off to your first order. <span className='xs:text-xxs sm:text-sm font-semibold underline cursor-pointer'>Sign Up Now</span></p>
        <IoIosClose onClick={closeTopSignup} className={`text-white text-2xl cursor-pointer`} />
      </section>
    </div>
  )
}

export default TopSignupBar

