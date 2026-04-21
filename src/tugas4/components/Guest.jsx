import { useState } from "react";
import data from "../minuman.json";

export default function Guest() {
  const [search, setSearch] = useState("");
  const [filterKategori, setFilterKategori] = useState("");

  const kategoriOptions = [...new Set(data.map((item) => item.kategori))];

  const filteredData = data.filter((item) => {
    const matchSearch = item.nama.toLowerCase().includes(search.toLowerCase());
    const matchKategori = filterKategori ? item.kategori === filterKategori : true;
    return matchSearch && matchKategori;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 font-sans">
      {/* Hero Section */}
      <div className="text-center py-12 px-4 bg-gradient-to-b from-pink-100/50 to-transparent rounded-[3rem] mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-pink-700 mb-4 drop-shadow-sm">
          Nikmati Kesegaran <span className="text-pink-500">Pinky</span> ✨
        </h2>
        <p className="text-pink-400 max-w-xl mx-auto font-medium">
          Pilihan minuman premium dengan bahan pilihan yang siap mencerahkan harimu dengan sentuhan warna pink.
        </p>
      </div>

      {/* Filter Bar (Floating Island) */}
      <div className="sticky top-24 z-30 bg-white/80 backdrop-blur-xl p-4 rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(255,182,193,0.3)] border border-white mb-16 flex flex-wrap gap-4 items-center justify-between">
        <div className="relative flex-1 min-w-[250px]">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400">🔍</span>
          <input
            type="text"
            placeholder="Cari rasa favoritmu..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-pink-50/50 border-none focus:ring-2 focus:ring-pink-300 text-pink-700 placeholder-pink-300 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
          <button 
            onClick={() => setFilterKategori("")}
            className={`px-6 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
              !filterKategori 
              ? 'bg-pink-500 text-white shadow-lg shadow-pink-200 scale-105' 
              : 'bg-white text-pink-500 hover:bg-pink-50 border border-pink-100'
            }`}
          >
            Semua Menu
          </button>
          {kategoriOptions.map(kat => (
            <button 
              key={kat}
              onClick={() => setFilterKategori(kat)}
              className={`px-6 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                filterKategori === kat 
                ? 'bg-pink-500 text-white shadow-lg shadow-pink-200 scale-105' 
                : 'bg-white text-pink-500 hover:bg-pink-50 border border-pink-100'
              }`}
            >
              {kat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Menu dengan Custom Shadow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredData.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-[2.8rem] overflow-hidden transition-all duration-500 border border-pink-50 
                       shadow-[0_20px_40px_-15px_rgba(255,182,193,0.35)] 
                       hover:shadow-[0_30px_60px_-10px_rgba(255,182,193,0.5)] 
                       hover:-translate-y-3 cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden">
              <img 
                src={item.gambar} 
                alt={item.nama} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              {/* Badge Kategori */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-pink-600 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-sm border border-pink-100">
                {item.kategori}
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                 <span className="bg-white text-pink-600 text-sm font-bold px-6 py-2.5 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   Detail Menu ✨
                 </span>
              </div>
            </div>
            
            {/* Content Container */}
            <div className="p-7">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-black text-gray-800 group-hover:text-pink-600 transition-colors leading-tight">
                  {item.nama}
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed font-medium">
                {item.deskripsi}
              </p>
              
              {/* Price & Toppings */}
              <div className="space-y-4 border-t border-pink-50 pt-5">
                <div className="flex justify-between items-center">
                   <div className="flex -space-x-2">
                    {item.detail.topping.slice(0, 3).map((t, i) => (
                      <div 
                        key={i} 
                        className="w-9 h-9 rounded-full bg-pink-50 border-2 border-white flex items-center justify-center text-xs shadow-sm"
                        title={t}
                      >
                        🌸
                      </div>
                    ))}
                    {item.detail.topping.length > 3 && (
                      <div className="w-9 h-9 rounded-full bg-gray-50 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-400">
                        +{item.detail.topping.length - 3}
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest">Price</p>
                    <p className="text-xl font-black text-pink-500">Rp {item.harga.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-pink-50/50 p-3 rounded-2xl">
                  <span className="text-[10px] font-bold text-pink-400 uppercase tracking-tighter flex items-center gap-1">
                    🔥 {item.detail.kalori} Calories
                  </span>
                  <span className="text-[10px] font-bold text-pink-400 uppercase tracking-tighter">
                    📦 {item.stok} Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-pink-100 mt-10">
          <span className="text-6xl block mb-4">🌸</span>
          <h3 className="text-2xl font-bold text-pink-300">Minuman tidak ditemukan...</h3>
          <p className="text-pink-200 mt-2">Coba cari kata kunci atau kategori lain ya!</p>
        </div>
      )}
    </div>
  );
}