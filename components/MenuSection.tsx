"use client"
import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { IoIosClose } from "react-icons/io";
import { useData } from '@/contexts/DataContexts';

const MenuSection = () => {
  const {menuOpen,setMenuOpen} = useData()
  return (
    <div className={`bg-slate-200 xs:w-[50%] sm:w-[25%] h-screen absolute top-0 ${menuOpen ? 'block' : 'hidden'}`}>
       <ul className="flex items-center justify-center flex-col gap-5 text-sm font-extralight relative">
          <li className="flex items-center cursor-pointer mt-16">
            Shop
            <RiArrowDropDownLine className="text-2xl" />
          </li>
          <hr  className='border-slate-300 border-0.5 w-full'/>
          <li className="cursor-pointer">On Sale</li>
          <hr  className='border-slate-300 border-0.5 w-full'/>
          <li className="cursor-pointer">New Arrivals</li>
          <hr  className='border-slate-300 border-0.5 w-full'/>
          <li className="cursor-pointer">Brands</li>
          <IoIosClose onClick={() => setMenuOpen(!menuOpen)} className="absolute top-0 right-0 text-black text-2xl mt-4 mr-4" />
        </ul>
    </div>
  )
}

export default MenuSection
