import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
