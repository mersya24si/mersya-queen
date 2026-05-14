import { Outlet } from "react-router-dom";
// Cek apakah ada baris seperti ini di MainLayout.jsx:
import { Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div 
      id="app-container" 
      className="bg-[#FCFAF9] min-h-screen flex font-poppins selection:bg-[#F9E8E7] selection:text-[#EF6E4D] text-[#2D3134] w-full"
    >
      {/* Sidebar - Tetap di kiri */}
      <Sidebar />

      {/* Main Content Area */}
      <div
        id="main-content"
        className="flex-1 flex flex-col min-h-screen overflow-hidden"
      >
        {/* Header */}
        <Header />

        {/* Page Content Container - Pastikan flex-1 ada di sini agar Outlet punya ruang */}
        <main className="flex-1 overflow-y-auto px-8 pb-10 custom-scrollbar">
          <div className="max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-3 duration-700">
            
            {/* INI ADALAH TEMPAT KONTEN RUTE (DASHBOARD/EMPLOYEE) MUNCUL */}
            <Outlet /> 

          </div>
          
          {/* Footer Subtle */}
          <footer className="mt-16 py-6 border-t border-gray-100/60 flex justify-between items-center text-[10px] font-bold text-[#A9A9A9] uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#EF6E4D] shadow-[0_0_8px_#EF6E4D]"></div>
              <span>Glazey Management System v1.0</span>
            </div>
            <span className="text-[#EF6E4D]/40">System Operational</span>
          </footer>
        </main>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#F9E8E7]/40 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  );
}