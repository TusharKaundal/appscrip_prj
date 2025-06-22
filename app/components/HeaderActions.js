import Image from "next/image";
import styles from "./Header.module.css";
import Dropdown from "./ui/Dropdown";

const HeaderActions = () => {
  return (
    <div className={styles.actions}>
      <Image
        className={styles.icon}
        src="/assets/search.svg"
        alt="search"
        width={24}
        height={24}
      />
      <Image
        className={styles.icon}
        src="/assets/heart.svg"
        alt="heart"
        width={24}
        height={24}
      />
      <Image
        className={styles.icon}
        src="/assets/bag.svg"
        alt="bag"
        width={24}
        height={24}
      />
      <Image
        className={styles.remove}
        src="/assets/avatar.svg"
        alt="avatar"
        width={24}
        height={24}
      />
      <div className={styles.remove}>
        <Dropdown options={["ENG", "HI"]} defaultOption="ENG" />
      </div>
    </div>
  );
};

export default HeaderActions;
