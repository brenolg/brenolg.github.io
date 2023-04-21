import React from 'react';
import { motion } from 'framer-motion';
import FrontImg from '../components/FrontImg';
import styles from './Projects.module.css';
import motionProps from '../utils/motionProps';
import FrontText from '../components/FrontText';
import BackImg from '../components/BackImg';
import BackText from '../components/BackText';

export default function Projects() {
  return (
    <main>
      <section className={`${styles.sectionFront}`}>
        <motion.div className={`${styles.frontTitle} glass`} {...motionProps.mainContent}>
          <h1>Projetos Front</h1>
        </motion.div>

        <motion.div className={`${styles.imgFront} glass`} {...motionProps.mainContent}>
          <FrontImg />
        </motion.div>

        <motion.div className={`${styles.textFront} glass`} {...motionProps.mainContent}>
          <FrontText />
        </motion.div>
      </section>

      <section className={`${styles.sectionBack}`}>
        <motion.div className={`${styles.frontTitle} glass`} {...motionProps.mainContent}>
          <h1>Projetos Back</h1>
        </motion.div>

        <motion.div className={`${styles.imgBack} glass`} {...motionProps.mainContent}>
          <BackImg />
        </motion.div>

        <motion.div className={`${styles.textBack} glass`} {...motionProps.mainContent}>
          <BackText />
        </motion.div>
      </section>
    </main>
  );
}
