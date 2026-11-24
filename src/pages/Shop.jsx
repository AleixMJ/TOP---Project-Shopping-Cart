import useProducts from "../hooks/useProducts.js";

export default function Shop() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  return (
    <>
      <h1>Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}