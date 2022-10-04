import React from "react";
import styles from "./FAQCard.module.css";

export default function FAQCard(props) {
  return (
    <div id="FAQCard1" className={styles.FAQCard}>
      <h4>{props.heading}</h4>
      <i class="fa-light fa-plus fa-3x plusIcon"></i>
    </div>
  );
}
