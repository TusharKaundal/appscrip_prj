"use client";
import React, { useState } from "react";
import FilterGrid from "./FilterGrid";
import styles from "./ProductView.module.css";
import SideBar from "./ui/SideBar";
import ProductGrid from "./ProductGrid";
import useScreenWidth from "@/app/hooks/useWindowWidth";

const ProductView = ({ products }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const screenWidth = useScreenWidth();
  return (
    <div className={styles.productView}>
      <FilterGrid
        isOpen={isSideBarOpen}
        handleSideBar={setIsSideBarOpen}
        totalProducts={products.length}
      />
      <div className={styles.productFilterContainer}>
        <SideBar
          title="filter"
          isOpen={isSideBarOpen}
          customStyle={screenWidth < 768 ? "filterOverlay" : ""}
        >
          filter
        </SideBar>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default ProductView;
