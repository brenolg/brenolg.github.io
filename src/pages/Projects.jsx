import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import FrontImg from '../components/FrontImg';
import styles from './Projects.module.css';
import '../global.css';
import motionProps from '../utils/motionProps';

export default function Projects() {
  const { route } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <main>
      <section className={`${styles.sectionFront}`}>
        <motion.div className={`${styles.imgFront} glass`} {...motionProps.mainContent}>
          <FrontImg />
        </motion.div>

        <motion.div className={`${styles.textFront} glass`} {...motionProps.mainContent}>
          Text
        </motion.div>
      </section>

      <section className={`${styles.sectionBack}`}>
        <motion.div className={`${styles.imgBack} glass`} {...motionProps.mainContent}>
          IMG
        </motion.div>

        <motion.div className={`${styles.textBack} glass`} {...motionProps.mainContent}>
          Text
        </motion.div>
      </section>
    </main>
  );
}
