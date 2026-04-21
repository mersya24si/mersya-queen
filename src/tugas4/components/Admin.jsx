import { useState } from "react";
import data from "../minuman.json";

export default function Admin() {
  const [search, setSearch] = useState("");
  
  // Hitung statistik sederhana
  const totalStok = data.reduce((acc, curr) => acc + curr.stok, 0);
  const outOfStock = data.filter(item => item.stok === 0).length;

  const filteredData = data.filter(item => 
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Admin */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">Inventory <span className="text-pink-500">System</span></h2>
          <p className="text-gray-400 font-medium">Update and manage your beverage stocks</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-pink-200 transition-all active:scale-95">
            + Tambah Menu
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {[
          { label: "Total Menu", val: data.length, icon: "☕", color: "bg-blue-500" },
          { label: "Total Stok", val: totalStok, icon: "📦", color: "bg-pink-500" },
          { label: "Habis", val: outOfStock, icon: "⚠️", color: "bg-orange-500" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-pink-50 shadow-sm flex items-center gap-5">
            <div className={`${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner shadow-white/20`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-black text-gray-800">{stat.val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[2.5rem] border border-pink-50 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-pink-50 flex flex-wrap justify-between items-center gap-4">
           <input
            type="text"
            placeholder="Cari data..."
            className="px-6 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-200 text-sm w-full md:w-80"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="text-pink-500 font-bold text-sm hover:underline">Export CSV</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Minuman</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Kategori</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Harga</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Stok</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-50">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-pink-50/30 transition-colors">
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <img src={item.gambar} className="w-12 h-12 rounded-xl object-cover border border-pink-100" />
                      <span className="font-bold text-gray-700">{item.nama}</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className="px-3 py-1 rounded-lg bg-pink-50 text-pink-600 text-xs font-bold uppercase">{item.kategori}</span>
                  </td>
                  <td className="p-5 font-bold text-gray-600">Rp {item.harga.toLocaleString()}</td>
                  <td className="p-5">
                    <div className="flex flex-col gap-1">
                      <span className={`text-sm font-black ${item.stok < 5 ? 'text-red-500' : 'text-green-500'}`}>{item.stok} unit</span>
                      <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-pink-400" style={{ width: `${Math.min(item.stok * 4, 100)}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex justify-center gap-2">
                      <button className="p-2 hover:bg-white rounded-lg text-blue-400 shadow-sm border border-transparent hover:border-blue-100 transition-all">📝</button>
                      <button className="p-2 hover:bg-white rounded-lg text-red-400 shadow-sm border border-transparent hover:border-red-100 transition-all">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}