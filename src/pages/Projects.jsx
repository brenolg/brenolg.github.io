import React, { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import FrontImg from '../components/FrontImg';
import styles from './Projects.module.css';
import '../global.css';
import tiltProps from '../utils/tiltProps';
import motionProps from '../utils/motionProps';

export default function Projects() {
  const { route } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <main>
      <section className={`${styles.sectionFront}`}>
        <Tilt {...tiltProps.defaultProps}>
          <motion.div className={`${styles.imgFront} glass`} {...motionProps.mainContent}>
            <FrontImg />
          </motion.div>
        </Tilt>

        <Tilt {...tiltProps.defaultProps}>
          <motion.div className={`${styles.textFront} glass`} {...motionProps.mainContent}>
            Text
          </motion.div>
        </Tilt>
      </section>

      <section className={`${styles.sectionBack}`}>
        <Tilt {...tiltProps.defaultProps}>
          <motion.div className={`${styles.imgBack} glass`} {...motionProps.mainContent}>
            IMG
          </motion.div>
        </Tilt>

        <Tilt {...tiltProps.defaultProps}>
          <motion.div className={`${styles.textBack} glass`} {...motionProps.mainContent}>
            Text
          </motion.div>
        </Tilt>
      </section>
    </main>
  );
}
