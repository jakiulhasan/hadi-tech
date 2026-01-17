import React from "react";
import Marquee from "react-fast-marquee";

const Notice = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 ">
      <Marquee className="bg-white rounded-2xl py-2">
        Sunday, 18 January, All our branches are open except IDB Branch.
        Additionally, our online activities are open and operational.
      </Marquee>
    </div>
  );
};

export default Notice;
