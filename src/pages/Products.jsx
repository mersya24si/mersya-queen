import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import productsData from "../data/ProductsData.json";

import ProductStats from "../components/ProductStats";
import ProductSearch from "../components/ProductSearch";
import ProductTable from "../components/ProductTable";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productsData.filter(
    (prod) =>
      prod.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryStyle = (cat) => {
    switch (cat) {
      case "Obat Bebas":
        return "bg-green-50 text-green-600";
      case "Vitamin":
        return "bg-yellow-50 text-yellow-600";
      case "Alat Kesehatan":
        return "bg-blue-50 text-blue-600";
      case "Antibiotik":
        return "bg-red-50 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-poppins">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Product Inventory</h2>

        <button className="bg-[#EF6E4D] text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-[#d65d3e] transition-all">
          <FaPlus />
          Add Product
        </button>
      </div>

      <ProductStats total={productsData.length} />

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h3 className="font-bold text-lg">Inventory List</h3>

          <ProductSearch
            setSearchTerm={setSearchTerm}
          />
        </div>

        <ProductTable
          products={filteredProducts}
          getCategoryStyle={getCategoryStyle}
        />
      </div>
    </div>
  );
}