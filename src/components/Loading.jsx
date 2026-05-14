export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#FCFAF9]">
      {/* Container untuk Spinner */}
      <div className="relative flex items-center justify-center mb-10">
        
        {/* Ring Luar - Background Statis */}
        <div className="w-16 h-16 border-[3px] border-orange-100 rounded-full"></div>
        
        {/* Ring Dalam - Animasi Spin (Warna Utama Oranye) */}
        <div className="absolute w-16 h-16 border-[3px] border-transparent border-t-[#EF6E4D] border-l-[#EF6E4D] rounded-full animate-spin"></div>
        
        {/* Dot/Ikon Tengah */}
        <div className="absolute w-3 h-3 bg-[#EF6E4D] rounded-full animate-pulse shadow-[0_0_15px_rgba(239,110,77,0.4)]"></div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-[#2D3134] tracking-tight">
          Farmasi Dashboard
        </h1>
        <div className="flex items-center space-x-2 mt-3">
          <span className="text-[#A9A9A9] text-[10px] font-bold uppercase tracking-widest">
            Memuat data stok & apoteker
          </span>
          {/* Animasi titik-titik */}
          <span className="flex space-x-1">
            <span className="w-1 h-1 bg-[#EF6E4D] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-1 h-1 bg-[#EF6E4D] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-1 h-1 bg-[#EF6E4D] rounded-full animate-bounce"></span>
          </span>
        </div>
      </div>

      {/* Decorative Blur Background - Oranye Tipis */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#EF6E4D]/5 rounded-full blur-[100px] -z-10"></div>
    </div>
  );
}