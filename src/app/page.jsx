import Notice from "@/components/common/Notice";
import Banner from "@/components/layout/Banner";
import FeaturedCategories from "@/components/layout/FeaturedCategories";
import FeaturedProducts from "@/components/layout/FeaturedProducts";
import Navbar from "@/components/layout/Navbar";
import ServiceSection from "@/components/layout/ServiceSection";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto bg-gray-200">
      <Navbar></Navbar>
      <Banner></Banner>
      <Notice></Notice>
      <ServiceSection></ServiceSection>
      <FeaturedCategories></FeaturedCategories>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
};

export default page;
