import {
  FaUserMd,
  FaUserClock,
  FaFileMedical,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function DashboardStats() {
  const stats = [
    {
      title: "Apoteker Aktif",
      val: "12",
      color: "text-green-500",
      bg: "bg-green-50",
      icon: <FaUserMd />,
    },
    {
      title: "Sedang Shift",
      val: "4",
      color: "text-blue-500",
      bg: "bg-blue-50",
      icon: <FaUserClock />,
    },
    {
      title: "Resep Tertunda",
      val: "28",
      color: "text-orange-500",
      bg: "bg-orange-50",
      icon: <FaFileMedical />,
    },
    {
      title: "Lisensi Expired",
      val: "2",
      color: "text-red-500",
      bg: "bg-red-50",
      icon: <FaExclamationTriangle />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-5 shadow flex items-center gap-4"
        >
          <div
            className={`text-xl p-3 rounded-2xl ${item.bg} ${item.color}`}
          >
            {item.icon}
          </div>

          <div>
            <p className="text-[#A9A9A9] text-[10px] uppercase font-bold tracking-widest">
              {item.title}
            </p>

            <h3 className="text-xl font-bold text-[#2D3134]">
              {item.val}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}