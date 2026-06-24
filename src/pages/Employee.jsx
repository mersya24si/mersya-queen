import React, { useState, useEffect, useRef } from "react";
import { FaUserPlus } from "react-icons/fa";

import EmployeeData from "../data/EmployeeData.json";

import EmployeeStats from "../components/EmployeeStats";
import EmployeeSearch from "../components/EmployeeSearch";
import EmployeeTable from "../components/EmployeeTable";

export default function Employee() {
  // 1. useState: Menyimpan state pencarian
  const [searchTerm, setSearchTerm] = useState("");
  
  // 2. useRef: Menyimpan referensi langsung ke elemen input DOM pencarian
  const searchInputRef = useRef(null);

  const filteredEmployee = EmployeeData.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 3. useEffect (Skenario 1): Auto-focus pada input saat komponen pertama kali dimuat
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // Mengarahkan kursor secara otomatis
    }
  }, []); // Dependency array kosong = hanya berjalan satu kali (saat mount)

  // 4. useEffect (Skenario 2): Mengubah Document Title berdasarkan pencarian
  useEffect(() => {
    document.title = `Ditemukan ${filteredEmployee.length} Apoteker`;
  }, [searchTerm]); // Berjalan setiap kali searchTerm berubah

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

      <EmployeeStats total={EmployeeData.length} />

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h3 className="font-bold text-lg">
            Staff Directory
          </h3>

          <EmployeeSearch
            setSearchTerm={setSearchTerm}
            // Passing ref ini ke dalam EmployeeSearch component
            inputRef={searchInputRef} 
          />
        </div>

        <EmployeeTable
          employee={filteredEmployee}
        />
      </div>
    </div>
  );
}