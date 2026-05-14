import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Forgot  () {
  return (
    <div className="flex h-screen w-full font-poppins bg-white">
      <div className="hidden lg:flex w-1/2 bg-[#EF6E4D] flex-col justify-center items-center p-12 text-white">
        <h1 className="text-4xl font-bold mb-6">Reset Password</h1>
        <p className="opacity-90 text-lg text-center max-w-sm">Kami akan mengirimkan instruksi pemulihan ke email Anda.</p>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold text-[#2D3134] mb-2">Forgot Password?</h2>
          <p className="text-[#A9A9A9] mb-8 text-sm">Masukkan email yang terdaftar.</p>
          
          <form className="space-y-4">
            <input type="email" placeholder="Enter Registered Email" className="w-full pl-4 p-4 rounded-xl bg-gray-50 border border-gray-100" />
            
            <button className="w-full bg-[#EF6E4D] text-white py-4 rounded-xl font-bold hover:bg-[#d65d3e]">Send Reset Link</button>
          </form>
          
          <button onClick={() => navigate("/login")} className="mt-6 w-full text-center text-sm text-[#A9A9A9] hover:text-[#EF6E4D]">
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
}