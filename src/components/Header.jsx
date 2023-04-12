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
        home
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          navigate('/about');
        }}
      >
        sobre
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          navigate('/projects');
        }}
      >
        projetos
      </button>
    </header>
  );
}
