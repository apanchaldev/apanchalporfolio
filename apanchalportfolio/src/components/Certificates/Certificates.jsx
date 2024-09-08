import React from "react";

import styles from "./Certificates.module.css";
import { getImageUrl } from "../../utils";

export const Certificates = () => {
  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.content}>
        <ul className={styles.certItems}>
          <li className={styles.certItem}>
            {/* <img src={getImageUrl("certs/cert.png")} alt="Cursor icon" /> */}
            <div className={styles.certItemText}>
              <h3>
                <a
                  href="https://learn.microsoft.com/en-us/users/ankitpanchal-0498/credentials/cb016d79d18eb6bc"
                  target="_blank">
                  Microsoft Certified: Azure AI Engineer Associate
                </a>
              </h3>
              <p>Issued Aug 2024 - Expires Aug 2025</p>
              <p>Credential ID: CB016D79D18EB6BC</p>
            </div>
          </li>
          <li className={styles.certItem}>
            <div className={styles.certItemText}>
              <h3>
                <a
                  href="https://www.credly.com/badges/f663e96c-9632-454c-b1f6-fe20560c42fe"
                  target="_blank">
                  Azure Fundamentals
                </a>
              </h3>
              <p>Issued May 2022</p>
              <p>Credential ID: 993076585</p>
            </div>
          </li>
          <li className={styles.certItem}>
            <div className={styles.certItemText}>
              <h3>
                <a
                  href="https://www.coursera.org/account/accomplishments/professional-cert/V69TMGCCRTF3"
                  target="_blank">
                  Google Project Management
                </a>
              </h3>
              <p>Issued Jan 2024</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
