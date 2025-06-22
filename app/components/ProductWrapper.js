import ProductView from "./ProductView";
const ProductGrid = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  

  return <ProductView products={data} />;
};

export default ProductGrid;
