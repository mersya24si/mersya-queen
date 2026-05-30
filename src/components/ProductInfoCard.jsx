export default function ProductInfoCard({ product }) {
  return (
    <>
      <h1 className="text-4xl font-bold">
        {product.title}
      </h1>

      <p>
        {product.brand}
      </p>
    </>
  );
}