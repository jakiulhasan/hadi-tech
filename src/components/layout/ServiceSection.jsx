import React from "react";
import { Monitor, MessageSquareMore, Home, Settings } from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      title: "Laptop Finder",
      desc: "Find Your Laptop Easily",
      icon: <Monitor size={20} />,
    },
    {
      title: "Raise a Complain",
      desc: "Share your experience",
      icon: <MessageSquareMore size={20} />,
    },
    {
      title: "Home Service",
      desc: "Get expert help.",
      icon: <Home size={20} />,
    },
    {
      title: "Servicing Center",
      desc: "Repair Your Device",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer"
          >
            {/* 2. The Icon Circle */}
            <div className="flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full mr-4 shrink-0">
              {item.icon}
            </div>

            {/* 3. The Text Content */}
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg leading-tight">
                {item.title}
              </span>
              <span className="text-gray-500 text-sm mt-0.5">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
