import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MemberDashboard() {
  const navigate = useNavigate();
  
  // State Navigasi & Interaksi
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVoucherClaimed, setIsVoucherClaimed] = useState(false);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // State Form Transaksi Baru
  const [orderType, setOrderType] = useState("resep");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleClaimVoucher = () => {
    setShowClaimModal(false);
    setIsVoucherClaimed(true);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    alert(`Pesanan ${orderType === 'resep' ? 'Tebus Resep' : 'Obat/Vitamin'} berhasil diajukan! Tim kami akan segera menghubungi Anda.`);
    setNotes("");
  };

  // ================= --- FUNGSI RENDER KONTEN DINAMIS --- =================
  // Menggunakan () => ( ... ) untuk mencegah input text kehilangan fokus (lost focus)

  // 1. KONTEN TAB "RIWAYAT TRANSAKSI" (FIXED & POLISHED)
  const renderTransaksiContent = () => (
    <div className={`transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start relative`}>
      
      {/* KOLOM KIRI: FORM PENGAJUAN PESANAN (Kompak & Sticky) */}
      <div className="lg:col-span-5 lg:sticky lg:top-0 z-10">
        <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#E97451]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 mb-6 border-b border-gray-50 pb-4">
            <h3 className="text-xl font-black text-[#2D3134] tracking-tight">Buat Pesanan Baru</h3>
            <p className="text-gray-400 text-xs font-medium mt-1">Layanan instan prioritas member.</p>
          </div>
          
          <form onSubmit={handleCreateOrder} className="flex flex-col gap-4 relative z-10">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#2D3134] ml-1">Kategori Pesanan</label>
              <select 
                value={orderType} 
                onChange={(e) => setOrderType(e.target.value)}
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold text-[#2D3134] outline-none focus:border-[#E97451] focus:ring-4 focus:ring-[#E97451]/10 focus:bg-white transition-all cursor-pointer appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em 1.2em' }}
              >
                <option value="resep">💊 Tebus Resep Dokter</option>
                <option value="bebas">🛒 Obat Bebas & Alkes</option>
                <option value="vitamin">✨ Suplemen & Vitamin</option>
              </select>
            </div>

            {orderType === "resep" && (
              <div className="flex flex-col gap-1.5 animate-fade-in-up">
                <label className="text-xs font-bold text-[#2D3134] ml-1">Unggah Foto Resep</label>
                <div className="border-2 border-dashed border-gray-200 hover:border-[#E97451]/50 rounded-xl py-5 px-4 text-center cursor-pointer transition-all bg-gray-50/30 hover:bg-[#E97451]/5 group flex flex-col items-center justify-center gap-1.5">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-[#E97451]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <p className="text-xs font-bold text-[#2D3134]">Ketuk untuk Upload</p>
                  <p className="text-[10px] text-gray-400 font-medium">Format JPG/PNG (Maks. 5MB)</p>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#2D3134] ml-1">Catatan Tambahan</label>
              <textarea 
                rows="3"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Cth: Tolong carikan merk generik, atau infokan jika stok kosong..."
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-medium text-[#2D3134] outline-none focus:border-[#E97451] focus:ring-4 focus:ring-[#E97451]/10 focus:bg-white transition-all resize-none h-[90px] custom-scrollbar"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-[#2D3134] hover:bg-[#E97451] text-white py-3.5 rounded-xl text-xs font-black tracking-wide shadow-lg shadow-gray-200 active:scale-[0.98] transition-all mt-2 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              Kirim Pengajuan
            </button>
          </form>
        </div>
      </div>

      {/* KOLOM KANAN: DAFTAR RIWAYAT TRANSAKSI */}
      <div className="lg:col-span-7">
        <div className="bg-white/90 backdrop-blur-md rounded-[2rem] p-6 md:p-8 border border-white shadow-xl shadow-gray-200/30 overflow-hidden relative min-h-[500px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-black text-[#2D3134] tracking-tight">Riwayat Transaksi</h2>
              <p className="text-gray-400 text-xs font-medium mt-1">Pantau status pesanan dan history medis Anda.</p>
            </div>
            {/* Filter Pills */}
            <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2 md:pb-0 shrink-0">
              <button className="bg-[#E97451] text-white px-4 py-2 rounded-xl text-[11px] font-bold shadow-md shadow-[#E97451]/20 whitespace-nowrap">Semua</button>
              <button className="bg-gray-50 border border-gray-100 text-gray-500 hover:text-[#E97451] px-4 py-2 rounded-xl text-[11px] font-bold transition-colors whitespace-nowrap">Bulan Ini</button>
              <button className="bg-gray-50 border border-gray-100 text-gray-500 hover:text-[#E97451] px-4 py-2 rounded-xl text-[11px] font-bold transition-colors whitespace-nowrap">Selesai</button>
            </div>
          </div>

          <div className="flex flex-col gap-3.5 relative z-10">
            {/* Item 1: Diproses */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500"></div>
              <div className="flex items-center gap-4 pl-2">
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-500 group-hover:text-white rounded-xl flex items-center justify-center text-blue-500 text-xl transition-all duration-300 shrink-0">💊</div>
                <div>
                  <p className="font-extrabold text-[#2D3134] text-sm group-hover:text-blue-600 transition-colors">Tebus Resep Dr. Andi</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded">TRX-992</span>
                    <span className="text-[10px] font-medium text-gray-400">• 17 Jun 2026</span>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-4 sm:mt-0 pt-3 sm:pt-0 border-t border-gray-50 sm:border-none pl-2 sm:pl-0">
                <p className="font-black text-[#2D3134] text-base md:text-lg">Rp 145.000</p>
                <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider mt-1 border border-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>Diproses
                </div>
              </div>
            </div>

            {/* Item 2: Selesai */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-500"></div>
              <div className="flex items-center gap-4 pl-2">
                <div className="w-12 h-12 bg-green-50 group-hover:bg-green-500 group-hover:text-white rounded-xl flex items-center justify-center text-green-500 text-xl transition-all duration-300 shrink-0">🛒</div>
                <div>
                  <p className="font-extrabold text-[#2D3134] text-sm group-hover:text-green-600 transition-colors">Vitamin C & Imun Booster</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded">TRX-814</span>
                    <span className="text-[10px] font-medium text-gray-400">• 12 Jun 2026</span>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-4 sm:mt-0 pt-3 sm:pt-0 border-t border-gray-50 sm:border-none pl-2 sm:pl-0">
                <p className="font-black text-[#2D3134] text-base md:text-lg">Rp 85.500</p>
                <div className="inline-flex items-center gap-1 bg-green-50 text-green-600 px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider mt-1 border border-green-100">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  Selesai
                </div>
              </div>
            </div>

            {/* Item 3: Selesai */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-500"></div>
              <div className="flex items-center gap-4 pl-2">
                <div className="w-12 h-12 bg-green-50 group-hover:bg-green-500 group-hover:text-white rounded-xl flex items-center justify-center text-green-500 text-xl transition-all duration-300 shrink-0">🩹</div>
                <div>
                  <p className="font-extrabold text-[#2D3134] text-sm group-hover:text-green-600 transition-colors">Alat Ukur Tekanan Darah</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded">TRX-755</span>
                    <span className="text-[10px] font-medium text-gray-400">• 05 Jun 2026</span>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-4 sm:mt-0 pt-3 sm:pt-0 border-t border-gray-50 sm:border-none pl-2 sm:pl-0">
                <p className="font-black text-[#2D3134] text-base md:text-lg">Rp 320.000</p>
                <div className="inline-flex items-center gap-1 bg-green-50 text-green-600 px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider mt-1 border border-green-100">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  Selesai
                </div>
              </div>
            </div>

            {/* Item 4: Dibatalkan */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500"></div>
              <div className="flex items-center gap-4 pl-2">
                <div className="w-12 h-12 bg-red-50 group-hover:bg-red-500 group-hover:text-white rounded-xl flex items-center justify-center text-red-500 text-xl transition-all duration-300 shrink-0">💬</div>
                <div>
                  <p className="font-extrabold text-[#2D3134] text-sm group-hover:text-red-600 transition-colors">Sesi Konsultasi Apoteker</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded">TRX-612</span>
                    <span className="text-[10px] font-medium text-gray-400">• 28 Mei 2026</span>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-4 sm:mt-0 pt-3 sm:pt-0 border-t border-gray-50 sm:border-none pl-2 sm:pl-0">
                <p className="font-black text-gray-400 text-base md:text-lg line-through decoration-red-300">Rp 50.000</p>
                <div className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider mt-1 border border-red-100">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                  Batal
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );

  // 2. KONTEN TAB "VOUCHER DIGITAL"
  const renderVoucherContent = () => (
    <div className={`transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
      <div className={`border-2 rounded-[2.5rem] p-6 flex flex-col justify-between transition-all duration-500 relative overflow-hidden group ${isVoucherClaimed ? 'bg-gray-100/70 border-gray-200 opacity-60 grayscale' : 'bg-gradient-to-br from-[#2D3134] to-gray-900 border-transparent shadow-2xl hover:-translate-y-2'}`}>
        {!isVoucherClaimed && <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-gradient-to-br from-yellow-400 to-[#E97451] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>}
        <div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider border ${isVoucherClaimed ? 'bg-gray-200 text-gray-500 border-gray-300' : 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30'}`}>Gratis Ongkir</div>
            <p className={`text-3xl font-black tracking-tight ${isVoucherClaimed ? 'text-gray-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400'}`}>Rp 0</p>
          </div>
          <p className={`font-black text-xl mb-1 relative z-10 ${isVoucherClaimed ? 'text-gray-500' : 'text-white'}`}>Gratis Ongkir Instan</p>
          <p className="text-xs text-gray-400 mb-8 relative z-10">Khusus radius &lt; 5KM. Tanpa min. transaksi.</p>
        </div>
        <button 
          onClick={() => !isVoucherClaimed && setShowClaimModal(true)}
          className={`w-full font-black py-3.5 rounded-2xl text-sm transition-all duration-300 relative z-10 ${isVoucherClaimed ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-yellow-400 to-amber-500 text-yellow-950 hover:shadow-xl hover:shadow-yellow-400/20 active:scale-95'}`}
        >
          {isVoucherClaimed ? '✓ Terklaim' : 'Klaim Sekarang'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#FAF6F0] font-poppins selection:bg-[#E97451]/20 selection:text-[#E97451] overflow-hidden relative">
      
      {/* ================= BACKGROUND DECORATIVE LAYER ================= */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#E97451 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#E97451]/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* ================= TOAST NOTIFICATION ================= */}
      <div className={`fixed top-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 transform ${showSuccessToast ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-10 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="bg-[#2D3134] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 border border-white/10">
          <div className="w-7 h-7 bg-[#E97451] text-white rounded-full flex items-center justify-center font-bold text-sm">✓</div>
          <p className="font-bold text-sm tracking-tight">Voucher Gratis Ongkir sukses masuk dompet!</p>
        </div>
      </div>

      {/* ================= MODAL POP-UP (KLAIM VOUCHER) ================= */}
      {showClaimModal && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[#2D3134]/40 backdrop-blur-sm transition-opacity duration-500" onClick={() => setShowClaimModal(false)}></div>
          <div className="bg-white/90 backdrop-blur-xl w-full max-w-sm rounded-[2.5rem] p-8 relative z-10 shadow-2xl border border-white text-center animate-fade-in-up">
            <div className="w-20 h-20 bg-gradient-to-br from-[#E97451]/20 to-[#E97451]/5 text-[#E97451] rounded-full flex items-center justify-center mx-auto mb-6 relative border border-[#E97451]/10">
              <span className="absolute inset-0 bg-[#E97451] rounded-full animate-ping opacity-10"></span>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
            </div>
            <h3 className="text-2xl font-black text-[#2D3134] tracking-tight mb-2">Ambil Voucher?</h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">Kamu akan mengklaim reward kupon <span className="font-extrabold text-[#2D3134]">Gratis Ongkir Instan</span> khusus member Gold.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowClaimModal(false)} className="flex-1 py-3.5 rounded-2xl font-extrabold text-gray-500 bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all">Batal</button>
              <button onClick={handleClaimVoucher} className="flex-1 py-3.5 rounded-2xl font-extrabold bg-gradient-to-r from-[#E97451] to-[#d46543] text-white hover:shadow-lg hover:shadow-[#E97451]/40 active:scale-95 transition-all">Konfirmasi</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= SIDEBAR ================= */}
      <aside className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-500 ease-in-out w-72 bg-white/95 backdrop-blur-xl border-r border-gray-100 flex flex-col justify-between flex-shrink-0 z-40 shadow-[6px_0_30px_rgba(0,0,0,0.01)]`}>
        <div>
          <div className="h-24 flex items-center justify-between px-8 border-b border-gray-50">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#E97451] to-[#d46543] flex items-center justify-center text-white font-bold shadow-lg shadow-[#E97451]/30 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
              </div>
              <span className="text-xl font-black text-[#2D3134] tracking-tight">Apotek<span className="text-[#E97451]">Ku</span></span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:text-[#E97451] active:scale-95 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div className="p-6 flex flex-col gap-2 overflow-y-auto custom-scrollbar">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 pl-2">Menu Utama</p>
            <button onClick={() => { setActiveMenu("dashboard"); setIsMobileMenuOpen(false); }} className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl font-extrabold transition-all active:scale-95 group ${activeMenu === "dashboard" ? "bg-[#E97451] text-white shadow-xl shadow-[#E97451]/30" : "text-gray-500 hover:bg-[#FAF6F0] hover:text-[#E97451]"}`}>
              <svg className={`w-5 h-5 transition-transform ${activeMenu === "dashboard" ? "" : "group-hover:-translate-y-0.5"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              Ringkasan
            </button>
            <button onClick={() => { setActiveMenu("transaksi"); setIsMobileMenuOpen(false); }} className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl font-extrabold transition-all active:scale-95 group ${activeMenu === "transaksi" ? "bg-[#E97451] text-white shadow-xl shadow-[#E97451]/30" : "text-gray-500 hover:bg-[#FAF6F0] hover:text-[#E97451]"}`}>
              <svg className={`w-5 h-5 transition-transform ${activeMenu === "transaksi" ? "" : "group-hover:-translate-y-0.5"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Riwayat Transaksi
            </button>
            <button onClick={() => { setActiveMenu("voucher"); setIsMobileMenuOpen(false); }} className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-extrabold transition-all active:scale-95 group ${activeMenu === "voucher" ? "bg-[#E97451] text-white shadow-xl shadow-[#E97451]/30" : "text-gray-500 hover:bg-[#FAF6F0] hover:text-[#E97451]"}`}>
              <div className="flex items-center gap-3">
                <svg className={`w-5 h-5 transition-transform ${activeMenu === "voucher" ? "" : "group-hover:-translate-y-0.5"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                Voucher Digital
              </div>
              {!isVoucherClaimed && <span className="text-[10px] px-2.5 py-0.5 rounded-full font-black animate-pulse bg-yellow-400 text-yellow-900">1 BARU</span>}
            </button>
          </div>
        </div>
        <div className="p-6 border-t border-gray-50">
          <button onClick={() => navigate('/login')} className="flex items-center justify-center md:justify-start gap-3 px-4 py-3.5 w-full rounded-2xl font-bold text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all active:scale-95 group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Keluar Akun
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative z-10">
        
        {/* HEADER */}
        <header className={`h-24 px-6 md:px-12 flex items-center justify-between shrink-0 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}>
          <div className="flex items-center gap-4 flex-1">
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-[#2D3134]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-black text-[#2D3134] tracking-tight">Halo, Mersya Grande 👋</h2>
              <p className="hidden md:block text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">Member ID: AP-8821-4509 • Gold Level</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pl-2">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-gray-400 hover:text-[#E97451] transition-all relative group">
              <span className="absolute top-3 right-3.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </button>
            <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* CONTENT ENHANCED TABS */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-12 pb-12 z-10 custom-scrollbar scroll-smooth">
          
          {/* TAB 1: RINGKASAN (DASHBOARD) */}
          {activeMenu === "dashboard" && (
            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* VIRTUAL CARD PREMIERE */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-[#2D3134] via-[#3d4246] to-[#1a1c1e] rounded-[2.5rem] p-7 text-white shadow-2xl relative overflow-hidden h-full min-h-[240px] flex flex-col justify-between group hover:-translate-y-2 border border-white/10 transition-all duration-500">
                  <div className="absolute -right-16 -top-16 w-60 h-64 bg-[#E97451]/20 rounded-full blur-3xl pointer-events-none group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute -bottom-10 -left-10 w-36 h-32 bg-yellow-400/10 rounded-full blur-2xl"></div>

                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <p className="text-gray-400 text-[10px] font-black tracking-widest uppercase mb-1">MEMBER PASSPORT</p>
                      <div className="bg-[#E97451] px-3 py-1 rounded-xl inline-flex items-center gap-1.5 shadow-md shadow-[#E97451]/20 border border-white/10">
                        <span className="text-[11px] font-black tracking-wide text-white">👑 GOLD VIP</span>
                      </div>
                    </div>
                    <div className="w-10 h-8 bg-gradient-to-r from-yellow-300 to-amber-500 rounded-lg opacity-80 flex items-center justify-center border border-white/20 shadow-inner">
                      <div className="w-6 h-4 border border-white/20 rounded-sm"></div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-8">
                    <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1">Poin Terkumpul</p>
                    <p className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-yellow-200">2,450 <span className="text-sm font-bold text-gray-400 tracking-normal">points</span></p>
                    <div className="mt-5 text-xs font-mono text-gray-400 tracking-widest bg-white/5 px-4 py-2.5 rounded-xl border border-white/5 flex justify-between items-center">
                      <span>••••  ••••  ••••  4509</span>
                      <span className="text-[9px] font-sans font-black bg-white/10 text-white px-2 py-0.5 rounded">ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* QUICK REMINDERS BENTO STYLE */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Reminder Obat Card */}
                <div className="bg-white rounded-[2.5rem] p-6 md:p-8 border border-gray-100 shadow-xl shadow-gray-200/20 flex flex-col justify-between hover:shadow-2xl hover:border-blue-100/50 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full z-0"></div>
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">⏰</div>
                    <div>
                      <h3 className="font-black text-[#2D3134] text-base tracking-tight">Jadwal Minum Obat</h3>
                      <p className="text-xs font-extrabold text-blue-500 mt-0.5">Siang ini • 13:00 WIB</p>
                    </div>
                  </div>
                  <div className="bg-[#FAF6F0]/60 border border-gray-100 p-4 rounded-[1.5rem] relative z-10">
                    <div className="flex justify-between items-start"><p className="font-extrabold text-[#2D3134] text-sm">Amoxicillin 500mg</p><span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-md">Antibiotik</span></div>
                    <p className="text-xs text-gray-400 mt-1 font-medium">1 Tablet • Sesudah Makan</p>
                    <button className="mt-4 w-full bg-[#2D3134] hover:bg-[#E97451] text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95">Konfirmasi Sudah Diminum</button>
                  </div>
                </div>

                {/* Track Courier Card */}
                <div onClick={() => setActiveMenu("transaksi")} className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-gray-100 shadow-xl shadow-gray-200/20 flex flex-col justify-between hover:shadow-2xl hover:border-green-100/50 hover:-translate-y-1 transition-all duration-500 cursor-pointer relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full z-0"></div>
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">📦</div>
                    <div>
                      <h3 className="font-black text-[#2D3134] text-base tracking-tight">Pengiriman Aktif</h3>
                      <p className="text-xs font-extrabold text-green-600 mt-0.5">Resep #TRX-992</p>
                    </div>
                  </div>
                  <div className="relative p-4 bg-[#FAF6F0]/60 border border-gray-50 rounded-2xl z-10 flex items-center gap-4">
                    <div className="relative flex shrink-0">
                      <div className="w-3.5 h-3.5 rounded-full bg-green-500 ring-4 ring-green-100"></div>
                      <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-[#E97451] truncate">Kurir Menuju Rumahmu</p>
                      <p className="text-[10px] font-bold text-gray-400 mt-0.5">Ketuk untuk pantau radar peta &rarr;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* VOUCHER CARDS ZONE */}
              <div className="lg:col-span-3 mt-4">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-black text-[#2D3134] tracking-tight">Klaim Benefit Eksklusif</h2>
                    <p className="text-xs font-bold text-gray-400 mt-0.5 uppercase tracking-wide">Spesial Kategori Premium Gold</p>
                  </div>
                  <button onClick={() => setActiveMenu("voucher")} className="text-[#E97451] font-bold text-xs bg-white border border-gray-100 px-4 py-2 rounded-xl shadow-sm hover:bg-[#E97451] hover:text-white transition-all">Lihat Semua</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Voucher Card 1 (Interaktif) */}
                  <div className={`border-2 rounded-[2.5rem] p-6 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-500 relative overflow-hidden ${isVoucherClaimed ? 'bg-gray-50 border-gray-200/60 opacity-60' : 'bg-gradient-to-br from-[#2D3134] via-[#3a3f43] to-[#2D3134] border-transparent shadow-xl hover:-translate-y-1'}`}>
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                        <div className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider ${isVoucherClaimed ? 'bg-gray-200 text-gray-400' : 'bg-yellow-400 text-yellow-950 shadow-sm'}`}>Free Shipping</div>
                        <span className="text-white/30 text-xs font-mono">⚡ INSTAN</span>
                      </div>
                      <h4 className={`text-xl font-black ${isVoucherClaimed ? 'text-gray-400' : 'text-white'}`}>Gratis Ongkir Sepuasnya</h4>
                      <p className="text-xs text-gray-400 mt-1 font-medium">Tanpa minimum belanja, khusus area rumbai.</p>
                    </div>
                    <button 
                      onClick={() => !isVoucherClaimed && setShowClaimModal(true)}
                      className={`px-6 py-3.5 rounded-xl font-black text-xs active:scale-95 transition-all w-full md:w-auto shrink-0 ${isVoucherClaimed ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-yellow-400 to-amber-500 text-yellow-950 shadow-lg shadow-yellow-400/20'}`}
                    >
                      {isVoucherClaimed ? 'Sudah Terklaim' : 'Ambil Voucher'}
                    </button>
                  </div>

                  {/* Voucher Card 2 */}
                  <div className="bg-white border-2 border-dashed border-[#E97451]/30 rounded-[2.5rem] p-6 flex flex-col md:flex-row justify-between items-center gap-6 hover:border-[#E97451] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                        <div className="bg-[#E97451]/10 text-[#E97451] px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider">Potongan Harga</div>
                        <span className="text-[#E97451] text-xs font-black">SAVE 20%</span>
                      </div>
                      <h4 className="text-xl font-black text-[#2D3134] group-hover:text-[#E97451] transition-colors">Kupon Diskon Suplemen</h4>
                      <p className="text-xs text-gray-400 mt-1 font-medium">Potongan langsung untuk imun booster & vitamin.</p>
                    </div>
                    <button className="bg-[#FAF6F0] text-[#E97451] font-black px-6 py-3.5 rounded-xl text-xs group-hover:bg-[#E97451] group-hover:text-white transition-all w-full md:w-auto shrink-0 shadow-sm">Tukar 500 Pts</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TRANSAKSI */}
          {activeMenu === "transaksi" && renderTransaksiContent()}

          {/* TAB 3: VOUCHER */}
          {activeMenu === "voucher" && renderVoucherContent()}

        </div>
      </main>
    </div>
  );
}