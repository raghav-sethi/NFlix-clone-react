import React from "react";
import styles from "./Form.module.css";
export default function Form() {
  return (
    <>
      <p className={`${styles.getStartedPara}`}>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form action="">
        <div className={`${styles.getStartedForm} mb-3 form-floating`}>
          <input
            type="email"
            className={`${styles.getStartedInput} form-control`}
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
          <button className={`${styles.getStartedBtn}`} type="submit">
            Get Started <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </form>
    </>
  );
}
