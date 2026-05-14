import React, { useState } from 'react';
import { FaSearch, FaBoxOpen, FaPlus, FaEllipsisH, FaLayerGroup } from "react-icons/fa";
import productsData from "../data/ProductsData.json";
import { Link } from 'react-router-dom';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productsData.filter(prod => 
    prod.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prod.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryStyle = (cat) => {
    switch (cat) {
      case "Obat Bebas": return "bg-green-50 text-green-600";
      case "Vitamin": return "bg-yellow-50 text-yellow-600";
      case "Alat Kesehatan": return "bg-blue-50 text-blue-600";
      case "Antibiotik": return "bg-red-50 text-red-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-poppins">
      
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Product Inventory</h2>
        <button className="bg-[#EF6E4D] text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-[#d65d3e] transition-all">
          <FaPlus /> Add Product
        </button>
      </div>

      {/* Stats Cards (Mengikuti gaya Employee) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Products", count: productsData.length, icon: <FaBoxOpen /> },
          { title: "Low Stock", count: "12", icon: <FaLayerGroup /> },
          { title: "Expired Soon", count: "5", icon: <FaEllipsisH /> },
          { title: "Categories", count: "4", icon: <FaEllipsisH /> },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">{item.title}</p>
              <h3 className="text-2xl font-bold mt-1">{item.count}</h3>
            </div>
            <div className="text-[#EF6E4D] text-xl bg-orange-50 p-3 rounded-xl">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Tabel Data */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h3 className="font-bold text-lg">Inventory List</h3>
          <div className="relative w-full md:w-64">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search product..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm outline-none border focus:border-[#EF6E4D]"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 text-xs uppercase border-b border-gray-100">
                <th className="pb-4 font-semibold">Code</th>
                <th className="pb-4 font-semibold">Product Name</th>
                <th className="pb-4 font-semibold">Brand</th>
                <th className="pb-4 font-semibold">Category</th>
                <th className="pb-4 font-semibold">Stock</th>
                <th className="pb-4 font-semibold text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((prod) => (
                <tr key={prod.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                  <td className="py-4 text-sm font-bold text-gray-700">{prod.code}</td>
                  <td className="px-6 py-4">
    <Link to={`/products/${prod.id}`} className="text-emerald-400 hover:text-emerald-500">
        {prod.title}
    </Link>
</td>
                  <td className="py-4 text-sm text-gray-500">{prod.brand}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${getCategoryStyle(prod.category)}`}>
                      {prod.category}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-gray-700">{prod.stock} units</td>
                  <td className="py-4 text-sm font-bold text-right text-[#EF6E4D]">{prod.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}