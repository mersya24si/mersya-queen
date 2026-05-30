import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", val: 40 },
  { name: "Tue", val: 55 },
  { name: "Wed", val: 45 },
  { name: "Thu", val: 65 }
];

export default function DashboardChart() {
  return (
    <div className="col-span-2 bg-white p-8 rounded-3xl shadow border">
      <h3 className="font-bold mb-6">Tren Resep Masuk</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="val" stroke="#EF6E4D" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}