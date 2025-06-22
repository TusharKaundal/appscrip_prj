"use client";
import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import Image from "next/image";

const Dropdown = ({ options = [], defaultOption = "Recommended" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.customInput} onClick={toggleDropdown}>
        <span className={styles.selectedText}>{selectedOption}</span>
        <div className={`${styles.arrow} ${isOpen ? styles.arrowUp : ""}`}>
          <Image
            src="/assets/up.svg"
            alt="dropdown arrow"
            width={16}
            height={16}
          />
        </div>
      </div>

      <div className={`${styles.dropdownOptions} ${isOpen ? styles.open : ""}`}>
        {options.map((option) => (
          <div
            key={option}
            className={`${styles.option} ${
              selectedOption === option ? styles.selected : ""
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            {selectedOption === option && (
              <div className={styles.tickIcon}>
                <Image
                  src="/assets/tick.svg"
                  alt="tick"
                  width={16}
                  height={16}
                />
              </div>
            )}
            <span className={styles.optionText}>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
