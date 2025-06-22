"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import HeaderActions from "./HeaderActions";

export default function Header() {

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/" },
    { name: "Skills", href: "/" },
    { name: "Stories", href: "/" },
    { name: "About", href: "/" },
    { name: "Contact Us", href: "/" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image
            className={`${styles.navMenu} ${styles.mobile}`}
            src="/assets/menu.svg"
            alt="menu"
            width={20}
            height={20}
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
            }}
          />
          <Image
            className={styles.mobile}
            src="/assets/logo.svg"
            alt="logo"
            width={20}
            height={20}
          />
          <Image
            className={styles.logoImage}
            src="/assets/logo.svg"
            alt="logo"
            width={36}
            height={36}
          />
        </div>

        <h1 className={styles.logo}>LOGO</h1>
        <HeaderActions />
      </div>
      <Navbar
        navlinks={navLinks}
        isMenuOpen={isMenuOpen}
        handleMenu={() => setIsMenuOpen((prev) => !prev)}
      />
    </header>
  );
}
