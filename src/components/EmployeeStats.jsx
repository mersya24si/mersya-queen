import {
  FaUserMd,
  FaUserClock,
  FaUserSlash,
  FaUserPlus,
} from "react-icons/fa";

export default function EmployeeStats({ total }) {
  const stats = [
    {
      title: "Total Pharmacist",
      count: total,
      icon: <FaUserMd />,
      bg: "bg-blue-50",
      color: "text-blue-500",
    },
    {
      title: "On Shift",
      count: "6",
      icon: <FaUserClock />,
      bg: "bg-green-50",
      color: "text-green-500",
    },
    {
      title: "Off Duty",
      count: "1",
      icon: <FaUserSlash />,
      bg: "bg-red-50",
      color: "text-red-500",
    },
    {
      title: "Pending",
      count: "2",
      icon: <FaUserPlus />,
      bg: "bg-orange-50",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all"
        >
          <div>
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">
              {item.title}
            </p>

            <h3 className="text-2xl font-bold mt-1 text-[#2D3134]">
              {item.count}
            </h3>
          </div>

          <div className={`text-xl p-4 rounded-2xl ${item.bg} ${item.color}`}>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}