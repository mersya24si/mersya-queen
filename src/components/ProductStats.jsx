import {
  FaBoxOpen,
  FaLayerGroup,
  FaEllipsisH,
  FaExclamationTriangle,
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
      icon: <FaExclamationTriangle />,
    },
    {
      title: "Categories",
      count: "4",
      icon: <FaEllipsisH />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-white p-5 rounded-2xl shadow flex justify-between items-center"
        >
          <div>
            <p className="text-sm text-gray-500">
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