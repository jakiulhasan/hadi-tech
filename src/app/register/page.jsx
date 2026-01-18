"use client";
import React from "react";
import Link from "next/link";
import { UserPlus, LogIn, Mail, Lock, User } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const RegisterPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center py-12 px-4 shadow-sm">
                <div className="max-w-md w-full">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-8">
                        <div className="text-center mb-10">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <UserPlus size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">Create Account</h2>
                            <p className="text-slate-500 mt-2">Join Hadi Tech today</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                                    Full Name
                                </label>
                                <div className="flex items-center">
                                    <div className="absolute left-4 text-slate-400">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-700 font-medium"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                                    Email Address
                                </label>
                                <div className="flex items-center">
                                    <div className="absolute left-4 text-slate-400">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-700 font-medium"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                                    Password
                                </label>
                                <div className="flex items-center">
                                    <div className="absolute left-4 text-slate-400">
                                        <Lock size={18} />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-700 font-medium"
                                        placeholder="Create a password"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                            >
                                Register Now
                            </button>
                        </form>

                        <div className="mt-8 text-center text-sm text-slate-500">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1"
                            >
                                Sign In <LogIn size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RegisterPage;
