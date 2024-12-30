import BrandSection from "@/components/BrandSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TopSignupBar from "@/components/TopSignupBar";
import React from "react";
import MenuSection from "@/components/MenuSection";
import NewArrivals from "@/components/NewArrivals";

const page = () => {
  return (
    <div className="w-full">
      <TopSignupBar />
      <Navbar />
      <HeroSection />
      <BrandSection />
      <MenuSection />
      <NewArrivals />
    </div>
  );
};

export default page;
