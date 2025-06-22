import React, { useState } from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import trimmer from "@/app/utils/helper";

const Card = ({ image, title }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const trimmedTitle = trimmer(title, 20);
  return (
    <div className={styles.card}>
      <Image
        className={styles.productImage}
        src={image}
        alt={title}
        width={100}
        height={100}
      />
      <h3 className={styles.productTitle}>{trimmedTitle}</h3>
      <div className={styles.context}>
        <p>Sign in or Create an account to see pricing</p>
        <div className={styles.favorite}>
          <Image
            src={isFavorite ? "/assets/heart-filled.svg" : "/assets/heart.svg"}
            alt="favorite"
            width={24}
            height={24}
            className={styles.heartIcon}
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
