import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav id={styles.nav}>
      <button className={styles.btn} type="button">
        <a href="https://github.com/brenolg" target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.iconBtn} />
        </a>
      </button>
      <button className={styles.btn} type="button">
        <a href="http://www.linkedin.com/in/breno-lg" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.iconBtn} />
        </a>
      </button>
      <button className={styles.btn} type="button">
        <a href="mailto: brenolgar@gmail.com">
          <FaEnvelope className={styles.iconBtn} />
        </a>
      </button>

      <button className={styles.btn} type="button">
        <a href="https://wa.me/5531988576330" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={styles.iconBtn} />
        </a>
      </button>
    </nav>
  );
}
