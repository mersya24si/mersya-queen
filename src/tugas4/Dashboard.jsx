import { useState } from "react";
import Guest from "./components/Guest";
import Admin from "./components/Admin";

export default function Dashboard() {
  const [mode, setMode] = useState("guest");

  return (
    <div className="min-h-screen bg-[#fff5f7]">
      {/* Navbar Premium */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-pink-500 text-white p-2 rounded-2xl rotate-3 group-hover:rotate-12 transition-transform shadow-lg shadow-pink-200">
              <span className="text-xl">🎀</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-pink-600 tracking-tight">Pinky<span className="text-pink-400">Drink</span></h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-pink-300 font-bold -mt-1">Premium Beverage</p>
            </div>
          </div>

          <div className="flex gap-1 bg-pink-50 p-1.5 rounded-2xl border border-pink-100">
            <button
              onClick={() => setMode("guest")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                mode === "guest"
                  ? "bg-white text-pink-600 shadow-sm border border-pink-100"
                  : "text-pink-400 hover:text-pink-600"
              }`}
            >
              <span>🍹</span> Guest
            </button>
            <button
              onClick={() => setMode("admin")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                mode === "admin"
                  ? "bg-white text-pink-600 shadow-sm border border-pink-100"
                  : "text-pink-400 hover:text-pink-600"
              }`}
            >
              <span>⚙️</span> Admin
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content dengan Animasi Sederhana */}
      <main className="transition-all duration-500">
        {mode === "guest" ? <Guest /> : <Admin />}
      </main>

      {/* Footer Sederhana */}
      <footer className="py-8 text-center text-pink-300 text-sm font-medium border-t border-pink-50">
        <p>© 2026 PinkyDrink Boutique. All Rights Reserved 🌸</p>
      </footer>
    </div>
  );
}