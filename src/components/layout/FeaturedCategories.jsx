import React from "react";

import {
  Satellite,
  Heater,
  Drone,
  Tv,
  Smartphone,
  Gamepad2,
  Watch,
  Headphones,
  Speaker,
  Camera,
  Cpu,
  Zap,
  Tablet,
  Scissors,
  MousePointer,
} from "lucide-react";

const FeaturedCategory = () => {
  const categories = [
    { name: "Starlink", icon: <Satellite size={40} /> },
    { name: "Water Heater Geyser", icon: <Heater size={40} /> },
    { name: "Drone", icon: <Drone size={40} /> },
    { name: "Gimbal", icon: <Zap size={40} /> },
    { name: "Table PC", icon: <Tablet size={40} /> },
    { name: "TV", icon: <Tv size={40} /> },
    { name: "Mobile Phone", icon: <Smartphone size={40} /> },
    { name: "Mobile Accessories", icon: <MousePointer size={40} /> },
    { name: "Portable SSD", icon: <Cpu size={40} /> },
    { name: "WiFi Camera", icon: <Camera size={40} /> },
    { name: "Trimmer", icon: <Scissors size={40} /> },
    { name: "Smart Watch", icon: <Watch size={40} /> },
    { name: "Action Camera", icon: <Camera size={40} /> },
    { name: "Earbuds", icon: <Headphones size={40} /> },
    { name: "Bluetooth Speakers", icon: <Speaker size={40} /> },
    { name: "Gaming Console", icon: <Gamepad2 size={40} /> },
  ];

  return (
    <section className=" py-8 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Featured Category
        </h2>
        <p className="text-gray-600">
          Get Your Desired Product from Featured Category!
        </p>
      </div>

      {/* 3. The Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group bg-white p-6 rounded-xl border border-transparent hover:border-orange-500 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
          >
            {/* Icon Container */}
            <div className="text-slate-700 group-hover:text-orange-600 transition-colors mb-4">
              {item.icon}
            </div>

            {/* Category Name */}
            <span className="text-sm font-semibold text-gray-800 group-hover:text-orange-600">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategory;
