import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav id={styles.nav}>
      <button className="btnCircle" type="button">
        <FaGithub className="iconBtn" />
      </button>

      <button className="btnCircle" type="button">
        <FaLinkedin className="iconBtn" />
      </button>

      <button className="btnCircle" type="button">
        <FaEnvelope className="iconBtn" />
      </button>
    </nav>
  );
}
