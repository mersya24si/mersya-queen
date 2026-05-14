import { FaHome, FaUserTie, FaBoxOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-2xl px-5 py-4 transition-all duration-300 group
    ${isActive ?
      "text-[#EF6E4D] bg-[#F9E8E7] font-medium" : 
      "text-[#666666] hover:text-[#EF6E4D] hover:bg-[#F9E8E7]/50 font-normal"
    }`;

  return (
    <div id="sidebar" className="flex flex-col min-h-screen w-72 bg-white p-6 border-r border-gray-50 font-poppins">
      
      {/* Logo Section */}
      <div id="sidebar-logo" className="flex flex-col mb-12 px-4 group cursor-pointer">
        <span className="text-[32px] text-black font-semibold leading-none tracking-tight">
          Apotek<span className="text-[#EF6E4D]">.</span>
        </span>
      </div>

      {/* Menu Section */}
      <div id="sidebar-menu" className="flex-1">
        <ul id="menu-list" className="space-y-2">
          <li>
            <NavLink to="/" className={menuClass}>
              <FaHome className="mr-4 text-lg" /> 
              <span className="text-[15px]">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/employee" className={menuClass}>
              <FaUserTie className="mr-4 text-lg" /> 
              <span className="text-[15px]">Employee</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className={menuClass}>
              <FaBoxOpen className="mr-4 text-lg" /> 
              <span className="text-[15px]">Product</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Upgrade Card Section */}
      <div className="bg-gradient-to-br from-[#EF6E4D] to-[#F9A888] rounded-3xl p-6 text-white relative overflow-hidden mt-auto">
        <div className="relative z-10">
          <h4 className="font-semibold text-lg mb-2 leading-tight">Upgrade your<br/>Account to Pro</h4>
          <button className="bg-white text-[#EF6E4D] px-4 py-2 rounded-xl text-sm font-bold mt-2 hover:bg-gray-100 transition-colors">
            Upgrade
          </button>
        </div>
        {/* Dekorasi titik-titik (grid) */}
        <div className="absolute top-2 right-2 opacity-30">
          <div className="grid grid-cols-4 gap-1">
            {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>)}
          </div>
        </div>
      </div>

    </div>
  );
}