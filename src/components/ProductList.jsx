import ProductCard from "./ProductCard";

export default function ProductList({ products, addToCart }) {
  if (!products.length) return <p>No products found</p>;

  return (
    <div className="grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}
