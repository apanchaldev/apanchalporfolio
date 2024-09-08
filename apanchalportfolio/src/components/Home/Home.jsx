import React from "react";
import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contain}>
        <h1 className={styles.title}>Hi, I am Ankit Panchal</h1>
        <p className={styles.description}>
          With 18+ years of unwavering commitment in the software industry, I
          offer a profound blend of strategic leadership, technological
          innovation, and a relentless problem-solving, result-oriented
          attitude. My track record showcases a consistent delivery of impactful
          solutions driving sustained business success.{" "}
        </p>
        <a href="mailto:apanchal.dev@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("main/apanchal.jpg")}
        alt="Image of me"
        className={styles.myImg}
      />
    </section>
  );
}