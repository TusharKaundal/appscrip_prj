import Link from "next/link";
import styles from "./Navbar.module.css";
import SideBar from "./ui/SideBar";
import NavItems from "./ui/navItems";

const Navbar = ({ navlinks, isMenuOpen, handleMenu }) => {
  return (
    <>
      <SideBar
        title="menu"
        isOpen={isMenuOpen}
        customStyle="overlay"
        handleMenu={handleMenu}
      >
        {navlinks.map((link) => (
          <NavItems key={link.name} navlink={link} />
        ))}
      </SideBar>

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
    </>
  );
};

export default Navbar;
