"use client";
import React, { useState } from "react";
import { Send, CheckCircle2, Zap } from "lucide-react";

const TechVibeNewsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 2000);
  };

  return (
    <section className="py-16 mt-8 bg-slate-950 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-slate-900/50 border border-slate-800 backdrop-blur-xl rounded-3xl p-8 md:p-16 text-center shadow-2xl">
          {/* Icon/Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-600/10 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-600/20">
            <Zap size={16} className="fill-orange-500" />
            <span>Join the Tech Vibe</span>
          </div>

          {/* Text Content */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Stay Ahead of the <span className="text-orange-600">Curve</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Get exclusive early access to new tech gadgets, deep-dive reviews,
            and weekly tech trends delivered straight to your inbox.
          </p>

          {/* Form */}
          {status === "success" ? (
            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
              <CheckCircle2 size={60} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white">
                You&apos;re in the loop!
              </h3>
              <p className="text-slate-400">
                Thanks for subscribing to our newsletter.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative group">
                <input
                  type="email"
                  required
                  placeholder="Enter your professional email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 text-white pl-5 pr-36 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="absolute right-2 top-2 bottom-2 bg-orange-600 hover:bg-orange-500 text-white px-6 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Join Now</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-4 italic">
                No spam, we promise. Only high-quality tech updates.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechVibeNewsletter;
