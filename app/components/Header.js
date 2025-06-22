"use client";
import { useState } from "react";
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
    { name: "Contact", href: "/" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image src="/assets/logo.svg" alt="logo" width={36} height={36} />
        </div>

        <h1 className={styles.logo}>LOGO</h1>
        <HeaderActions />
      </div>
      <Navbar navlinks={navLinks} />
    </header>
  );
}
