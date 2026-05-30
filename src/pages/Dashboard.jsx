import React from "react";
import DashboardStats from "../components/DashboardStats";
import DashboardChart from "../components/DashboardChart";
import PharmacistList from "../components/PharmacistList";

export default function Dashboard() {
  return (
    <div className="p-8 bg-[#FCFAF9] min-h-screen font-poppins">
      <h2 className="text-2xl font-bold mb-6 text-[#2D3134]">
        Dashboard Apotek
      </h2>

      <DashboardStats />

      <div className="grid grid-cols-3 gap-8">
        <DashboardChart />
        <PharmacistList />
      </div>
    </div>
  );
}