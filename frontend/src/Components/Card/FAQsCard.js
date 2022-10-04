import React from "react";
import styles from "./FAQsCard.module.css";
import FAQCard from "./FAQsCard";

export default function FAQsCard() {
  return (
    <div className={`${styles.Card} ${styles.FAQsCard}`}>
      <div class={styles.h2Container}>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class={styles.FAQContainer}>
        <FAQCard title="What is Netflix?" />
      </div>
    </div>
  );
}
