import React, { useState, useEffect, useRef } from "react";
import { FaUserPlus } from "react-icons/fa";

// 1. Import service userAPI Supabase kamu
import { userAPI } from "../services/userAPI.js";

import EmployeeStats from "../components/EmployeeStats";
import EmployeeSearch from "../components/EmployeeSearch";
import EmployeeTable from "../components/EmployeeTable";

export default function Employee() {
  // 2. Siapkan state untuk menampung data dari Supabase (default array kosong agar tidak error .length)
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  
  const searchInputRef = useRef(null);

  // 3. Fungsi mengambil data dari Supabase
  const loadEmployees = async () => {
    try {
      setLoading(true);
      const data = await userAPI.fetchUsers();
      setEmployees(data || []); // Pastikan jika null/undefined tetap menjadi array kosong
    } catch (error) {
      console.error("Gagal memuat data pegawai:", error);
    } finally {
      setLoading(false);
    }
  };

  // 4. Jalankan loadEmployees saat halaman pertama kali dibuka
  useEffect(() => {
    loadEmployees();
    
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // Filter pencarian berdasarkan state employees dari Supabase
  const filteredEmployee = employees.filter(emp =>
    emp.name && emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mengubah Document Title berdasarkan hasil pencarian
  useEffect(() => {
    document.title = `Ditemukan ${filteredEmployee.length} Apoteker`;
  }, [searchTerm, employees]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-poppins">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          Pharmacist Management
        </h2>

        <button className="bg-[#EF6E4D] text-white px-6 py-2 rounded-xl flex items-center gap-2">
          <FaUserPlus />
          Add Pharmacist
        </button>
      </div>

      {/* Menggunakan length dari state Supabase */}
      <EmployeeStats total={employees.length} />

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h3 className="font-bold text-lg">
            Staff Directory
          </h3>

          <EmployeeSearch
            setSearchTerm={setSearchTerm}
            inputRef={searchInputRef} 
          />
        </div>

        {/* Tampilkan loading jika data sedang diambil */}
        {loading ? (
          <p className="text-center py-4 text-gray-500">Memuat data dari Supabase...</p>
        ) : (
          <EmployeeTable
            employee={filteredEmployee}
            onRefresh={loadEmployees} // Bisa dilempar ke komponen anak untuk trigger refresh setelah delete
          />
        )}
      </div>
    </div>
  );
}