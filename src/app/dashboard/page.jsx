"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LogOut, Package, List, LayoutDashboard, User } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ItemsListPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
            </div>
        );
    }

    if (status === "unauthenticated") {
        router.push("/login");
        return null;
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />
            <main className="flex-grow py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-8 lg:p-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                            <div>
                                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                                    User Dashboard
                                </h1>
                                <p className="text-slate-500 mt-2 text-lg">
                                    Welcome back, {session?.user?.name}! Manage your account and settings here.
                                </p>
                            </div>
                            <button
                                onClick={() => signOut({ callbackUrl: "/login" })}
                                className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-all"
                            >
                                <LogOut size={20} />
                                Sign Out
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Stats Cards */}
                            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                                <div className="w-12 h-12 bg-white text-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                                    <Package size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800">12</h3>
                                <p className="text-slate-500 font-medium">Active Items</p>
                            </div>

                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                                <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                                    <List size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800">5</h3>
                                <p className="text-slate-500 font-medium">Saved Lists</p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                                <div className="w-12 h-12 bg-white text-slate-600 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                                    <LayoutDashboard size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800">3</h3>
                                <p className="text-slate-500 font-medium">Recent Reports</p>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-slate-100">
                            <div className="flex items-center gap-3 mb-8">
                                <User className="text-orange-600" size={28} />
                                <h2 className="text-2xl font-bold text-slate-900">Your Profile</h2>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-lg text-slate-300">
                                    <User size={40} />
                                </div>
                                <div>
                                    <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-1">Email Address</p>
                                    <p className="text-xl font-bold text-slate-800">{session?.user?.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ItemsListPage;
