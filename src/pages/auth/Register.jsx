import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";
import { FaBriefcaseMedical } from "react-icons/fa";

export default function Register() {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen w-full font-poppins bg-white">
      <div className="hidden lg:flex w-1/2 bg-[#EF6E4D] flex-col justify-center items-center p-12 text-white">
        <h1 className="text-4xl font-bold mb-6">Join FarmasiSystem</h1>
        <p className="opacity-90 text-lg text-center max-w-sm">Mulai kelola inventaris obat apotek Anda dengan sistem yang mudah dan terintegrasi.</p>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold text-[#2D3134] mb-8">Create Account</h2>
          <form className="space-y-4">
            <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full pl-4 p-4 rounded-xl bg-gray-50 border border-gray-100" />
            <input name="email" placeholder="Email Address" onChange={handleChange} className="w-full pl-4 p-4 rounded-xl bg-gray-50 border border-gray-100" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full pl-4 p-4 rounded-xl bg-gray-50 border border-gray-100" />
            
            <button className="w-full bg-[#EF6E4D] text-white py-4 rounded-xl font-bold hover:bg-[#d65d3e]">Sign Up</button>
          </form>
          <p className="mt-6 text-center text-sm text-[#A9A9A9]">
            Sudah punya akun? <span onClick={() => navigate("/login")} className="text-[#EF6E4D] font-bold cursor-pointer hover:underline">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}