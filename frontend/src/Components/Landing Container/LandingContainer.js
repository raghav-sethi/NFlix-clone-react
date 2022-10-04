import React from "react";
import styles from "./LandingContainer.module.css";

export default function LandingContainer(props) {
  return (
    <>
      <div className={styles.landingContainer}>{props.children}</div>
    </>
  );
}
