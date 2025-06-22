import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = ({ navlinks }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlinks}>
        {navlinks
          .filter((link) => link.name !== "Home")
          .map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
