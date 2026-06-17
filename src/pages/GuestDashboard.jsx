import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GuestDashboard() {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF6F0] via-white to-[#FAF6F0] font-poppins selection:bg-[#E97451]/30 selection:text-[#2D3134] overflow-x-hidden relative pb-10">
      
      {/* --- BACKGROUND DECORATION (MEMBUAT TAMPILAN "RAMAI" & HIDUP) --- */}
      {/* 1. Dot Pattern Halus */}
      <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#E97451 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      
      {/* 2. Floating Medicine SVGs (Kapsul & Pil Raksasa Melayang) */}
      <div className="absolute top-20 left-10 opacity-[0.03] rotate-45 animate-[bounce_8s_infinite] pointer-events-none z-0">
        <svg className="w-64 h-64 text-[#E97451]" fill="currentColor" viewBox="0 0 24 24"><path d="M10 2h4a8 8 0 018 8v4a8 8 0 01-8 8h-4a8 8 0 01-8-8v-4a8 8 0 018-8zm0 2a6 6 0 00-6 6v3h16V10a6 6 0 00-6-6h-4z"/></svg>
      </div>
      <div className="absolute top-80 right-0 opacity-[0.04] -rotate-12 animate-[pulse_6s_infinite] pointer-events-none z-0">
        <svg className="w-80 h-80 text-[#2D3134]" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path fill="white" d="M12 4a8 8 0 00-8 8h16a8 8 0 00-8-8z"/></svg>
      </div>
      <div className="absolute top-[40rem] left-1/3 opacity-[0.03] rotate-90 pointer-events-none z-0">
        <svg className="w-48 h-48 text-[#E97451]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 11h-5V6h-4v5H5v4h5v5h4v-5h5v-4z"/></svg>
      </div>
      {/* --------------------------------------------------------------- */}

      {/* 1. FLOATING NAVBAR (UPDATED: ORANGE BACKGROUND & WHITE TEXT) */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-[#E97451]/95 backdrop-blur-xl border border-white/20 shadow-2xl shadow-[#E97451]/40 rounded-full px-4 py-2.5 z-50 flex items-center justify-between transition-all duration-500">
        <div className="flex items-center gap-3 cursor-pointer pl-2 group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#E97451] font-black text-xl shadow-md group-hover:rotate-90 transition-transform duration-500">
            +
          </div>
          <span className="text-xl font-extrabold text-white tracking-tight">Apotek<span className="text-yellow-300">Ku</span></span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-sm font-bold text-white/90">
          <a href="#home" className="hover:text-yellow-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-300 hover:after:w-full after:transition-all after:duration-300 pb-1">Beranda</a>
          <a href="#layanan" className="hover:text-yellow-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-300 hover:after:w-full after:transition-all after:duration-300 pb-1">Layanan</a>
          <a href="#testimoni" className="hover:text-yellow-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-300 hover:after:w-full after:transition-all after:duration-300 pb-1">Ulasan</a>
          <a href="#kontak" className="hover:text-yellow-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-300 hover:after:w-full after:transition-all after:duration-300 pb-1">Kontak</a>
        </div>

        <div className="flex items-center gap-3 pr-1">
          <button onClick={() => navigate('/login')} className="hidden md:block text-sm font-bold text-white hover:text-yellow-300 px-4 py-2 transition-colors">
            Masuk
          </button>
          <button onClick={() => navigate('/register')} className="bg-white hover:bg-gray-100 text-[#E97451] px-7 py-3 rounded-full text-sm font-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group">
            Daftar Member
            <svg className="w-4 h-4 text-[#E97451] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION ENHANCED */}
      <section id="home" className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8 z-10">
        <div className="flex-1 flex flex-col gap-8 text-center lg:text-left bg-white/70 p-8 rounded-[3rem] backdrop-blur-md border border-white shadow-xl shadow-gray-200/40 relative overflow-hidden">
          {/* Ornamen sudut kotak teks */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E97451]/10 rounded-bl-full blur-xl pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white shadow-sm border border-gray-100 text-[#E97451] text-xs font-bold tracking-wide w-max mx-auto lg:mx-0 z-10">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E97451] opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-[#E97451]"></span></span>
            LAYANAN FARMASI 24/7
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#2D3134] leading-[1.15] tracking-tight z-10">
            Kesehatan Anda, <br/>
            <span className="text-[#E97451] relative inline-block">
              Prioritas Kami.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 -z-10" viewBox="0 0 200 12" fill="currentColor"><path d="M0 6Q50 12 100 6T200 6L200 12L0 12Z" /></svg>
            </span>
          </h1>
          <p className="text-gray-500 text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed z-10 font-medium">
            Pesan obat resep, konsultasi apoteker, dan pantau riwayat kesehatan dalam satu platform cerdas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start z-10">
            <button onClick={() => navigate('/register')} className="bg-[#E97451] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-[#E97451]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              Mulai Konsultasi
            </button>
            <button className="bg-white text-[#2D3134] px-8 py-4 rounded-full font-bold shadow-md border border-gray-100 hover:bg-gray-50 transition-all duration-300">
              Lihat Katalog 
            </button>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="relative w-full aspect-square md:aspect-[4/3] max-w-xl mx-auto">
            {/* Latar Belakang Gambar Tilted */}
            <div className="absolute inset-0 bg-[#E97451] rounded-[3rem] rotate-6 opacity-20 scale-95 blur-sm"></div>
            
            <div className="absolute inset-0 bg-white rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white z-10 group">
               <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop" alt="Apoteker Modern" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            
            {/* Floating Badge 1 (Bawah Kiri) */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-white z-20 animate-[bounce_4s_infinite]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shadow-inner">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sertifikasi Resmi</p>
                  <p className="text-sm font-extrabold text-[#2D3134]">Apoteker SIA</p>
                </div>
              </div>
            </div>

            {/* Floating Badge 2 (Atas Kanan - Penambahan Keramaian) */}
            <div className="absolute -top-8 -right-4 md:-right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white z-20 animate-[pulse_3s_infinite]">
              <div className="flex items-center gap-2">
                <span className="text-xl">💊</span>
                <div>
                  <p className="text-sm font-extrabold text-[#2D3134]">500+ Obat</p>
                  <p className="text-[10px] font-bold text-gray-400">Tersedia di Katalog</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST BANNER (Dibungkus Card Melayang) */}
      <section className="px-6 max-w-7xl mx-auto relative z-20 -mt-8 mb-12">
        <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-white flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <span className="text-xl font-black text-gray-400 hover:text-[#E97451] transition-colors cursor-default">KEMENKES RI</span>
          <span className="text-xl font-black text-gray-400 hover:text-[#E97451] transition-colors cursor-default">BPOM</span>
          <span className="text-xl font-black text-gray-400 hover:text-[#E97451] transition-colors cursor-default flex items-center gap-2"><div className="w-4 h-4 bg-gray-400 hover:bg-[#E97451] transition-colors rounded-sm rotate-45"></div> PAFI</span>
          <span className="text-xl font-black text-gray-400 hover:text-[#E97451] transition-colors cursor-default">BPJS Kesehatan</span>
        </div>
      </section>

      {/* 4. SECTION KLAIM VOUCHER (Card Dark Mode) */}
      <section className="px-6 py-12 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#2D3134] rounded-[3rem] p-10 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#E97451] rounded-full blur-[120px] opacity-30 group-hover:opacity-50 transition-opacity duration-1000"></div>
          
          <div className="flex-1 z-10 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-[#E97451]/20 rounded-lg text-[#E97451] text-xs font-bold tracking-widest uppercase mb-6 border border-[#E97451]/30">Keuntungan Member</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Akses Kesehatan,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E97451] to-yellow-400">Lebih Terjangkau.</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0 mb-10 font-medium">
              Daftar sekarang untuk melacak riwayat medis Anda dan dapatkan voucher potongan langsung untuk pembelian pertama.
            </p>
            
            <div className="bg-white/10 border border-white/20 rounded-full pl-6 pr-2 py-2 flex items-center justify-between gap-6 backdrop-blur-md w-max mx-auto lg:mx-0">
              <span className="font-mono font-bold text-yellow-400 text-xl tracking-widest drop-shadow-md">SEHAT20</span>
              <button onClick={() => { navigator.clipboard.writeText('SEHAT20'); alert('Kode disalin!'); }} className="bg-[#E97451] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#d46543] active:scale-95 transition-all shadow-lg">
                Salin Kode
              </button>
            </div>
          </div>

          <div className="w-full lg:w-auto z-10">
            <div className="relative w-full max-w-xs mx-auto lg:mx-0 lg:w-80 group-hover:-translate-y-4 transition-transform duration-700">
              <div className="relative bg-gradient-to-tr from-[#E97451] to-yellow-400 p-1.5 rounded-[2.2rem] rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <div className="bg-[#FAF6F0] p-8 rounded-[1.8rem] border border-white relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#E97451]/20 rounded-full blur-2xl"></div>
                  <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Voucher Digital</h3>
                  <p className="text-6xl font-black text-[#2D3134] mb-2 tracking-tighter">20<span className="text-4xl">%</span></p>
                  <p className="text-2xl font-black text-[#E97451] mb-6">OFF</p>
                  <div className="border-t-2 border-dashed border-gray-300 pt-4"><p className="text-xs text-gray-500 font-bold">Khusus pengguna baru.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION LAYANAN (Dibungkus Card Putih Besar) */}
      <section id="layanan" className="px-6 py-12 max-w-7xl mx-auto relative z-10">
        <div className="bg-white/90 backdrop-blur-md rounded-[3rem] p-10 md:p-16 shadow-xl shadow-[#E97451]/5 border border-white relative overflow-hidden">
          {/* Latar Belakang Lingkaran Halus dalam Kotak Layanan */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 border-[40px] border-[#FAF6F0] rounded-full opacity-50"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 border-[40px] border-[#FAF6F0] rounded-full opacity-50"></div>
          </div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D3134] mb-4">Layanan Cerdas Kami</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">Dirancang khusus untuk mempermudah urusan kesehatan Anda dengan cepat.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:shadow-2xl hover:border-[#E97451]/30 hover:-translate-y-2 transition-all duration-500 group shadow-md shadow-gray-100">
              <div className="w-16 h-16 bg-[#FAF6F0] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#E97451] transition-colors shadow-sm">
                 <svg className="w-8 h-8 text-[#E97451] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[#2D3134] mb-3">Tebus Resep Online</h3>
              <p className="text-gray-500 font-medium leading-relaxed">Unggah foto resep, dan obat akan dikirimkan ke rumah Anda tanpa antre.</p>
            </div>
            
            <div className="bg-[#E97451] p-8 rounded-[2rem] shadow-xl shadow-[#E97451]/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E97451]/60 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[100%] pointer-events-none"></div>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white transition-colors">
                 <svg className="w-8 h-8 text-white group-hover:text-[#E97451] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3 relative z-10">Chat Apoteker</h3>
              <p className="text-white/90 font-medium leading-relaxed relative z-10">Konsultasikan dosis atau interaksi obat langsung dengan apoteker kami secara real-time.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:shadow-2xl hover:border-[#E97451]/30 hover:-translate-y-2 transition-all duration-500 group shadow-md shadow-gray-100">
              <div className="w-16 h-16 bg-[#FAF6F0] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#E97451] transition-colors shadow-sm">
                 <svg className="w-8 h-8 text-[#E97451] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[#2D3134] mb-3">Pengingat Jadwal</h3>
              <p className="text-gray-500 font-medium leading-relaxed">Fitur pintar kami akan mengingatkan waktu minum obat sesuai anjuran dokter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION TESTIMONI / ULASAN */}
      <section id="testimoni" className="px-6 py-12 max-w-7xl mx-auto relative z-10">
        <div className="bg-white/90 backdrop-blur-md rounded-[3rem] p-10 md:p-16 shadow-xl shadow-[#E97451]/5 border border-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D3134] mb-4">Apa Kata Mereka?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">Pengalaman nyata dari pelanggan yang telah menggunakan layanan ApotekKu.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF6F0]/80 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#E97451]/20 hover:-translate-y-2 transition-all">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5 fill-current drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>))}
              </div>
              <p className="text-gray-600 mb-8 font-bold leading-relaxed">"Sangat membantu! Saya tidak perlu lagi antre panjang di apotek. Tinggal foto resep, obat langsung dikirim."</p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
                <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-12 h-12 rounded-full shadow-md" />
                <div><h4 className="font-extrabold text-[#2D3134]">Budi Santoso</h4><p className="text-xs font-bold text-[#E97451]">Pekerja Kantoran</p></div>
              </div>
            </div>

            <div className="bg-[#FAF6F0]/80 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#E97451]/20 hover:-translate-y-2 transition-all">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5 fill-current drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>))}
              </div>
              <p className="text-gray-600 mb-8 font-bold leading-relaxed">"Konsultasi apotekernya ramah dan responsif. Mereka menjelaskan cara minum antibiotik dengan detail."</p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
                <img src="https://i.pravatar.cc/100?img=9" alt="User" className="w-12 h-12 rounded-full shadow-md" />
                <div><h4 className="font-extrabold text-[#2D3134]">Siti Aminah</h4><p className="text-xs font-bold text-[#E97451]">Ibu Rumah Tangga</p></div>
              </div>
            </div>

            <div className="bg-[#FAF6F0]/80 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#E97451]/20 hover:-translate-y-2 transition-all">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5 fill-current drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>))}
              </div>
              <p className="text-gray-600 mb-8 font-bold leading-relaxed">"Desain webnya modern & mudah digunakan. Voucher diskon member barunya juga lumayan banget!"</p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
                <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-12 h-12 rounded-full shadow-md" />
                <div><h4 className="font-extrabold text-[#2D3134]">Andi Saputra</h4><p className="text-xs font-bold text-[#E97451]">Mahasiswa</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <section className="px-6 max-w-7xl mx-auto relative z-10">
        <footer id="kontak" className="bg-[#2D3134] rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E97451] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          <div className="flex flex-col md:flex-row gap-16 justify-between relative z-10">
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-black text-2xl text-[#E97451] shadow-lg">+</div>
                <span className="text-3xl font-extrabold">Apotek<span className="text-[#E97451]">Ku</span></span>
              </div>
              <p className="text-gray-400 mb-8 font-medium leading-relaxed">Platform farmasi digital yang berdedikasi memberikan akses kesehatan cepat, mudah, & aman.</p>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E97451] hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all"><i className="fa-brands fa-instagram text-xl"></i>IG</div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E97451] hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all"><i className="fa-brands fa-facebook-f text-xl"></i>FB</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-12 md:gap-24">
              <div>
                <h4 className="font-extrabold text-xl mb-6 text-white">Kantor Pusat</h4>
                <p className="text-gray-400 mb-2 font-medium leading-loose">Jl. Umban Sari No.1,<br/>Pekanbaru, Riau 28265<br/>Indonesia</p>
              </div>
              <div>
                <h4 className="font-extrabold text-xl mb-6 text-white">Layanan Bantuan</h4>
                <div className="flex flex-col gap-4 text-gray-400 font-medium">
                  <a href="mailto:halo@apotekku.id" className="hover:text-[#E97451] transition-colors flex items-center gap-3">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                     halo@apotekku.id
                  </a>
                  <a href="tel:+6281122334455" className="hover:text-yellow-400 transition-colors font-bold flex items-center gap-3 text-lg">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                     +62 811 2233 4455
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-center relative z-10">
            <p className="text-sm font-bold text-gray-500">© 2026 ApotekKu. All rights reserved.</p>
          </div>
        </footer>
      </section>

      {/* 8. SMART CHATBOT WIDGET */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
        <div className={`w-[340px] bg-white rounded-[2rem] shadow-2xl mb-4 overflow-hidden border border-gray-100 transition-all duration-400 origin-bottom-right ${isChatOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-4 pointer-events-none'}`}>
          <div className="bg-gradient-to-r from-[#E97451] to-[#d46543] p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner"><svg className="w-6 h-6 text-[#E97451]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg></div>
              <div><p className="font-black text-sm">ApotekBot</p><p className="text-[10px] text-yellow-200 font-bold tracking-wide">ASISTEN 24/7</p></div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="hover:text-yellow-200 transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg></button>
          </div>
          <div className="bg-[#FAF6F0] h-[300px] p-5 overflow-y-auto flex flex-col gap-4">
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm inline-block"><p className="text-[13px] font-medium text-[#2D3134]">Halo! Ada yang bisa dibantu?</p></div>
            <div className="flex flex-col gap-2 mt-2">
              <button className="bg-white border border-[#E97451]/20 text-[#E97451] text-[12px] font-bold px-4 py-2.5 rounded-xl hover:bg-[#E97451] hover:text-white text-left shadow-sm transition-colors">🔍 Cek Stok Obat</button>
              <button className="bg-white border border-[#E97451]/20 text-[#E97451] text-[12px] font-bold px-4 py-2.5 rounded-xl hover:bg-[#E97451] hover:text-white text-left shadow-sm transition-colors">📋 Cara Daftar Member</button>
            </div>
          </div>
          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input type="text" placeholder="Ketik pesan..." className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-[13px] outline-none focus:border-[#E97451] font-medium transition-all" />
            <button className="w-11 h-11 bg-[#2D3134] text-white rounded-full hover:bg-[#E97451] flex items-center justify-center shrink-0 transition-colors shadow-md"><svg className="w-5 h-5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></button>
          </div>
        </div>
        <button onClick={() => setIsChatOpen(!isChatOpen)} className={`bg-[#E97451] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${isChatOpen ? 'rotate-90 bg-[#2D3134]' : 'hover:bg-[#d46543]'}`}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isChatOpen ? "M6 18L18 6M6 6l12 12" : "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"}></path></svg>
        </button>
      </div>

    </div>
  );
}