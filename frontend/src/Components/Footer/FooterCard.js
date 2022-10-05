import React from "react";
import Link from "./Link";
import styles from "./FooterCard.module.css";
export default function FooterCard() {
  return (
    <div
      className={`${styles.footerCard} ${styles.Card} d-flex flex-column align-items-start`}
    >
      <div>
        <p className={`${styles.questionsPara}`}>
          Questions? Call <a href="/">000-800-040-1843</a>
        </p>
      </div>
      <div className={`${styles.footerLinks} d-flex`}>
        <div className={`${styles.linkColumn} `}>
          <Link href="/" linkName="FAQ" />
          <Link href="/" linkName="Investor Relations" />
          <Link href="/" linkName="Privacy" />
          <Link href="/" linkName="Speed Test" />
        </div>
        <div className={`${styles.linkColumn} `}>
          <Link href="/" linkName="Help Centre" />
          <Link href="/" linkName="Jobs" />
          <Link href="/" linkName="Cookie Preferences" />
          <Link href="/" linkName="Legal Notices" />
        </div>
        <div className={`${styles.linkColumn} `}>
          <Link href="/" linkName="Account" />
          <Link href="/" linkName="Ways to Watch" />
          <Link href="/" linkName="Corporate Information" />
          <Link href="/" linkName="Only on Netflix" />
        </div>
        <div className={`${styles.linkColumn} `}>
          <Link href="/" linkName="Media Centre" />
          <Link href="/" linkName="Terms of Use" />
          <Link href="/" linkName="Contact Us" />
        </div>
      </div>
      <div>
        <select className={`me-4`} name="lang" id="lang">
          <option value="eng">
            <i className={`fa-solid fa-globe`}></i>
            English
          </option>
          <option value="hin">
            <i className={`fa-solid fa-globe`}></i>
            Hindi
          </option>
        </select>
      </div>
      <div>
        <p>Netflix India</p>
      </div>
    </div>
  );
}
