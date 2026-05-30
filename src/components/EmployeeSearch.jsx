import { FaSearch } from "react-icons/fa";

export default function EmployeeSearch({ setSearchTerm }) {
  return (
    <div className="relative w-full md:w-64">
      <FaSearch
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search name..."
        className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm outline-none border border-gray-200 focus:border-[#EF6E4D]"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}