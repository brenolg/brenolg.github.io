import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './AnimatedBalls.module.css';
import '../global.css';

export default function AnimatedBalls() {
  const ball = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      ball.current.className = ` visible ${styles.ball}`;
    }

    if (location.pathname === '/about') {
      ball.current.className = ` visible ${styles.ball}`;
    }
  }, [location]);

  return <div ref={ball} className="ball" />;
}
