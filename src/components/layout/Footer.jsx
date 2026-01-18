"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Next.js Image Component
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Cpu,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: "Laptops", href: "/category/laptop" },
      { name: "Desktops", href: "/category/desktop" },
      { name: "Components", href: "/category/component" },
      { name: "Monitors", href: "/category/monitor" },
      { name: "Accessories", href: "/category/accessories" },
    ],
    support: [
      { name: "Service Centers", href: "/support" },
      { name: "Warranty Policy", href: "/warranty" },
      { name: "Shipping & Delivery", href: "/shipping" },
      { name: "Order Tracking", href: "/track" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Blogs", href: "/blogs" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-orange-600 rounded-lg group-hover:rotate-12 transition-transform">
                <Cpu className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                HADI<span className="text-orange-600">VIBE</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Leading technology shop in Bangladesh. We provide the best quality
              gadgets, components, and expert support for your digital
              lifestyle.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Categories */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">
                {title}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-orange-500 flex items-center gap-2 group transition-colors"
                    >
                      <ArrowRight
                        size={14}
                        className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-slate-900 mb-8">
          <div className="flex items-center gap-4 text-center md:text-left justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-orange-500">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold">
                Call Us 24/7
              </p>
              <p className="text-white font-semibold">+880 1234-567890</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-center md:text-left justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-orange-500">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold">
                Email Support
              </p>
              <p className="text-white font-semibold">hello@techvibe.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-center md:text-left justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-orange-500">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold">
                Our Store
              </p>
              <p className="text-white font-semibold">
                Multiplan Center, Dhaka
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Next.js Image */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© {currentYear} TechVibe. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <div className="relative w-16 h-8 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="Paypal"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-16 h-8 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-16 h-8 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
