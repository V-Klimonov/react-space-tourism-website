import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img
          className={styles.logo}
          src={process.env.PUBLIC_URL + "/assets/shared/logo.svg"}
          alt="Logo star"
        />
      </div>

      <div className={styles.linkBox}>
        <Link className={styles.link} to="/">
          <b>00</b> Home
        </Link>
        <Link className={styles.link} to="destination">
          <b>01</b> Destination
        </Link>
        <Link className={styles.link} to="crew">
          <b>02</b> Crew
        </Link>
        <Link className={styles.link} to="technology">
          <b>03</b> Technology
        </Link>
        <span className={styles.line}></span>
      </div>
    </div>
  );
};

export default Header;
