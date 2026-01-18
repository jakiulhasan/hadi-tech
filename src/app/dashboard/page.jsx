"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { LogOut, Package, List, LayoutDashboard, User, Plus, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ItemsListPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: "",
        category: "Desktop",
        price: "",
        image: "",
        short_description: "",
        description: ""
    });

    const categories = ["Desktop", "Laptop", "Component", "Monitor", "Power", "Phone", "Tablet", "Office Equipment", "Camera", "Security", "Networking", "Software"];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Product added successfully",
                    background: "#ffffff",
                    confirmButtonColor: "#ea580c",
                    customClass: {
                        popup: "rounded-3xl border border-slate-100 shadow-xl",
                        confirmButton: "px-6 py-3 rounded-2xl font-bold"
                    }
                });
                setIsModalOpen(false);
                setFormData({
                    name: "",
                    category: "Desktop",
                    price: "",
                    image: "",
                    short_description: "",
                    description: ""
                });
            } else {
                const data = await res.json();
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: data.error || "Something went wrong",
                    confirmButtonColor: "#ea580c"
                });
            }
        } catch (error) {
            console.error("Error adding product:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to add product",
                confirmButtonColor: "#ea580c"
            });
        } finally {
            setIsLoading(false);
        }
    };

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

                            {/* Add Product Trigger Card */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-orange-600 p-8 rounded-3xl border border-orange-700 text-white hover:bg-orange-700 transition-all text-left flex flex-col justify-between group"
                            >
                                <div className="w-12 h-12 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                    <Plus size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Add Product</h3>
                                    <p className="text-orange-100 font-medium">Add new item to inventory</p>
                                </div>
                            </button>
                        </div>

                        {/* Modal */}
                        {isModalOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                                    <div className="p-8 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">Add New Product</h2>
                                            <p className="text-slate-500">Enter product details to add to inventory</p>
                                        </div>
                                        <button
                                            onClick={() => setIsModalOpen(false)}
                                            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                        >
                                            <X size={24} className="text-slate-400" />
                                        </button>
                                    </div>

                                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Product Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g. iPhone 15 Pro"
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Category</label>
                                                <select
                                                    name="category"
                                                    value={formData.category}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all appearance-none bg-white"
                                                >
                                                    {categories.map(cat => (
                                                        <option key={cat} value={cat}>{cat}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Price (BDT)</label>
                                                <input
                                                    required
                                                    type="number"
                                                    name="price"
                                                    value={formData.price}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g. 150000"
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Image URL</label>
                                                <input
                                                    required
                                                    type="url"
                                                    name="image"
                                                    value={formData.image}
                                                    onChange={handleInputChange}
                                                    placeholder="https://images.unsplash.com/..."
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Short Description</label>
                                            <input
                                                required
                                                type="text"
                                                name="short_description"
                                                value={formData.short_description}
                                                onChange={handleInputChange}
                                                placeholder="Brief summary of the product"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Description</label>
                                            <textarea
                                                required
                                                name="description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                rows="4"
                                                placeholder="Detailed product specifications and features..."
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                                            ></textarea>
                                        </div>

                                        <div className="pt-4 flex gap-4">
                                            <button
                                                type="button"
                                                onClick={() => setIsModalOpen(false)}
                                                className="flex-1 px-6 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                disabled={isLoading}
                                                type="submit"
                                                className="flex-[2] px-6 py-4 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                        Adding Product...
                                                    </>
                                                ) : "Add Product"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

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
