import { FaSearch } from "react-icons/fa";

export default function ProductSearch({ setSearchTerm }) {
  return (
    <div className="relative">
      <FaSearch className="absolute left-3 top-3 text-gray-400" />

      <input
        type="text"
        placeholder="Search product..."
        className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm outline-none border focus:border-[#EF6E4D]"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}