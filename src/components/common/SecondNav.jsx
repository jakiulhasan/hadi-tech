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
  return (
    <div className="shadow-sm border-b hidden xl:block">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center justify-start lg:justify-center gap-4 py-3 px-4 text-[12px] font-bold text-gray-800 uppercase">
          {categories.map((item) => (
            <li
              key={item}
              className="hover:text-orange-600 text-gray-800 font-bold cursor-pointer transition-colors shrink-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondNav;
