import React, { useState, useEffect } from "react";

// --- 1. REUSABLE COMPONENTS ---

const InputField = ({ label, name, value, onChange, error, type = "text", placeholder }) => (
  <div className="mb-5">
    <label className="block text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-pink-600 mb-2 font-sans italic">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-3 bg-pink-50 border-2 font-serif italic text-sm transition-all focus:outline-none rounded-xl ${
        error 
          ? "border-red-400 ring-2 ring-red-100" 
          : "border-pink-200 focus:border-pink-500 focus:shadow-[4px_4px_0px_0px_rgba(236,72,153,1)]"
      }`}
    />
    {error && (
      <div className="mt-2 p-2 text-[10px] font-mono font-bold uppercase bg-red-50 border-l-4 border-red-400 text-red-600">
        ⚠ Perhatian: {error}
      </div>
    )}
  </div>
);

const SelectField = ({ label, name, value, onChange, options, error }) => (
  <div className="mb-5">
    <label className="block text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-pink-600 mb-2 font-sans italic">
      {label}
    </label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-3 bg-pink-50 border-2 rounded-xl font-serif italic text-sm appearance-none transition-all focus:outline-none ${
          error 
            ? "border-red-400" 
            : "border-pink-200 focus:border-pink-500 focus:shadow-[4px_4px_0px_0px_rgba(236,72,153,1)]"
        }`}
      >
        <option value="">Pilih {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-pink-400">▼</div>
    </div>
    {error && (
      <div className="mt-2 p-2 text-[10px] font-mono font-bold uppercase bg-red-50 border-l-4 border-red-400 text-red-600">
        ⚠ Perhatian: {error}
      </div>
    )}
  </div>
);

// --- 2. MAIN COMPONENT ---

const FormPendaftaran = () => {
  const [formData, setFormData] = useState({ 
    nama: "", 
    email: "", 
    umur: "", 
    jenisTari: "", 
    jadwal: "" 
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = (name, value) => {
    let errorMsg = "";
    if (name === "nama") {
      if (!value) errorMsg = "Nama penari wajib diisi";
      else if (/[0-9]/.test(value)) errorMsg = "Nama tidak boleh mengandung angka";
    }
    if (name === "email") {
      if (!value) errorMsg = "Kontak email wajib diisi";
      else if (!/\S+@\S+\.\S+/.test(value)) errorMsg = "Format email tidak valid";
    }
    if (name === "umur") {
      if (!value) errorMsg = "Usia wajib diisi";
      else if (parseInt(value) < 5) errorMsg = "Minimal usia 5 tahun";
    }
    if (name === "jenisTari" && !value) errorMsg = "Pilih kategori tari";
    if (name === "jadwal" && !value) errorMsg = "Pilih jadwal latihan";
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  useEffect(() => {
    const checkValid = Object.keys(formData).every(k => !validate(k, formData[k]));
    setIsFormValid(checkValid);
  }, [formData]);

  return (
    <div className="bg-[#fff5f7] min-h-screen py-12 px-4 font-sans text-pink-900 selection:bg-pink-200">
      <div className="max-w-2xl mx-auto">
        
        {/* HEADER: TEMA PITA PINK */}
        <div className="bg-pink-500 p-8 md:p-10 text-white text-center border-b-[8px] border-pink-600 rounded-t-[3rem] shadow-xl relative overflow-hidden">
          {/* Aksen Pita (Ribbon) Dekorasi */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-300 rotate-45 opacity-50"></div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-300 -rotate-45 opacity-50"></div>
          
          <span className="uppercase tracking-[0.4em] text-[10px] font-black mb-3 block opacity-90">Pendaftaran Siswa Baru 2026</span>
          <h1 className="text-4xl md:text-5xl font-serif font-black italic uppercase tracking-tighter">Sanggar Mersya Grande</h1>
          <div className="mt-4 flex justify-center items-center gap-2">
            <span className="h-[2px] w-8 bg-pink-200"></span>
            <p className="font-mono text-[10px] uppercase font-bold tracking-widest">Seni Tari & Ekspresi</p>
            <span className="h-[2px] w-8 bg-pink-200"></span>
          </div>
        </div>

        {/* FORM BODY */}
        <div className="bg-white p-8 md:p-12 border-x-2 border-b-2 border-pink-100 rounded-b-[3rem] shadow-[0_20px_50px_rgba(236,72,153,0.1)]">
          <form onSubmit={(e) => { e.preventDefault(); setSubmittedData(formData); }}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <InputField label="Nama Calon Penari" name="nama" value={formData.nama} 
              onChange={handleChange} error={errors.nama} placeholder="Mersya Meylani Putri" />
              
              <InputField label="Email Orang Tua/Wali" name="email" type="email" value={formData.email} 
              onChange={handleChange} error={errors.email} placeholder="mersya@email.com" />
            </div>

            <InputField label="Usia Penari" name="umur" type="number" value={formData.umur} 
            onChange={handleChange} error={errors.umur} placeholder="Contoh: 8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <SelectField label="Kategori Tari" name="jenisTari" value={formData.jenisTari} 
              onChange={handleChange} error={errors.jenisTari} options={["Balet", "Tari Tradisional", "Modern Dance", "K-Pop Dance"]} />
              
              <SelectField label="Pilihan Jadwal" name="jadwal" value={formData.jadwal} 
              onChange={handleChange} error={errors.jadwal} options={["Senin & Rabu", "Selasa & Kamis", "Sabtu Ceria"]} />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="mt-10 flex justify-center">
              {isFormValid ? (
                <button type="submit" className="w-full bg-pink-500 border-4 border-pink-600 text-white px-12 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-pink-600 transition-all shadow-[10px_10px_0px_0px_rgba(236,72,153,0.2)] italic active:translate-y-1 active:shadow-none rounded-2xl">
                  Daftarkan Sekarang 🎀
                </button>
              ) : (
                <div className="w-full text-center py-4 border-4 border-dashed border-pink-100 text-pink-200 font-black uppercase tracking-widest italic cursor-not-allowed rounded-2xl">
                  Lengkapi Data Penari
                </div>
              )}
            </div>
          </form>

          {/* KONFIRMASI DATA - Versi "Premium Member Card" */}
{submittedData && (
  <div className="mt-12 relative animate-in fade-in zoom-in duration-700">
    {/* Dekorasi Pita Fisik (Visual) */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 bg-pink-400 text-white px-6 py-1 rounded-full shadow-lg font-black text-[10px] tracking-[0.3em] uppercase border-2 border-white">
      Official Member
    </div>

    <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-[3rem] p-1 shadow-[0_20px_50px_rgba(236,72,153,0.3)]">
      <div className="bg-pink-600 rounded-[2.8rem] p-8 md:p-10 border-2 border-pink-400/30 overflow-hidden relative">
        
        {/* Pattern Dekoratif Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-30"></div>

        <div className="relative z-10 text-white">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-3xl font-serif font-black italic leading-none">Kartu Registrasi</h3>
              <p className="text-pink-200 font-mono text-[9px] uppercase tracking-[0.4em] mt-2">ID: PITA-{Math.floor(Math.random() * 10000)}</p>
            </div>
            <div className="text-5xl animate-bounce">🎀</div>
          </div>

          <div className="space-y-6">
            {/* Baris Nama */}
            <div className="border-l-4 border-pink-300 pl-6 py-1 bg-white/5 rounded-r-2xl">
              <p className="text-pink-200 text-[9px] font-black uppercase tracking-widest mb-1">Nama Siswa Penari</p>
              <p className="text-2xl font-serif font-bold italic text-white drop-shadow-md">{submittedData.nama}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Kategori */}
              <div className="bg-pink-800/30 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-pink-300 text-[8px] font-black uppercase tracking-widest mb-1">Kategori</p>
                <p className="text-sm font-bold">{submittedData.jenisTari}</p>
              </div>
              {/* Jadwal */}
              <div className="bg-pink-800/30 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-pink-300 text-[8px] font-black uppercase tracking-widest mb-1">Jadwal</p>
                <p className="text-sm font-bold">{submittedData.jadwal}</p>
              </div>
            </div>

            {/* Stamp Verifikasi */}
            <div className="pt-6 flex justify-between items-center border-t border-white/10">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-pink-300 animate-ping"></div>
                <p className="text-[8px] font-mono text-pink-200 tracking-tighter uppercase">Status: Terverifikasi Aktif</p>
              </div>
              <div className="rotate-[-12deg] border-2 border-pink-300 px-4 py-1 rounded-md">
                <p className="text-pink-300 font-black text-[10px] uppercase tracking-tighter">Approved 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
        </div>

        {/* FOOTER: PROMO HADIAH PITA */}
        <div className="mt-10 bg-pink-100 p-6 rounded-[2.5rem] border-2 border-pink-200 shadow-sm flex items-center gap-6 group hover:bg-white transition-all">
          <div className="w-16 h-16 bg-pink-500 rounded-full flex-shrink-0 border-4 border-white shadow-lg group-hover:scale-110 transition-transform flex items-center justify-center text-white text-3xl">🎀</div>
          <div>
            <h3 className="text-lg font-serif font-bold text-pink-800 italic tracking-tight">Dapatkan Sepatu Tari Gratis</h3>
            <p className="text-xs text-pink-600 mt-1 leading-relaxed italic">
              Khusus pendaftaran bulan ini, dapatkan **Pita Rambut Eksklusif** dan diskon pendaftaran siswa baru!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FormPendaftaran;