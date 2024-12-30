"use client"

import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { useData } from "@/contexts/DataContexts";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const {menuOpen,setMenuOpen} = useData();
  return (
    <div className="w-full flex items-center justify-center mt-4">
      {/* wrapper */}
      <div className="w-[90%] flex items-center justify-between">
        <IoMenu onClick={() => setMenuOpen(!menuOpen)} className="text-2xl cursor-pointer xs:block md:hidden" />
        <img className="w-28" src="/images/shopco-logo.png" alt="logo" />
        <ul className="items-center gap-5 text-sm font-extralight
        xs:hidden
        md:flex
        ">
          <li className="flex items-center cursor-pointer">
            Shop
            <RiArrowDropDownLine className="text-2xl" />
          </li>
          <li className="cursor-pointer">On Sale</li>
          <li className="cursor-pointer">New Arrivals</li>
          <li className="cursor-pointer">Brands</li>
        </ul>
        <div className="w-[30%] flex items-center relative
        xs:hidden
        md:flex
        ">
          {/* Icon */}
          {!isFocused && (
            <IoSearchOutline className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          )}
          <input
            type="text"
            className="w-full pl-12 bg-[#F0F0F0] rounded-2xl p-2 focus:outline-none"
            placeholder="Search..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <div className="flex text-2xl gap-5">
          <IoSearchSharp className="cursor-pointer xs:block md:hidden" />
          <LuShoppingCart className="cursor-pointer" />
          <RiAccountCircleLine className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
