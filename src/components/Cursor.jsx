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
        transition: {
          type: 'spring',
          damping: 5,
          stiffness: 15,
          restDelta: 0.0001,
        },
        x,
        y,
      }}
    >
      <div className={styles.border} />
    </motion.div>
  );
}
