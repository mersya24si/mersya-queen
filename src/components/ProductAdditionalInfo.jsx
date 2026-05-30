export default function ProductAdditionalInfo({ product }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-xl">
        Status Obat
      </div>

      <div className="bg-white p-6 rounded-xl">
        {product.category}
      </div>

      <div className="bg-white p-6 rounded-xl">
        Update Inventaris
      </div>
    </div>
  );
}