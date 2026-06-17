import React from "react";

export default function RevenueChart() {
  const data = [
    { day: "Sen", value: 8.5 },
    { day: "Sel", value: 7.0 },
    { day: "Rab", value: 9.5 },
    { day: "Kam", value: 6.0 },
    { day: "Jum", value: 12.0 },
    { day: "Sab", value: 8.5 },
    { day: "Min", value: 5.0 },
  ];

  const maxValue = 15;

  return (
    <div className="w-full flex flex-col">
      {/* Header Info Pendapatan */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <p className="text-sm text-gray-400 font-medium mb-1">Total Minggu Ini</p>
          <h4 className="text-2xl md:text-3xl font-bold text-[#2D3134]">Rp 56.5 Juta</h4>
        </div>
        {/* Badge Tren Positif */}
        <div className="bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 border border-green-100 shadow-sm">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
          </svg>
          +12.5%
        </div>
      </div>

      {/* Area Grafik */}
      <div className="flex items-end justify-between gap-2 h-[160px] px-1 border-b border-gray-100 pb-2 relative">
        {/* Garis bantu horizontal (Grid Y) */}
        <div className="absolute w-full top-1/2 left-0 border-t border-dashed border-gray-200 -z-10"></div>
        
        {data.map((item, index) => {
          const heightPercent = (item.value / maxValue) * 100;
          const isToday = item.day === "Jum"; // Asumsi hari ini untuk highlight visual
          
          return (
            <div key={index} className="flex flex-col items-center flex-1 group relative h-full justify-end">
              
              {/* Tooltip */}
              <div className="absolute -top-10 bg-[#2D3134] text-white text-xs font-medium px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg z-10 translate-y-2 group-hover:translate-y-0">
                Rp {item.value}M
              </div>
              
              {/* Batang Grafik */}
              <div 
                style={{ height: `${heightPercent}%` }}
                className={`w-full max-w-[32px] md:max-w-[40px] rounded-t-lg transition-all duration-300 flex items-start justify-center cursor-pointer relative overflow-hidden ${
                  isToday 
                    ? "bg-[#E97451] shadow-md shadow-[#e9745140]" 
                    : "bg-[#E97451] bg-opacity-15 hover:bg-opacity-30"
                }`}
              >
                {/* Efek gradient/kilap di dalam batang (untuk highlight) */}
                {isToday && <div className="w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent"></div>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Label Hari */}
      <div className="flex justify-between items-center px-1 pt-3 text-xs font-semibold text-gray-400">
        {data.map((item, index) => (
          <span 
            key={index} 
            className={`flex-1 text-center ${item.day === "Jum" ? "text-[#E97451] font-bold" : ""}`}
          >
            {item.day}
          </span>
        ))}
      </div>
    </div>
  );
}