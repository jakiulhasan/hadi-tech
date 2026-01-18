"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Eye } from "lucide-react";

// Robust slugification: "Server & Storage" -> "server-and-storage"
const createSlug = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const ProductCard = ({ product }) => {
  const categorySlug = createSlug(product.category);
  const detailUrl = `/category/${categorySlug}/${product.id}`;

  return (
    <div className="group bg-white border border-slate-100 rounded-xl p-4 hover:shadow-xl transition-all duration-300 relative flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
        />

        {/* Overlay Buttons */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Link
            href={detailUrl}
            className="p-2 bg-white rounded-full text-slate-700 hover:bg-orange-600 hover:text-white shadow-md transition-colors"
          >
            <Eye size={20} />
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="grow">
        <Link href={detailUrl}>
          <h3 className="font-semibold text-slate-800 text-sm mb-1 group-hover:text-orange-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < Math.floor(product.rating)
                  ? "fill-orange-400 text-orange-400"
                  : "text-slate-200"
              }
            />
          ))}
          <span className="text-xs text-slate-400">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="text-orange-600 font-bold text-lg border-t pt-3">
          ৳{product.price.toLocaleString()}
        </div>
      </div>

      {/* Buy Now Button */}
      <Link
        href={detailUrl}
        className="mt-4 w-full py-2 bg-slate-50 text-slate-700 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-orange-600 hover:text-white transition-all border border-slate-200 hover:border-orange-600"
      >
        <ShoppingCart size={18} />
        Buy Now
      </Link>
    </div>
  );
};

export default ProductCard;
