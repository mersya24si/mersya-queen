import {
  FaBoxOpen,
  FaLayerGroup,
  FaEllipsisH,
} from "react-icons/fa";

export default function ProductStats({ total }) {
  const stats = [
    {
      title: "Total Products",
      count: total,
      icon: <FaBoxOpen />,
    },
    {
      title: "Low Stock",
      count: "12",
      icon: <FaLayerGroup />,
    },
    {
      title: "Expired Soon",
      count: "5",
      icon: <FaEllipsisH />,
    },
    {
      title: "Categories",
      count: "4",
      icon: <FaEllipsisH />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between"
        >
          <div>
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">
              {item.title}
            </p>

            <h3 className="text-2xl font-bold mt-1">
              {item.count}
            </h3>
          </div>

          <div className="text-[#EF6E4D] text-xl bg-orange-50 p-3 rounded-xl">
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}