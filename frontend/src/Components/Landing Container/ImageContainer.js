import React from "react";
import styles from "./ImageContainer.module.css";

export default function ImageContainer(props) {
  return <div className={styles.imageContainer}>{props.children}</div>;
}
