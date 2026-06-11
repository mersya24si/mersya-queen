// src/components/EmployeeActions.jsx
import React from "react";
import { Edit, Trash2, Eye } from "lucide-react";

export default function EmployeeActions({ employee }) {
  return (
    <div className="flex items-center justify-end gap-2">
      {/* Tombol View */}
      <button 
        title="View Details"
        className="p-2 hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded-lg transition-colors outline-none"
      >
        <Eye className="h-4 w-4" />
      </button>

      {/* Tombol Edit */}
      <button 
        title="Edit Profile"
        className="p-2 hover:bg-gray-100 text-gray-500 hover:text-[#EF6E4D] rounded-lg transition-colors outline-none"
      >
        <Edit className="h-4 w-4" />
      </button>

      {/* Tombol Delete */}
      <button 
        title="Delete Staff"
        className="p-2 hover:bg-red-50 text-gray-500 hover:text-red-600 rounded-lg transition-colors outline-none"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}