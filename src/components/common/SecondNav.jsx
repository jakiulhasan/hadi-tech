"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  "Desktop",
  "Laptop",
  "Component",
  "Monitor",
  "Power",
  "Phone",
  "Tablet",
  "Office Equipment",
  "Camera",
  "Security",
  "Networking",
  "Software",
  "Server & Storage",
  "Accessories",
  "Gadget",
];

const SecondNav = () => {
  const pathname = usePathname();

  return (
    <div className="shadow-sm border-b bg-white hidden xl:block">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center justify-start lg:justify-center gap-4 py-3 px-4 text-[12px] font-bold uppercase">
          {categories.map((item) => {
            const slug = item.toLowerCase();
            const isActive = pathname === `/category/${slug}`;

            return (
              <li key={item} className="shrink-0">
                <Link
                  href={`/category/${slug}`}
                  className={`transition-colors font-bold ${isActive
                      ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                      : "text-gray-800 hover:text-orange-600"
                    }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SecondNav;
