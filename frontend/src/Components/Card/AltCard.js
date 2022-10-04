import React from "react";
import styles from "./Card.module.css";
import Image from "./Image";

export default function Card(props) {
  return (
    <div className={styles.Card}>
      <div
        className={`d-flex align-items-center ${styles.cardContentContainer}`}
      >
        <Image src={props.src} alt={props.alt} />
        <div className={styles.descRightContainer}>
          <h2>{props.heading}</h2>
          <div className={styles.h4Container}>
            <h4>{props.desc}</h4>
            {/* <h4>Chromecast, Apple TV, Blu-ray players and</h4>
          <h4>more.</h4> */}
          </div>
        </div>
      </div>
    </div>
  );
}
