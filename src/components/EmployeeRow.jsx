import { FaUserCircle } from "react-icons/fa";

export default function EmployeeRow({ emp }) {
  const statusColor =
    emp.status === "On Shift"
      ? "bg-green-100 text-green-600"
      : emp.status === "Off Duty"
      ? "bg-red-100 text-red-600"
      : "bg-yellow-100 text-yellow-600";

  return (
    <tr className="border-t border-gray-100 hover:bg-gray-50 transition group">
      {/* Employee */}
      <td className="p-4 flex items-center gap-3">
        <FaUserCircle className="text-3xl text-gray-400 group-hover:text-blue-500 transition" />

        <div>
          <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition">
            {emp.name}
          </p>
          <p className="text-xs text-gray-400">ID: {emp.id || "-"}</p>
        </div>
      </td>

      {/* Role */}
      <td className="p-4 text-gray-600">{emp.role}</td>

      {/* Status */}
      <td className="p-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}
        >
          {emp.status}
        </span>
      </td>
    </tr>
  );
}