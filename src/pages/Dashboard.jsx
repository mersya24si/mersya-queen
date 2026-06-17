import React from "react";
import DashboardStats from "../components/DashboardStats";
import DashboardChart from "../components/DashboardChart";
import PharmacistList from "../components/PharmacistList";
// Komponen baru yang disarankan untuk ditambahkan
import InventoryAlerts from "../components/InventoryAlerts"; 
import RevenueChart from "../components/RevenueChart"; 

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8 bg-[#FCFAF9] min-h-screen font-poppins">
      
      {/* Header Section */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3134]">
            Dashboard Apotek
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Ringkasan aktivitas operasional dan farmasi hari ini.
          </p>
        </div>
        {/* Tombol aksi cepat (opsional) */}
        <button className="bg-[#E97451] hover:bg-[#d46543] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
          + Buat Laporan Baru
        </button>
      </div>

      {/* Stats Section */}
      <div className="mb-8">
        {/* Pastikan di dalam DashboardStats Anda juga menggunakan grid responsif 
            seperti: className="grid grid-cols-2 lg:grid-cols-4 gap-4" */}
        <DashboardStats />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* Kolom Kiri & Tengah (Lebih Lebar untuk Grafik) */}
        <div className="lg:col-span-2 flex flex-col gap-6 md:gap-8">
          
          {/* Grafik Tren Resep */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-[#2D3134]">Tren Resep Masuk</h3>
            </div>
            <DashboardChart />
          </div>

          {/* Grafik Pendapatan/Penjualan (Komponen Baru) */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-[#2D3134]">Pendapatan Minggu Ini</h3>
            </div>
            <RevenueChart />
          </div>

        </div>

        {/* Kolom Kanan (Untuk Daftar & Peringatan) */}
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* Daftar Apoteker */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
             <div className="mb-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-[#2D3134]">Apoteker Bertugas</h3>
              <span className="text-xs text-[#E97451] font-medium cursor-pointer hover:underline">Lihat Semua</span>
            </div>
            <PharmacistList />
          </div>

          {/* Peringatan Stok Obat (Komponen Baru) */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-[#2D3134]">Peringatan Stok</h3>
            </div>
            <InventoryAlerts />
          </div>

        </div>
      </div>
      
    </div>
  );
}