import Link from "next/link";
import styles from "./NavItems.module.css";
const NavItems = ({ navlink }) => {
  return (
    <Link className={`${styles.navItems}`} href={navlink.href}>
      {navlink.name}
    </Link>
  );
};

export default NavItems;
