import { Search, Gift, Zap, User } from "lucide-react";

const TopNav = () => {
  return (
    <nav className="bg-[#081621]">
      <div className=" max-w-7xl mx-auto text-white py-4 px-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="shrink-0">
          <h1 className="text-2xl font-bold text-orange-500 cursor-pointer">
            STAR TECH
          </h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex grow max-w-2xl relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-4 rounded-md bg-white text-black focus:outline-none"
          />
          <Search
            className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
            size={20}
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 cursor-pointer group">
            <Gift className="text-orange-500 group-hover:text-white transition" />
            <div>
              <p className="text-sm font-semibold">Offers</p>
              <p className="text-[10px] text-gray-400">Latest Offers</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 cursor-pointer group">
            <Zap className="text-orange-500 group-hover:text-white transition" />
            <div>
              <p className="text-sm font-semibold">Happy Hour</p>
              <p className="text-[10px] text-gray-400">Special Deals</p>
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer group">
            <User className="text-orange-500 group-hover:text-white transition" />
            <div>
              <p className="text-sm font-semibold">Account</p>
              <p className="text-[10px] text-gray-400">Register or Login</p>
            </div>
          </div>

          <button className="bg-linear-to-r from-blue-700 to-blue-500 px-4 py-2 rounded font-bold text-sm">
            PC Builder
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
