import React from 'react';
import { FaSearch, FaCommentDots, FaBullhorn, FaCog, FaChevronDown, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hapus semua data login
    localStorage.clear(); 
    // Balik ke halaman login
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-100">
      <div className="relative w-1/3">
        <FaSearch className="absolute left-3 top-3 text-[#5A5A5A] text-sm" />
        <input type="text" placeholder="Search here..." className="w-full pl-10 pr-4 py-2.5 bg-[#F6F6F6] rounded-xl text-sm outline-none border-none" />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-5 text-[#2D3134]">
          <FaCommentDots size={20} className="cursor-pointer" />
          <FaBullhorn size={20} className="cursor-pointer" />
          <FaCog size={20} className="cursor-pointer" />
        </div>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
          <div className="text-right">
            <p className="text-sm font-bold text-[#2D3134]">Mersya Grande</p>
            <p className="text-[10px] text-[#A9A9A9] uppercase tracking-wider">Admin</p>
          </div>
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          
          {/* TOMBOL LOGOUT AKTIF */}
          <button 
            onClick={handleLogout}
            className="ml-2 p-2.5 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            <FaSignOutAlt size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}