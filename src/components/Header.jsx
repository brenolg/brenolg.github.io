import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.glass}>
      <button
        className={styles.a}
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        HOME
      </button>

      <button
        className={styles.a}
        type="button"
        onClick={() => {
          navigate('/about');
        }}
      >
        SOBRE
      </button>

      <button
        className={styles.a}
        type="button"
        onClick={() => {
          navigate('/projects');
        }}
      >
        PROJETOS
      </button>
    </header>
  );
}
