"use client";
import React from "react";
import Image from "next/image";
import styles from "./FilterGrid.module.css";
import Dropdown from "./ui/Dropdown";

const FilterGrid = ({ isOpen, handleSideBar, totalProducts }) => {
  const sortOptions = [
    "Recommended",
    "Newest first",
    "Popular",
    "Price: Low to high",
    "Price: High to low",
  ];
  return (
    <div className={styles.filterGrid}>
      <div className={styles.filterTab}>
        <h3>{totalProducts} Items</h3>
        <button
          className={styles.filterShowHideButton}
          onClick={() => {
            handleSideBar((prev) => !prev);
          }}
        >
          <Image
            src="/assets/up.svg"
            alt="filter"
            width={16}
            height={16}
            style={{
              transform: isOpen ? "rotate(90deg)" : "rotate(-90deg)",
            }}
          />
          {isOpen ? "Hide Filter" : "Show Filter"}
        </button>
      </div>
      <div className={styles.filterRecommended}>
        <Dropdown options={sortOptions} defaultOption="Recommended" />
      </div>
    </div>
  );
};

export default FilterGrid;
