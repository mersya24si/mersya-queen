import ProductRow from "./ProductRow";

export default function ProductTable({
  products,
  getCategoryStyle
}) {
  return (
    <table className="w-full">
      <tbody>
        {products.map((prod) => (
          <ProductRow
            key={prod.id}
            prod={prod}
            getCategoryStyle={getCategoryStyle}
          />
        ))}
      </tbody>
    </table>
  );
}