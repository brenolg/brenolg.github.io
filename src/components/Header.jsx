import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
  const navigate = useNavigate();

  return (
    <motion.header
      className={styles.glass}
      initial={{
        y: -100,
      }}
      animate={{
        transition: {
          ease: 'linear',
          duration: 1,
        },
        y: 0,
      }}
    >
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
    </motion.header>
  );
}
