import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button className={styles.signInButton} type="button">
      {props.title}
    </button>
  );
}
