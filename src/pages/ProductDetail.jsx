import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../data/ProductsData.json"; 
import { 
  FaArrowLeft, 
  FaCapsules, 
  FaTag, 
  FaWarehouse, 
  FaClipboardCheck, 
  FaInfoCircle,
  FaFilePrescription
} from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find((item) => item.id === Number(id));
    if (foundProduct) setProduct(foundProduct);
  }, [id]);

  if (!product) return <div className="p-8 text-center text-[#A9A9A9]">Loading data obat...</div>;

  return (
    <div className="min-h-screen p-8 bg-[#FCFAF9] font-poppins text-[#2D3134]">
      {/* Tombol Kembali */}
      <button onClick={() => navigate(-1)} className="mb-8 flex items-center space-x-2 text-[#A9A9A9] hover:text-[#2D3134] transition-all">
        <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
          <FaArrowLeft size={14} />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest">Kembali ke Inventaris</span>
      </button>

      <div className="bg-white rounded-[48px] shadow-sm border border-gray-50 overflow-hidden max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* BAGIAN KIRI: VISUAL MEDIS */}
          <div className="p-12 bg-gray-50 flex items-center justify-center">
            <div className="relative w-full h-[400px] bg-white rounded-[32px] flex flex-col items-center justify-center border border-gray-100 shadow-lg">
               <FaCapsules className="text-[#EF6E4D] mb-6 opacity-80" size={100} />
               <div className="bg-[#FFF2EE] px-4 py-2 rounded-full">
                 <p className="text-[#EF6E4D] font-bold text-xs uppercase tracking-widest">{product.category}</p>
               </div>
            </div>
          </div>

          {/* BAGIAN KANAN: DETAIL OBAT */}
          <div className="p-12 flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-6">
              <span className="px-4 py-1.5 bg-[#EF6E4D]/10 text-[#EF6E4D] text-[10px] font-bold uppercase tracking-widest rounded-full">
                {product.category}
              </span>
              <span className="text-[10px] font-bold text-[#A9A9A9] tracking-widest uppercase italic">
                SKU: {product.code}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-[#2D3134] mb-4 tracking-tight">{product.title}</h1>
            
            <p className="text-[#A9A9A9] text-sm mb-8 flex items-center">
              <FaTag className="mr-2 opacity-50" /> 
              Produsen: <span className="text-[#2D3134] ml-1 font-semibold">{product.brand}</span>
            </p>

            <div className="space-y-6 mb-10">
              <p className="text-[#A9A9A9] leading-relaxed text-sm">
                Informasi detail untuk obat <strong>{product.title}</strong> produksi <strong>{product.brand}</strong>. 
                Produk ini terdaftar dalam kategori {product.category} dengan stok yang tersedia saat ini di apotek.
              </p>

              <div className="flex items-center space-x-8">
                <div>
                  <p className="text-[10px] text-[#A9A9A9] uppercase tracking-widest font-bold mb-1">Harga Satuan</p>
                  <p className="text-3xl font-bold text-[#2D3134]">{product.price}</p>
                </div>
                <div className="h-10 w-[1px] bg-gray-100"></div>
                <div>
                  <p className="text-[10px] text-[#A9A9A9] uppercase tracking-widest font-bold mb-1">Stok Tersedia</p>
                  <p className="text-lg font-bold flex items-center text-[#2D3134]">
                    <FaWarehouse className="mr-2 text-[#EF6E4D]" /> {product.stock} unit
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-[#EF6E4D] text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 shadow-lg shadow-[#EF6E4D]/20 hover:bg-[#d65d3e] transition-all">
                <FaFilePrescription size={16} />
                <span>Input Resep</span>
              </button>
              <button className="px-8 py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 flex items-center justify-center">
                <FaClipboardCheck className="text-[#EF6E4D]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Tambahan */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Status Obat", val: "Tersedia", icon: <FaInfoCircle /> },
            { title: "Kategori", val: product.category, icon: <FaTag /> },
            { title: "Manajemen", val: "Update Inventaris", icon: <FaWarehouse /> }
          ].map((info, i) => (
            <div key={i} className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="text-[#EF6E4D] bg-orange-50 p-3 rounded-xl">{info.icon}</div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#A9A9A9]">{info.title}</p>
                <p className="text-sm font-bold text-[#2D3134]">{info.val}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}