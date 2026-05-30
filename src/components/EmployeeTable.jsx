import EmployeeRow from "./EmployeeRow";

export default function EmployeeTable({ employees = [] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 text-left text-xs uppercase text-gray-500">
          <tr>
            <th className="p-4">Employee</th>
            <th className="p-4">Role</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, i) => (
            <EmployeeRow key={i} emp={emp} />
          ))}
        </tbody>
      </table>
    </div>
  );
}