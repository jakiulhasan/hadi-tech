import Banner from "@/components/layout/Banner";
import Navbar from "@/components/layout/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default page;
