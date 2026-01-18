"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/common/ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const featured = data.products_database.map((cat) => ({
          ...cat.products[0],
          category: cat.category,
        }));
        setProducts(featured);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Featured Products
          </h2>
          <p className="text-slate-500 mt-2">
            Check & Get Your Desired Product!
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
