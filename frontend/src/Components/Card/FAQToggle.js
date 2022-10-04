import React from "react";
import styles from "./FAQToggle.module.css";

export default function FAQToggle(props) {
  return (
    <div id={props.id} className={`${styles.FAQToggleCard} ${styles.hidden}`}>
      <p>{props.firstPara}</p>
      {props.secondPara === "" ? false : <p>{props.secondPara}</p>}
    </div>
  );
}
