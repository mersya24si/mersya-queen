import { FaUser } from "react-icons/fa";

export default function PharmacistList() {
  const pharmacists = [
    { nama: "Budi, Apt", posisi: "Kepala Farmasi" },
    { nama: "Siti, Apt", posisi: "Farmasi Klinis" },
    { nama: "Andi, Apt", posisi: "Asisten Apoteker" }
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow border">
      <h3 className="font-bold mb-6">Apoteker Bertugas</h3>

      {pharmacists.map((apo, i) => (
        <div key={i} className="flex items-center gap-3 mb-4">
          <FaUser />
          <div>
            <p>{apo.nama}</p>
            <p>{apo.posisi}</p>
          </div>
        </div>
      ))}
    </div>
  );
}