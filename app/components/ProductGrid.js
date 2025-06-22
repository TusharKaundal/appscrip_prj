import React from "react";
import Card from "./ui/Card";
import styles from "./ProductGrid.module.css";
const ProductGrid = ({ products }) => {
  return (
    <div className={styles.productGridContainer}>
      {products.map((product) => (
        <Card key={product.id} title={product.title} image={product.image} />
      ))}
      hi
    </div>
  );
};

export default ProductGrid;
