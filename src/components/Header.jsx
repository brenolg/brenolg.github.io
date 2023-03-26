import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.glass}>
      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        <span className={styles.btnText}>home</span>
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          navigate('/about');
        }}
      >
        <span className={styles.btnText}>sobre</span>
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          navigate('/projects');
        }}
      >
        <span className={styles.btnText}>projetos</span>
      </button>
    </header>
  );
}
