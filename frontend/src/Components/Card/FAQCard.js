import React from "react";
import styles from "../FAQCard.module.css";

export default function FAQCard(props) {
  return (
    <div id={props.id} class={styles.FAQCard}>
      <h4>{props.title}</h4>
      {/* <i class="fa-light fa-plus fa-3x plusIcon"></i> */}
    </div>
  );
}
