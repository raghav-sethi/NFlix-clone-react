import React from "react";
import Form from "../Form/Form";
import styles from "./LandingContentContainer.module.css";

export default function LandingContentContainer() {
  return (
    <div className={styles.landingContentContainer}>
      <h2 className={styles.landingH2}>Unlimited movies, TV shows and more.</h2>
      <h4 className={styles.landingH4}>Watch anywhere. Cancel anytime.</h4>
      <Form />
    </div>
  );
}
