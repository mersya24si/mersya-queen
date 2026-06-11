export default function ProductAdditionalInfo({ product }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-2">
          Status Obat
        </h3>

        {product.category}
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-2">
          Update Inventaris
        </h3>

        Data inventaris terbaru
      </div>
    </div>
  );
}