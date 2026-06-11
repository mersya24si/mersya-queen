export default function ProductInfoCard({ product }) {
  return (
    <>
      <h2 className="text-2xl font-bold">
        {product.title}
      </h2>

      <p className="text-gray-500">
        {product.brand}
      </p>
    </>
  );
}