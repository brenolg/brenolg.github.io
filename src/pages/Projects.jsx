import React, { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import FrontImg from '../components/FrontImg';
import styles from './Projects.module.css';

export default function Projects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div
      initial={{
        width: 0,
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
      animate={{
        width: '100%',
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        opacity: 0,
        x: window.innerWidth,
        transition: {
          duration: 0.3,
        },
      }}
    >
      <main>
        <section className={`${styles.sectionFront}`}>
          <Tilt
            className={`${styles.imgFront} glass`}
            perspective={2250}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            transitionSpeed={3000}
            glareEnable
            glareBorderRadius="50px"
            glareMaxOpacity={0.1}
            glareColor="rgb(189, 189, 189)"
          >
            <FrontImg />
          </Tilt>

          <Tilt
            className={`${styles.textFront} glass`}
            perspective={2250}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            transitionSpeed={3000}
            glareEnable
            glareBorderRadius="50px"
            glareMaxOpacity={0.1}
            glareColor="rgb(189, 189, 189)"
          />
        </section>

        <section className={`${styles.sectionBack}`}>
          <Tilt
            className={`${styles.imgBack} glass`}
            perspective={2250}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            transitionSpeed={3000}
            glareEnable
            glareBorderRadius="50px"
            glareMaxOpacity={0.1}
            glareColor="rgb(189, 189, 189)"
          />

          <Tilt
            className={`${styles.textBack} glass`}
            perspective={2250}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            transitionSpeed={3000}
            glareEnable
            glareBorderRadius="50px"
            glareMaxOpacity={0.1}
            glareColor="rgb(189, 189, 189)"
          />
        </section>
      </main>
    </motion.div>
  );
}
