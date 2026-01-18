"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  Star,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RefreshCw,
  MessageSquare,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ProductDetailsPage = () => {
  const { slug, id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        let foundProduct = null;
        data.products_database.forEach((cat) => {
          const prod = cat.products.find((p) => p.id === id);
          if (prod) foundProduct = { ...prod, category: cat.category };
        });
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-slate-800">
              Product not found
            </h2>
            <p className="text-slate-500 mt-2">
              The product you are looking for does not exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Product Image */}
              <div className="relative h-[400px] lg:h-[600px] bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Product Details */}
              <div className="p-8 lg:p-12 flex flex-col">
                <div className="mb-6">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                    {product.name}
                  </h1>
                </div>

                {/* Rating & Price */}
                <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={
                            i < Math.floor(product.rating)
                              ? "fill-orange-400 text-orange-400"
                              : "text-slate-200"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-600">
                      {product.rating} / 5.0
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-orange-600">
                    ৳{product.price.toLocaleString()}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    Description
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Seller Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <ShieldCheck className="text-orange-500" size={24} />
                    <div>
                      <p className="text-[10px] uppercase text-slate-400 font-bold">
                        Warranty
                      </p>
                      <p className="text-sm font-bold text-slate-700">
                        {product.seller_details.warranty}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <Truck className="text-orange-500" size={24} />
                    <div>
                      <p className="text-[10px] uppercase text-slate-400 font-bold">
                        Location
                      </p>
                      <p className="text-sm font-bold text-slate-700">
                        {product.seller_details.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <RefreshCw className="text-orange-500" size={24} />
                    <div>
                      <p className="text-[10px] uppercase text-slate-400 font-bold">
                        Seller
                      </p>
                      <p className="text-sm font-bold text-slate-700">
                        {product.seller_details.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <button className="flex-grow py-4 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-orange-200">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                  <button className="flex-grow py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-3">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-orange-600" size={28} />
              <h2 className="text-2xl font-bold text-slate-900">
                Customer Reviews
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < review.stars
                            ? "fill-orange-400 text-orange-400"
                            : "text-slate-200"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 italic grow">{review.comment}</p>
                  <div className="mt-6 pt-4 border-t border-slate-50">
                    <p className="font-bold text-slate-800">{review.user}</p>
                    <p className="text-xs text-slate-400">Verified Buyer</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailsPage;
