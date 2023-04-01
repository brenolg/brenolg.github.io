import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav id={styles.nav}>
      <button className={styles.btnCircle} type="button">
        <FaGithub className={styles.iconBtn} />
      </button>

      <button className={styles.btnCircle} type="button">
        <FaLinkedin className={styles.iconBtn} />
      </button>

      <button className={styles.btnCircle} type="button">
        <FaEnvelope className={styles.iconBtn} />
      </button>
    </nav>
  );
}
