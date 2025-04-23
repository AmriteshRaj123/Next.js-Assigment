import React from "react";
import styles from "../styles/StoryCard.module.css";

function StoryCard({ imageUrl, views, title, category, date, status }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt="Card visual" className={styles.image} />
        <div className={styles.dark}>
        <div className={styles.views}>
          <span role="img" aria-label="views">
            👁️
          </span>{" "}
          {views}
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.meta}>
            <span className={styles.category}>{category}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.date}>{date}</span>
            <span className={styles.status}>{status}</span>
          </div>
          <div className={styles.Btns}>
          <button className={styles.viewButton}>View</button>
          <button className={styles.viewButton}>•••</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
