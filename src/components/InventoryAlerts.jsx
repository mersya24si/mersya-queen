import React from "react";

export default function InventoryAlerts() {
  const alerts = [
    { id: 1, name: "Amoxicillin 250mg", stock: 3, maxStock: 50, unit: "Box", status: "Kritis" },
    { id: 2, name: "Paracetamol 500mg", stock: 12, maxStock: 100, unit: "Box", status: "Menipis" },
    { id: 3, name: "Amlodipine 5mg", stock: 8, maxStock: 60, unit: "Box", status: "Menipis" },
    { id: 4, name: "Metformin 500mg", stock: 2, maxStock: 40, unit: "Box", status: "Kritis" },
  ];

  return (
    <div className="flex flex-col gap-3.5 overflow-y-auto pr-1">
      {alerts.map((item) => {
        // Kalkulasi persentase sisa stok untuk visualisasi progress bar
        const stockPercent = (item.stock / item.maxStock) * 100;
        const isCritical = item.status === "Kritis";

        return (
          <div 
            key={item.id} 
            className="group flex flex-col p-4 rounded-xl border border-gray-100 bg-white hover:border-[#E97451]/30 hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                {/* Ikon Status */}
                <div className={`p-2 rounded-lg flex-shrink-0 ${isCritical ? 'bg-red-50 text-red-500' : 'bg-amber-50 text-amber-500'}`}>
                  {isCritical ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  )}
                </div>
                
                {/* Info Obat */}
                <div className="flex flex-col">
                  <span className="font-bold text-[15px] text-[#2D3134] group-hover:text-[#E97451] transition-colors">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-400 mt-0.5">
                    Sisa <strong className={`${isCritical ? 'text-red-600' : 'text-amber-600'} font-bold`}>{item.stock} {item.unit}</strong>
                  </span>
                </div>
              </div>

              {/* Badge Teks */}
              <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md ${isCritical ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"}`}>
                {item.status}
              </span>
            </div>

            {/* Visual Progress Bar Stok */}
            <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1 overflow-hidden">
              <div 
                className={`h-1.5 rounded-full transition-all duration-500 ${isCritical ? 'bg-red-500' : 'bg-amber-400'}`}
                style={{ width: `${Math.max(stockPercent, 5)}%` }} // Minimal width 5% agar garis tetap terlihat
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}