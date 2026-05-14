import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    // Hanya pembungkus polos tanpa card, padding, atau border
    <div className="min-h-screen w-full">
      <Outlet />
    </div>
  );
}