import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} row`}>
      <div className={`col`}>
        <h1>Netflix</h1>
      </div>

      <div className={`col text-end`}>
        <select name="lang" id="lang">
          <option value="eng">
            <i className="fa-solid fa-globe"></i>
            {/* <!-- &#xf0ac; --> */}
            English
          </option>
          <option value="hin">
            <i className="fa-solid fa-globe"></i>
            {/* <!-- &#xf1ab; --> */}
            Hindi
          </option>
        </select>
        <button type="button">Sign In</button>
      </div>
    </nav>
  );
}
