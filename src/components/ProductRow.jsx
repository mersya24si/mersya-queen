import { Link } from "react-router-dom";

export default function ProductRow({ prod, getCategoryStyle }) {
  return (
    <tr className="border-b">
      <td className="px-6 py-4">{prod.code}</td>

      <td className="px-6 py-4">
        <Link
          to={`/products/${prod.id}`}
          className="text-emerald-400 hover:text-emerald-500"
        >
          {prod.title}
        </Link>
      </td>

      <td className="py-4 text-sm text-gray-500">
        {prod.brand}
      </td>

      <td className="py-4">
        <span
          className={`px-3 py-1 rounded-full text-[10px] font-bold ${getCategoryStyle(
            prod.category
          )}`}
        >
          {prod.category}
        </span>
      </td>

      <td className="py-4 text-sm text-gray-700">
        {prod.stock} units
      </td>

      <td className="py-4 text-sm font-bold text-right text-[#EF6E4D]">
        {prod.price}
      </td>
    </tr>
  );
}