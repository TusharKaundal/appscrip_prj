import React, { useState } from "react";
import styles from "./Accordion.module.css";
import Checkbox from "./Checkbox";
import Image from "next/image";

const Accordion = ({
  heading,
  selectedOptions,
  options,
  onUnselect,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const allSelected =
    options.length > 0 && selectedOptions.length === options.length;

  return (
    <div className={`${styles.accordion}${open ? " " + styles.open : ""}`}>
      <div className={styles.header} onClick={() => setOpen(!open)}>
        <div className={styles.heading}>
          {heading}
          <Image
            className={open ? styles.arrowUp : styles.arrow}
            src="/assets/up.svg"
            alt="down"
            width={16}
            height={16}
          />
        </div>
        {selectedOptions.length > 0 && (
          <div className={styles.selectedOptions}>
            {allSelected
              ? "All"
              : selectedOptions.length > 0
              ? selectedOptions.join(", ")
              : ""}
          </div>
        )}
      </div>

      <div className={`${styles.content}${open ? " " + styles.open : ""}`}>
        <button className={styles.unselectBtn} onClick={onUnselect}>
          Unselect all
        </button>
        <div className={styles.options}>
          {options.map((option, idx) => (
            <Checkbox
              key={option}
              label={option}
              checked={selectedOptions.includes(option)}
              onChange={() => onChange(option)}
              id={option + idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
