import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { FaBriefcaseMedical } from "react-icons/fa";

import { userAPI } from "../../services/userAPI.js";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [dataForm, setDataForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. Panggil fungsi login baru yang terhubung ke Supabase
      const user = await userAPI.loginUser(dataForm.email, dataForm.password);

      // 2. Jika user ditemukan, simpan status login ke localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(user));

      // Pindahkan ke dashboard utama
      window.location.href = "/";
      
    } catch (err) {
      // Menangkap pesan error dari throw Error di userAPI
      alert(err.message || "Login gagal. Periksa kembali jaringan atau kredensial Anda.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full font-poppins bg-[#FCFAF9]">
      {/* BAGIAN KIRI: DEKORATIF MEDIS */}
      <div className="hidden lg:flex w-1/2 bg-[#EF6E4D] flex-col justify-center items-center p-12 text-white">
        <div className="text-left w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Farmasi System<br />Professional Inventory
          </h1>
          <p className="mb-8 opacity-90">Kelola stok obat dan data apoteker secara efisien dengan sistem terintegrasi.</p>
        </div>
        <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
          <FaBriefcaseMedical size={100} className="text-white/30" />
        </div>
      </div>

      {/* BAGIAN KANAN: FORM LOGIN */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-[#2D3134] mb-8">Sign In</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <HiOutlineMail className="absolute left-4 top-[18px] text-gray-400" size={20} />
              <input
                type="email" // Ubah type ke email agar lebih valid
                name="email"
                placeholder="Enter Your Email"
                required
                onChange={handleChange}
                className="w-full pl-12 p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#EF6E4D] transition-all"
              />
            </div>

            <div className="relative">
              <HiOutlineLockClosed className="absolute left-4 top-[18px] text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                required
                onChange={handleChange}
                className="w-full pl-12 pr-12 p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#EF6E4D] transition-all"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-gray-400">
                {showPassword ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
              </button>
            </div>

            <p className="text-right text-sm text-[#A9A9A9] cursor-pointer hover:text-[#EF6E4D]">Recover Password ?</p>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#EF6D4D] text-white py-4 rounded-xl font-bold hover:bg-[#d65d3e] transition-all shadow-lg shadow-[#EF6E4D]/20 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 text-center text-[#A9A9A9] text-sm">
            Belum punya akun?{" "}
            <span 
              onClick={() => navigate("/register")} 
              className="font-bold text-[#EF6E4D] cursor-pointer hover:underline"
            >
              Daftar sekarang
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}