import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

import EmployeesData from "../data/EmployeesData.json";

import EmployeeStats from "../components/EmployeeStats";
import EmployeeSearch from "../components/EmployeeSearch";
import EmployeeTable from "../components/EmployeeTable";


export default function Employee() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = EmployeesData.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <EmployeeStats total={EmployeesData.length} />

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

          <h3 className="font-bold text-lg">
            Staff Directory
          </h3>

          <EmployeeSearch
            setSearchTerm={setSearchTerm}
          />

        </div>

        <EmployeeTable
          employees={filteredEmployees}
        />

      </div>

    </div>
  );
}