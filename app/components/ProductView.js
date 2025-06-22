"use client";
import React, { useState } from "react";
import FilterGrid from "./FilterGrid";
import styles from "./ProductView.module.css";
import SideBar from "./ui/SideBar";
import ProductGrid from "./ProductGrid";

const ProductView = ({ products }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className={styles.productView}>
      <FilterGrid
        isOpen={isSideBarOpen}
        handleSideBar={setIsSideBarOpen}
        totalProducts={products.length}
      />
      <div className={styles.productFilterContainer}>
        <SideBar title="filter" isOpen={isSideBarOpen}>
          filter
        </SideBar>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default ProductView;
