"use client";
import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import useWindowWidth from "../hooks/useWindowWidth";

const HeaderActions = () => {
  const windowWidth = useWindowWidth();
  return (
    <div className={styles.actions}>
      <Image src="/assets/search.svg" alt="search" width={24} height={24} />
      <Image src="/assets/heart.svg" alt="heart" width={24} height={24} />
      <Image src="/assets/bag.svg" alt="bag" width={24} height={24} />
      {windowWidth > 850 && (
        <>
          <Image src="/assets/avatar.svg" alt="avatar" width={24} height={24} />
          <div className={styles.language}>
            ENG <Image src="/assets/up.svg" alt="up" width={16} height={16} />
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderActions;
