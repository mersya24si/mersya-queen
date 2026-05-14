import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { FaBriefcaseMedical } from "react-icons/fa";

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
      await axios.post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      });
      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
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
            FarmasiSystem<br />Professional Inventory
          </h1>
          <p className="mb-8 opacity-90">Kelola stok obat dan data apoteker secara efisien dengan sistem terintegrasi.</p>
        </div>
        {/* Ikon Medis Besar */}
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
              <HiOutlineMail className="absolute left-4 top-4.5 text-gray-400" size={20} />
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
                className="w-full pl-12 p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#EF6E4D] transition-all"
              />
            </div>

            <div className="relative">
              <HiOutlineLockClosed className="absolute left-4 top-4.5 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
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
              className="w-full bg-[#EF6E4D] text-white py-4 rounded-xl font-bold hover:bg-[#d65d3e] transition-all shadow-lg shadow-[#EF6E4D]/20"
            >
              {loading ? "Processing..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 text-center text-[#A9A9A9] text-sm">
            Belum punya akun? <span className="font-bold text-[#EF6E4D] cursor-pointer hover:underline">Daftar sekarang</span>
          </div>
        </div>
      </div>
    </div>
  );
}