import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Cursor.module.css';
import followPointer from '../utils/followPointer';

export default function Cursor() {
  const cursor = useRef();
  const { x, y } = followPointer(cursor);

  return (
    <motion.div
      ref={cursor}
      className={styles.cursor}
      animate={{
        x,
        y,
      }}
      transition={{
        type: 'spring',
        bounce: 5,
        mass: 5,
        damping: 12,
        stiffness: 20,
        restDelta: 0.001,
      }}
    >
      <div className={styles.border} />
    </motion.div>
  );
}
