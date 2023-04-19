import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav id={styles.nav}>
      <button className={styles.btn} type="button">
        <FaGithub className={styles.iconBtn} />
      </button>

      <button className={styles.btn} type="button">
        <FaLinkedin className={styles.iconBtn} />
      </button>

      <button className={styles.btn} type="button">
        <FaEnvelope className={styles.iconBtn} />
      </button>

      <button className={styles.btn} type="button">
        <FaWhatsapp className={styles.iconBtn} />
      </button>
    </nav>
  );
}
