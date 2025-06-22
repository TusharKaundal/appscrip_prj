import React from "react";
import styles from "./SideBar.module.css";
import Image from "next/image";
const SideBar = ({ title, isOpen, children, customStyle = "", handleMenu }) => {
  return (
    <aside
      className={`${styles.sideBar} ${
        customStyle ? styles[customStyle] : ""
      }  ${isOpen ? styles.open : ""}`}
    >
      <div className={styles.sideBarHeader}>
        <h3>{title}</h3>
        {title === "menu" && (
          <button className={styles.closeButton} onClick={handleMenu}>
            <Image src="/assets/close.svg" alt="close" width={24} height={24} />
          </button>
        )}
      </div>
      <div className={styles.sideBarContent}>{children}</div>
    </aside>
  );
};

export default SideBar;
