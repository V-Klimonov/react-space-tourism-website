import React from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <div className={styles.inner}>
        <div className={styles.textBox}>
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.buttonExpBox}>
          <Link to="destination" className={styles.exploreButton}>
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
