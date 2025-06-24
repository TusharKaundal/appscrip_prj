"use client";
import React from "react";
import styles from "./SideBar.module.css";
import Image from "next/image";
import Checkbox from "./Checkbox";
const SideBar = ({ title, isOpen, children, customStyle = "", handleMenu }) => {
  return (
    <aside
      className={`${styles.sideBar}${
        customStyle ? " " + styles[customStyle] : ""
      }${isOpen ? " " + styles.open : ""}`}
    >
      <div className={styles.sideBarHeader}>
        {title === "menu" ? (
          <>
            <h3>{title}</h3>
            <button className={styles.closeButton} onClick={handleMenu}>
              <Image
                src="/assets/close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </button>
          </>
        ) : (
          <div
            style={{
              fontSize: "14px",
              fontFamily: "var(--font-inter)",
              fontWeight: 700,
              paddingInline: "5px",
            }}
          >
            <Checkbox label={"Customizable"} id={"Customizable"} />
          </div>
        )}
      </div>
      <div className={styles.sideBarContent}>{children}</div>
    </aside>
  );
};

export default SideBar;
