import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#F2F0F1] flex items-center justify-center mt-4">
      {/* wrapper */}
      <div className="flex items-center justify-center
      xs:flex-col xs:w-[92%] 
      sm:flex-row sm:w-[90%] sm:items-end
      md:items-center
      ">
        {/* Left */}
        <section className="
        xs:w-full
        sm:w-[45%]
        ">
          <h1 className="text-7xl font-sans font-xxbold
          xs:text-4xl xs:mt-5
          sm:text-4xl
          md:text-4xl 
          xl:text-7xl
          ">FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
          <p className="text-sm font-light text-black opacity-60 mt-3">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white text-sm py-2 px-6 rounded-3xl mt-4
          xs:w-full
          sm:w-auto
          ">Shop Now</button>
          <div className="w-full flex items-center justify-center
          xs:mt-4
          md:mt-8
          ">
            <ul className="w-full flex items-center 
            xs:flex-wrap xs:justify-center xs:gap-4
            sm:flex-nowrap sm:justify-between sm:gap-3
            ">
              <li>
                <h4 className="xs:text-base md:text-2xl font-medium ">200+</h4>
                <p className="xs:text-xxs md:text-sm font-light opacity-60">International Brands</p>
              </li>
              <hr className="w-12 border-black opacity-10 rotate-90"/>
              <li>
                <h4 className="xs:text-base md:text-2xl font-medium">2,000+</h4>
                <p className="xs:text-xxs md:text-sm font-light opacity-60">High-Quality Products</p>
              </li>
              <hr className="w-12 border-black opacity-10 rotate-90"/>
              <li>
                <h4 className="xs:text-base md:text-2xl font-medium">30,000+</h4>
                <p className="xs:text-xxs md:text-sm font-light opacity-60">Happy Customers</p>
              </li>
            </ul>
          </div>
        </section>
        {/* right */}
        <section>
          <Image src="/images/heroImg.png" alt="heroImg" />
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
