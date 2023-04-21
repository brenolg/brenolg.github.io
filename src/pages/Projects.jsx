import React from 'react';
import { motion } from 'framer-motion';
import FrontImg from '../components/FrontImg';
import styles from './Projects.module.css';
import motionProps from '../utils/motionProps';
import FrontText from '../components/FrontText';

export default function Projects() {
  return (
    <main>
      <section className={`${styles.sectionFront}`}>
        <motion.div className={`${styles.imgFront} glass`} {...motionProps.mainContent}>
          <FrontImg />
        </motion.div>

        <motion.div className={`${styles.textFront} glass`} {...motionProps.mainContent}>
          <FrontText />
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
