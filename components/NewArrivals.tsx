"use client";
import { useData } from "@/contexts/DataContexts";
import Image from "next/image";
import React from "react";

const NewArrivals = () => {
  const { data } = useData();

  return (
    <div className="w-full overflow-hidden flex flex-col items-center justify-center gap-10">
      <h1 className="text-5xl font-extrabold mt-8">New Arrivals</h1>
      <section className="w-full flex flex-col items-center justify-center mt-6 gap-8">
        {/* Scrollable container for product cards */}
        <div className="w-full overflow-x-scroll scrollbar-hide flex items-center justify-center gap-6">
          {data.map(
            (el: any) =>
              el.heading === "new-arrivals" && (
                <div
                  key={el.id}
                  className="flex flex-col w-[250px] text-black gap-3 flex-shrink-0"
                >
                  <Image src={el.img} alt={el.name} className="w-full" />
                  <h4 className="text-sm font-semibold">{el.name}</h4>
                  <section className="flex items-center gap-2">
                    <Image className="w-12" src={el.ratingStar} alt="star" />
                    <p className="text-xs font-light opacity-80">{el.rating}</p>
                  </section>
                  <section className="flex items-center gap-3">
                    <p className="text-sm font-semibold">{el.price}</p>
                    <p className="text-sm font-semibold text-slate-300 line-through">
                      {el.offer && el.strikePrice}
                    </p>
                    <p
                      className={`text-xs font-light px-1 py-0.5 rounded-md text-[#FF3333] ${
                        el.offer && "bg-[#FF33331A]"
                      }`}
                    >
                      {el.offer && el.discount}
                    </p>
                  </section>
                </div>
              )
          )}
        </div>
        {/* Button and separator */}
        <button className="cursor-pointer text-sm font-light border border-[#0000001A] rounded-3xl px-24 py-2">
          View All
        </button>
        <hr className="border-0.5 border-[#0000001A] w-[90%]" />
      </section>
    </div>
  );
};

export default NewArrivals;
