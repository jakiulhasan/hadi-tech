"use client";
import { Search, Gift, Zap, User, LogOut } from "lucide-react";
import HadiTechLogo from "./HadiTechLogo";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";

const TopNav = () => {
  const { data: session, status } = useSession();
  const [isOffersOpen, setIsOffersOpen] = useState(false);
  const [isHappyHourOpen, setIsHappyHourOpen] = useState(false);
  return (
    <nav className="bg-[#081621]">
      <div className=" max-w-7xl mx-auto text-white py-4 px-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="shrink-0">
          <HadiTechLogo />
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
          <div
            onClick={() => setIsOffersOpen(true)}
            className="hidden lg:flex items-center gap-2 cursor-pointer group"
          >
            <Gift className="text-orange-500 group-hover:text-white transition" />
            <div>
              <p className="text-sm font-semibold">Offers</p>
              <p className="text-[10px] text-gray-400">Latest Offers</p>
            </div>
          </div>

          <div
            onClick={() => setIsHappyHourOpen(true)}
            className="hidden lg:flex items-center gap-2 cursor-pointer group"
          >
            <Zap className="text-orange-500 group-hover:text-white transition animate-pulse" />
            <div>
              <p className="text-sm font-semibold">Happy Hour</p>
              <p className="text-[10px] text-gray-400">Special Deals</p>
            </div>
          </div>

          {status === "authenticated" ? (
            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer py-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs uppercase shadow-inner">
                  {session.user.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold truncate max-w-[80px]">
                    {session.user.name}
                  </p>
                  <p className="text-[10px] text-gray-400">Account</p>
                </div>
              </div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-slate-100 py-2 overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-50 mb-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Signed in as</p>
                    <p className="text-sm font-bold text-slate-800 truncate">{session.user.email}</p>
                  </div>

                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium text-sm"
                  >
                    <User size={18} />
                    My Dashboard
                  </Link>

                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors font-bold text-sm border-t border-slate-50 mt-1"
                  >
                    <LogOut size={18} />
                    Log out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/login" className="flex items-center gap-2 cursor-pointer group">
              <User className="text-orange-500 group-hover:text-white transition" />
              <div>
                <p className="text-sm font-semibold">Account</p>
                <p className="text-[10px] text-gray-400">Register or Login</p>
              </div>
            </Link>
          )}

          <button className="bg-linear-to-r from-blue-700 to-blue-500 px-4 py-2 rounded font-bold text-sm shrink-0">
            PC Builder
          </button>
        </div>
      </div>
      {/* Modals */}
      <Modal
        isOpen={isOffersOpen}
        onClose={() => setIsOffersOpen(false)}
        title="Latest Offers"
      >
        <div className="space-y-4">
          <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl">
            <h4 className="font-bold text-orange-600 mb-1">Mega Winter Sale!</h4>
            <p className="text-sm text-slate-600">Get up to 40% off on all components and peripherals.</p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl">
            <h4 className="font-bold text-blue-600 mb-1">Student Discount</h4>
            <p className="text-sm text-slate-600">Show your student ID and get an extra 5% discount.</p>
          </div>
          <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
            View All Offers
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={isHappyHourOpen}
        onClose={() => setIsHappyHourOpen(false)}
        title="Happy Hour Deals"
      >
        <div className="text-center space-y-6">
          <div className="relative w-24 h-24 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
            <Zap size={48} />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-slate-900">Flash Sale is ON!</h4>
            <p className="text-slate-500 mt-1">Starting from 2:00 PM - 5:00 PM today.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-xs font-bold text-slate-400 uppercase mb-2">Your Secret Coupon</p>
            <p className="text-3xl font-black text-slate-900 tracking-widest uppercase">HAPPY50</p>
          </div>
          <p className="text-sm text-slate-400 italic font-medium">* Valid for first 50 customers only.</p>
        </div>
      </Modal>
    </nav>
  );
};

export default TopNav;
