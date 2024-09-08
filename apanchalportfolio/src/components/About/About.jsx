import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
                {/* Accomplished web application developer with extensive experience
                in designing and implementing scalable solutions using
                cutting-edge technologies and frameworks, including Azure, AWS,
                OpenAI, Local LLMs, .NET Core, Angular, and React. Proven
                ability to lead high-performing development teams, drive rapid
                application development, and collaborate effectively across
                cross-functional teams. Adept at leveraging advanced
                technologies, particularly AI, to create seamless and
                interactive web interfaces. Committed to fostering a culture of
                innovation and excellence in fast-paced environments. */}
                Dynamic Leader with a proven
                track record of managing and mentoring high-performing development
                teams both onsite & offshore. Expert in designing and implementing
                scalable solutions using cutting-edge technologies and
                frameworks, including Azure, AWS, OpenAI, Local LLMs, .NET Core,
                Angular, and React. Skilled at driving rapid application
                development and fostering effective collaboration across
                cross-functional teams. Demonstrated success in leveraging
                advanced technologies, particularly AI, to create seamless and
                interactive web interfaces. Committed to cultivating a
                culture of innovation and excellence in fast-paced environments.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <p>
                Highly skilled in backend development with a strong focus on
                creating high-performance, optimized systems and APIs.
                Specialize in designing and implementing scalable solutions that
                enhance process efficiency and system functionality. Proficient
                in developing and managing RESTful APIs, microservices
                architectures, and integrating various database technologies to
                deliver resilient, high-quality applications. Adept at
                leveraging advanced techniques to optimize system performance
                and support complex, enterprise-level requirements.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.center}>
        <a
          href="https://docs.google.com/document/d/1W58C_Jqk2_J4Q5bvj9PSHz_VQL-XD4A9/edit?usp=drive_link&ouid=111196615849938987782&rtpof=true&sd=true"
          className={styles.downloadBtn}
          target="_blank"
        >
          Resume
        </a>
      </div>
    </section>
  );
};
