"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ProductCard from "@/components/common/ProductCard";

const CategoryPage = () => {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        fetch("/product.json")
            .then((res) => res.json())
            .then((data) => {
                const categoryData = data.products_database.find(
                    (cat) => cat.category.toLowerCase() === slug.toLowerCase()
                );
                setProducts(categoryData ? categoryData.products : []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading products:", err);
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
            </div>
        );
    }

    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 border-l-4 border-orange-600 pl-4">
                        {categoryName}
                    </h1>
                    <p className="text-slate-500 mt-2">
                        Showing {products.length} products in {categoryName}
                    </p>
                </div>

                {/* Product Grid */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-semibold text-slate-800">No products found</h2>
                        <p className="text-slate-500 mt-2">Try checking another category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
