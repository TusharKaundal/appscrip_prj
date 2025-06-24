"use client";
import React, { useState } from "react";
import FilterGrid from "./FilterGrid";
import styles from "./ProductView.module.css";
import SideBar from "./ui/SideBar";
import ProductGrid from "./ProductGrid";
import useScreenWidth from "@/app/hooks/useWindowWidth";
import Accordion from "./ui/Accordion";

const FILTERS = {
  "ideal for": ["men", "women", "baby & Kids"],
  occasion: ["Wedding", "Party", "Casual"],
  work: ["Office", "Outdoor", "Home"],
  fabric: ["Cotton", "Silk", "Linen"],
  segment: ["Premium", "Budget", "Luxury"],
  "suitable for": ["Summer", "Winter", "All Seasons"],
  "raw materials": ["Organic", "Synthetic", "Blended"],
  pattern: ["Solid", "Printed", "Striped"],
};

const ProductView = ({ products }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const screenWidth = useScreenWidth();
  // State for each filter's selected options
  const [selectedFilters, setSelectedFilters] = useState(
    Object.fromEntries(Object.keys(FILTERS).map((key) => [key, []]))
  );

  const handleUnselect = (filterKey) => {
    setSelectedFilters((prev) => ({ ...prev, [filterKey]: [] }));
  };

  const handleChange = (filterKey, option) => {
    setSelectedFilters((prev) => {
      const isSelected = prev[filterKey].includes(option);
      let newSelected;
      if (isSelected) {
        newSelected = prev[filterKey].filter((item) => item !== option);
      } else {
        newSelected = [...prev[filterKey], option];
      }
      return { ...prev, [filterKey]: newSelected };
    });
  };

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
          customStyle={(screenWidth ?? 0) < 768 ? "filterOverlay" : ""}
        >
          <div>
            {Object.entries(FILTERS).map(([key, options]) => (
              <Accordion
                key={key}
                heading={key}
                selectedOptions={selectedFilters[key]}
                options={options}
                onUnselect={() => handleUnselect(key)}
                onChange={(option) => handleChange(key, option)}
              />
            ))}
          </div>
        </SideBar>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default ProductView;
