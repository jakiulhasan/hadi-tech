"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/common/ProductCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Search as SearchIcon, Filter, Layers } from "lucide-react";

const SearchContent = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("/product.json")
            .then((res) => res.json())
            .then((data) => {
                const allProducts = [];
                data.products_database.forEach((cat) => {
                    cat.products.forEach((p) => {
                        allProducts.push({ ...p, category: cat.category });
                    });
                });

                const filtered = allProducts.filter((product) =>
                    product.name.toLowerCase().includes(query.toLowerCase())
                );
                setResults(filtered);
            })
            .catch((err) => console.error("Error searching products:", err))
            .finally(() => setLoading(false));
    }, [query]);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />
            <main className="grow py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Search Header */}
                    <div className="mb-10 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center">
                                    <SearchIcon size={28} />
                                </div>
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                                        {query ? `Search Results for "${query}"` : "All Products"}
                                    </h1>
                                    <p className="text-slate-500 mt-1">
                                        {results.length} items found based on your request
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm border border-slate-200 hover:bg-slate-100 transition-all">
                                    <Filter size={18} />
                                    Filter
                                </button>
                                <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm border border-slate-200 hover:bg-slate-100 transition-all">
                                    <Layers size={18} />
                                    Sort By
                                </button>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-24 gap-4">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
                            <p className="text-slate-500 font-medium">Finding products...</p>
                        </div>
                    ) : results.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {results.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-3xl border border-slate-100 p-20 text-center shadow-sm">
                            <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-6">
                                <SearchIcon size={40} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">No results found</h2>
                            <p className="text-slate-500 mt-2 max-w-md mx-auto">
                                We couldn&apos;t find any products matching your search query. Please try different keywords or browse our categories.
                            </p>
                            <button
                                onClick={() => window.history.back()}
                                className="mt-8 px-8 py-3 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-100"
                            >
                                Go Back
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

const SearchPage = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
            </div>
        }>
            <SearchContent />
        </Suspense>
    );
};

export default SearchPage;
