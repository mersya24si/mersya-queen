import React from 'react';
import { FaSearch, FaCommentDots, FaBullhorn, FaCog, FaChevronDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-100">
      
      {/* 1. Search Bar (Melebar dan gaya minimalis) */}
      <div className="relative w-1/3">
        <FaSearch className="absolute left-3 top-3 text-[#5A5A5A] text-sm" />
        <input 
          type="text" 
          placeholder="Search here..." 
          className="w-full pl-10 pr-4 py-2.5 bg-[#F6F6F6] rounded-xl text-sm outline-none border-none placeholder:text-[#A9A9A9]"
        />
      </div>

      {/* 2. Right Side Actions */}
      <div className="flex items-center gap-6">
        
        {/* Language Selector */}
        <div className="flex items-center gap-2 cursor-pointer text-sm font-medium">
          <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-5" />
          <span>English (US)</span>
          <FaChevronDown className="text-[10px] text-gray-400" />
        </div>

        {/* Action Icons (Chat, Megaphone, Settings) */}
        <div className="flex items-center gap-5 text-[#2D3134]">
          <div className="relative cursor-pointer">
            <FaCommentDots size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#EF6E4D] rounded-full"></span>
          </div>
          <div className="relative cursor-pointer">
            <FaBullhorn size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#EF6E4D] rounded-full"></span>
          </div>
          <FaCog size={20} className="cursor-pointer" />
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
          <div className="text-right">
            <p className="text-sm font-bold text-[#2D3134]">Mersya Grande</p>
            <p className="text-[10px] text-[#A9A9A9] uppercase tracking-wider">Admin</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}