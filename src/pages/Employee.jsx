import React, { useState } from 'react';
import { FaSearch, FaUserMd, FaUserClock, FaUserSlash, FaUserPlus, FaEllipsisH } from "react-icons/fa";
// Import data dengan nama yang sesuai dengan file Anda
import EmployeesData from '../data/EmployeesData.json';

export default function Employee() {
  const [searchTerm, setSearchTerm] = useState("");

  // Menggunakan EmployeesData untuk filtering
  const filteredEmployees = EmployeesData.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-poppins">
      
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Pharmacist Management</h2>
        <button className="bg-[#EF6E4D] text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-[#d65d3e] transition-all">
          <FaUserPlus /> Add Pharmacist
        </button>
      </div>

      {/* Stats Cards - Menggunakan EmployeesData.length untuk total */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Pharmacist", count: EmployeesData.length, icon: <FaUserMd /> },
          { title: "On Shift", count: "6", icon: <FaUserClock /> },
          { title: "Off Duty", count: "1", icon: <FaUserSlash /> },
          { title: "Pending", count: "2", icon: <FaUserPlus /> },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">{item.title}</p>
              <h3 className="text-2xl font-bold mt-1">{item.count}</h3>
            </div>
            <div className="text-[#EF6E4D] text-xl bg-orange-50 p-3 rounded-xl">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Tabel Data */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h3 className="font-bold text-lg">Staff Directory</h3>
          <div className="relative w-full md:w-64">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search name..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm outline-none border focus:border-[#EF6E4D]"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 text-xs uppercase border-b border-gray-100">
                <th className="pb-4 font-semibold">ID</th>
                <th className="pb-4 font-semibold">Pharmacist Name</th>
                <th className="pb-4 font-semibold">Role</th>
                <th className="pb-4 font-semibold">Shift</th>
                <th className="pb-4 font-semibold">Status</th>
                <th className="pb-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((emp) => (
                <tr key={emp.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                  <td className="py-4 text-sm font-bold text-gray-700">{emp.id}</td>
                  <td className="py-4 text-sm font-medium">{emp.name}</td>
                  <td className="py-4 text-sm text-gray-500">{emp.role}</td>
                  <td className="py-4 text-sm text-gray-500">{emp.shift}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                      emp.status === "Active" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                    }`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="py-4 text-gray-400 text-center cursor-pointer hover:text-[#EF6E4D]">
                    <FaEllipsisH />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}