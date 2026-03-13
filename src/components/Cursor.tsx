import { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Cursor.module.css';
import useFollowPointer from '../utils/useFollowPointer';

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(cursor);

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
