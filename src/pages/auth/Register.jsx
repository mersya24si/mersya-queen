import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";

// Import API Service dari folder services dengan jalur yang benar (naik 2 tingkat)
import { userAPI } from "../../services/userAPI.js";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // Menambahkan field role secara default (Asisten Apoteker)
  const [dataForm, setDataForm] = useState({ 
    name: "", 
    email: "", 
    password: "",
    role: "Asisten Apoteker" 
  });

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  // Fungsi Submit Form ke Supabase
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Mengirimkan data form langsung ke tabel employee Supabase
      await userAPI.createUser(dataForm);
      alert("Pendaftaran Berhasil! Silakan masuk dengan akun baru Anda.");
      
      // Diarahkan langsung ke /login sesuai rute di App.jsx kamu
      navigate("/login"); 
    } catch (error) {
      alert("Pendaftaran gagal: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full font-poppins bg-white">
      {/* Sisi Kiri - Banner Informasi */}
      <div className="hidden lg:flex w-1/2 bg-[#EF6E4D] flex-col justify-center items-center p-12 text-white">
        <h1 className="text-4xl font-bold mb-6">Join FarmasiSystem</h1>
        <p className="opacity-90 text-lg text-center max-w-sm">
          Mulai kelola inventaris obat apotek Anda dengan sistem yang mudah dan terintegrasi.
        </p>
      </div>

      {/* Sisi Kanan - Form Pendaftaran */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold text-[#2D3134] mb-8">Create Account</h2>
          
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Input Nama */}
            <div className="relative flex items-center">
              <HiOutlineUser className="absolute left-4 text-gray-400" size={20} />
              <input 
                name="name" 
                required
                type="text"
                placeholder="Full Name" 
                onChange={handleChange} 
                className="w-full pl-12 p-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-[#EF6E4D]" 
              />
            </div>

            {/* Input Email */}
            <div className="relative flex items-center">
              <HiOutlineMail className="absolute left-4 text-gray-400" size={20} />
              <input 
                type="email"
                name="email" 
                required
                placeholder="Email Address" 
                onChange={handleChange} 
                className="w-full pl-12 p-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-[#EF6E4D]" 
              />
            </div>

            {/* Input Password */}
            <div className="relative flex items-center">
              <HiOutlineLockClosed className="absolute left-4 text-gray-400" size={20} />
              <input 
                type="password" 
                name="password" 
                required
                placeholder="Password" 
                onChange={handleChange} 
                className="w-full pl-12 p-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-[#EF6E4D]" 
              />
            </div>

            {/* Input Tambahan: Role / Jabatan (Sangat Penting untuk Supabase) */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 pl-1">Role / Jabatan</label>
              <select 
                name="role"
                value={dataForm.role}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 outline-none text-gray-600 focus:border-[#EF6E4D] cursor-pointer"
              >
                <option value="Asisten Apoteker">Asisten Apoteker</option>
                <option value="Farmasi Klinis">Farmasi Klinis</option>
                <option value="Kepala Farmasi">Kepala Farmasi</option>
              </select>
            </div>
            
            {/* Tombol Sign Up */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#EF6E4D] text-white py-4 rounded-xl font-bold hover:bg-[#d65d3e] transition-colors disabled:opacity-50"
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#A9A9A9]">
            Sudah punya akun?{" "}
            {/* Diperbaiki dari /auth/login menjadi /login agar sinkron dengan rute */}
            <span onClick={() => navigate("/login")} className="text-[#EF6E4D] font-bold cursor-pointer hover:underline">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}