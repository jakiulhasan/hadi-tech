import Notice from "@/components/common/Notice";
import Banner from "@/components/layout/Banner";
import Navbar from "@/components/layout/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto bg-gray-200">
      <Navbar></Navbar>
      <Banner></Banner>
      <Notice></Notice>
    </div>
  );
};

export default page;
