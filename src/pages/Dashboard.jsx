import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaUserMd, FaUserClock, FaFileMedical, FaExclamationTriangle, FaUser } from "react-icons/fa";

// Data untuk Grafik
const data = [
  { name: 'Mon', val: 40 }, { name: 'Tue', val: 55 }, 
  { name: 'Wed', val: 45 }, { name: 'Thu', val: 65 }
];

export default function Dashboard() {
  return (
    <div className="p-8 bg-[#FCFAF9] min-h-screen font-poppins">
      <h2 className="text-2xl font-bold mb-6 text-[#2D3134]">Dashboard Apotek</h2>

      {/* 1. Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { title: "Apoteker Aktif", val: "12", color: "text-green-500", bg: "bg-green-50", icon: <FaUserMd /> },
          { title: "Sedang Shift", val: "4", color: "text-blue-500", bg: "bg-blue-50", icon: <FaUserClock /> },
          { title: "Resep Tertunda", val: "28", color: "text-orange-500", bg: "bg-orange-50", icon: <FaFileMedical /> },
          { title: "Lisensi Expired", val: "2", color: "text-red-500", bg: "bg-red-50", icon: <FaExclamationTriangle /> }
        ].map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center gap-4">
            <div className={`text-xl p-3 rounded-2xl ${item.bg} ${item.color}`}>{item.icon}</div>
            <div>
              <p className="text-[#A9A9A9] text-[10px] uppercase font-bold tracking-widest">{item.title}</p>
              <h3 className="text-xl font-bold text-[#2D3134]">{item.val}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Grid Utama: Grafik & Tabel */}
      <div className="grid grid-cols-3 gap-8">
        
        {/* Kiri: Grafik Statistik Resep */}
        <div className="col-span-2 bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
          <h3 className="font-bold text-[#2D3134] mb-6">Tren Resep Masuk</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#A9A9A9', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#A9A9A9', fontSize: 12}} />
              <Tooltip />
              <Line type="monotone" dataKey="val" stroke="#EF6E4D" strokeWidth={3} dot={{r: 5, fill: '#EF6E4D'}} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Kanan: Daftar Apoteker Bertugas */}
        <div className="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
          <h3 className="font-bold text-[#2D3134] mb-6">Apoteker Bertugas</h3>
          <div className="space-y-5">
            {[
              { nama: "Budi, Apt", posisi: "Kepala Farmasi" },
              { nama: "Siti, Apt", posisi: "Farmasi Klinis" },
              { nama: "Andi, Apt", posisi: "Asisten Apoteker" }
            ].map((apo, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#A9A9A9]">
                  <FaUser />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#2D3134]">{apo.nama}</p>
                  <p className="text-[10px] text-[#A9A9A9]">{apo.posisi}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 text-xs font-bold text-[#EF6E4D] bg-[#FFF2EE] rounded-xl hover:bg-[#FFE5DE] transition">
            Lihat Semua Apoteker
          </button>
        </div>
      </div>
    </div>
  );
}