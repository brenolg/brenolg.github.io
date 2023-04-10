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
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <motion.div {...motionProps.pages}>
        <section className={`${styles.sectionFront}`}>
          <Tilt className={`${styles.imgFront} glass`} {...tiltProps.defaultProps}>
            <FrontImg />
          </Tilt>

          <Tilt className={`${styles.textFront} glass`} {...tiltProps.defaultProps} />
        </section>

        <section className={`${styles.sectionBack}`}>
          <Tilt className={`${styles.imgBack} glass`} {...tiltProps.defaultProps} />

          <Tilt className={`${styles.textBack} glass`} {...tiltProps.defaultProps} />
        </section>
      </motion.div>
    </main>
  );
}
